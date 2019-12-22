import { 
	Address, BigInt, Bytes, Value, log
 } from "@graphprotocol/graph-ts"
import { ExecuteTrade, KyberNetworkSet, TokenWithdraw, KyberNetworkProxy } from '../generated/KyberNetworkProxy/KyberNetworkProxy'
import { 
  AddReserveToNetwork, 
  AddReserveToNetwork1, 
  RemoveReserveFromNetwork,
  KyberNetworkSetEnable,
  ListReservePairs,
  ListReservePairs1
} from '../generated/templates/KyberNetwork/KyberNetwork'
import { 
  Network,
  Reserve,
  ReserveTokenBalance,
  Token, 
  ProxyTrade, 
  ReserveTrade,
  TradingPair,
  User
} from '../generated/schema'
import { 
  DepositToken,
  EtherWithdraw,
  SetContractAddresses,
  TokenWithdraw,
  TradeEnabled,
  TradeExecute,
  WithdrawFunds
} from '../generated/templates/KyberReserve/KyberReserve'
import { KyberNetwork, KyberReserve } from '../generated/templates'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
const ETH_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'

/* KyberNetworkProxy */

export function handleKyberNetworkSet(event: KyberNetworkSet): void {
  let new_id = event.params.newNetworkContract.toHexString()
  let new_network = new Network(new_id)
  new_network.proxy = event.address.toHexString()
  new_network.isCurrentNetwork = true
  new_network.isEnabled = false
  new_network.save()

  KyberNetwork.create(event.params.newNetworkContract)

  let old_id = event.params.oldNetworkContract.toHexString()

  
  let old_network = Network.load(old_id)
  if (old_network === null) {
    // Ignore initial setup case for old network
    if (old_id == ZERO_ADDRESS) return

    log.error("Could not load network {}", [old_id])
    return
  }
  old_network.isCurrentNetwork = false
  old_network.save()
}

export function handleExecuteTradeProxy(event: ExecuteTrade): void {
  let id = getIdForExecuteTrade(event)
  let trade = ProxyTrade.load(id)
  if (trade === null) {
    trade = new ProxyTrade(id)
  }
  trade.trader = getUser(event.params.trader)
  trade.src = event.params.src.toHexString()
  trade.dest = event.params.dest.toHexString()
  trade.actualSrcAmount = event.params.actualSrcAmount
  trade.actualDestAmount = event.params.actualDestAmount
  trade.createdAtBlockTimestamp = event.block.timestamp
  trade.createdAtBlockNumber = event.block.number
  trade.createdAtLogIndex = event.logIndex
  trade.createdAtTransactionHash = event.transaction.hash.toHexString()
  trade.save()
}

/* KyberNetwork */

export function handleKyberNetworkSetEnable(event: KyberNetworkSetEnable): void {
  let id = event.address.toHexString()
  let network = Network.load(id)
  if (network === null) {
    log.error("Could not load network {}", [id])
  }
  network.isEnabled = event.params.isEnabled
  network.save()
}

export function handleAddReserveToNetwork(event: AddReserveToNetwork): void {
  // Do not continue if reserve was not added successfully
  if (event.params.add == false) return

  let id = event.params.reserve.toHexString()
  let reserve = Reserve.load(id)
  if (reserve === null) {
    reserve = new Reserve(id)
    reserve.network = event.address.toHexString()
    reserve.isPermissionless = event.params.isPermissionless
    reserve.isRemoved = false
    reserve.isTradeEnabled = true
    reserve.createdAtBlockNumber = event.block.number
    reserve.createdAtLogIndex = event.logIndex
    reserve.createdAtBlockTimestamp = event.block.timestamp
    reserve.createdAtTransactionHash = event.transaction.hash.toHexString()
    reserve.save()

    KyberReserve.create(event.params.reserve)
  }
}

export function handleAddReserveToNetworkV1(event: AddReserveToNetwork1): void {
  // Do not continue if reserve was not added successfully
  if (event.params.add == false) return

  let id = event.params.reserve.toHexString()
  let reserve = Reserve.load(id)
  if (reserve === null) {
    reserve = new Reserve(id)
    reserve.network = event.address.toHexString()
    reserve.isPermissionless = false
    reserve.isRemoved = false
    reserve.isTradeEnabled = true
    reserve.createdAtBlockNumber = event.block.number
    reserve.createdAtLogIndex = event.logIndex
    reserve.createdAtBlockTimestamp = event.block.timestamp
    reserve.createdAtTransactionHash = event.transaction.hash.toHexString()
    reserve.save()

    KyberReserve.create(event.params.reserve)
  }
}

export function handleRemoveReserveFromNetwork(event: RemoveReserveFromNetwork): void {
  let id = event.params.reserve.toHexString()
  let reserve = Reserve.load(id)
  if (reserve === null) {
    log.warning("Could not load removed reserve. {}", [id])
    return
  }
  reserve.isRemoved = true
  reserve.save()
}

export function handleListReservePairs(event: ListReservePairs): void {
  let reserve = Reserve.load(event.params.reserve.toHexString())
  if (reserve === null) {
    log.warning("Could not load reserve for trading pair. {}", [event.params.reserve.toHexString()])
    // return
  }
  
  let id = event.params.reserve.toHexString()
    .concat('-').concat(event.params.src.toHexString())
    .concat('-').concat(event.params.dest.toHexString())
  let tradingPair = TradingPair.load(id)
  if (tradingPair === null) {
    tradingPair = new TradingPair(id)
  }
  tradingPair.reserve = event.params.reserve.toHexString()
  tradingPair.src = event.params.src.toHexString()
  tradingPair.dest = event.params.dest.toHexString()
  tradingPair.isTradingPairEnabled = event.params.add
  tradingPair.save()

  getToken(event.params.src)
  getToken(event.params.dest)
}

export function handleListReservePairsV1(event: ListReservePairs1): void {
  let reserve = Reserve.load(event.params.reserve.toHexString())
  if (reserve === null) {
    log.warning("Could not load reserve for trading pair. {}", [event.params.reserve.toHexString()])
    // return
  }
  
  let id = event.params.reserve.toHexString()
    .concat('-').concat(event.params.src.toHexString())
    .concat('-').concat(event.params.dest.toHexString())
  let tradingPair = TradingPair.load(id)
  if (tradingPair === null) {
    tradingPair = new TradingPair(id)
  }
  tradingPair.reserve = event.params.reserve.toHexString()
  tradingPair.src = event.params.src.toHexString()
  tradingPair.dest = event.params.dest.toHexString()
  tradingPair.isTradingPairEnabled = event.params.add
  tradingPair.save()

  getToken(event.params.src)
  getToken(event.params.dest)
}

/* KyberReserve */

export function handleDepositToken(event: DepositToken): void {
  let id = event.address.toHexString().concat('-').concat(event.params.token.toHexString())
  let reserveTokenBalance = ReserveTokenBalance.load(id)
  if (reserveTokenBalance === null) {
    log.debug("handleDepositToken-{}", [id])
    reserveTokenBalance = new ReserveTokenBalance(id)
    reserveTokenBalance.amount = BigInt.fromI32(0)
    reserveTokenBalance.reserve = event.address.toHexString()
    reserveTokenBalance.token = event.params.token.toHexString()
  }

  reserveTokenBalance.amount = reserveTokenBalance.amount.plus(event.params.amount)
  reserveTokenBalance.save()

  getToken(event.params.token)
}

export function handleWithdrawFunds(event: WithdrawFunds): void {
  let id = event.address.toHexString().concat('-').concat(event.params.token.toHexString())
  let reserveTokenBalance = ReserveTokenBalance.load(id)
  if (reserveTokenBalance === null) {
    log.error("Reserve token balance not found for WithdrawFunds. {}", [id])
    return
  }
  reserveTokenBalance.amount = reserveTokenBalance.amount.minus(event.params.amount)
  if (reserveTokenBalance.amount.lt(BigInt.fromI32(0))) log.error("Negative reserve token balance after WithdrawFunds {}", [id])
  reserveTokenBalance.save()
}

export function handleEtherWithdraw(event: EtherWithdraw): void {
  let id = event.address.toHexString().concat('-').concat(ETH_ADDRESS)
  let reserveTokenBalance = ReserveTokenBalance.load(id)
  if (reserveTokenBalance === null) {
    log.error("Reserve token balance not found for EtherWithdraw. {}", [id])
    return
  }
  reserveTokenBalance.amount = reserveTokenBalance.amount.minus(event.params.amount)
  if (reserveTokenBalance.amount.lt(BigInt.fromI32(0))) log.error("Negative reserve token balance after EtherWithdraw {}", [id])
  reserveTokenBalance.save()
}

export function handleTokenWithdraw(event: TokenWithdraw): void {
  let id = event.address.toHexString().concat('-').concat(event.params.token.toHexString())
  let reserveTokenBalance = ReserveTokenBalance.load(id)
  if (reserveTokenBalance === null) {
    log.error("Reserve token balance not found for TokenWithdraw. {}", [id])
    return
  }
  reserveTokenBalance.amount = reserveTokenBalance.amount.minus(event.params.amount)
  if (reserveTokenBalance.amount.lt(BigInt.fromI32(0))) log.error("Negative reserve token balance after TokenWithdraw {}", [id])
  reserveTokenBalance.save()
}

export function handleTradeExecuteReserve(event: TradeExecute): void {

  /* Update ReserveTrade */

  let id = getIdForTradeExecute(event)
  let trade = ReserveTrade.load(id)
  if (trade === null) {
    trade = new ReserveTrade(id)
  }
  // trade.trader = getUser(event.params.)
  trade.src = event.params.src.toHexString()
  trade.dest = event.params.destToken.toHexString()
  trade.srcAmount = event.params.srcAmount
  trade.destAmount = event.params.destAmount
  trade.reserve = event.address.toHexString()
  trade.createdAtBlockTimestamp = event.block.timestamp
  trade.createdAtBlockNumber = event.block.number
  trade.createdAtLogIndex = event.logIndex
  trade.createdAtTransactionHash = event.transaction.hash.toHexString()
  trade.save()

  /* Update Reserve Token Balances */

  let src_id = event.address.toHexString().concat('-').concat(event.params.src.toHexString())
  let src_reserveTokenBalance = ReserveTokenBalance.load(src_id)
  if (src_reserveTokenBalance === null) {
    src_reserveTokenBalance = new ReserveTokenBalance(src_id)
    src_reserveTokenBalance.amount = BigInt.fromI32(0)
    src_reserveTokenBalance.reserve = event.address.toHexString()
    src_reserveTokenBalance.token = event.params.src.toHexString()
  }

  src_reserveTokenBalance.amount = src_reserveTokenBalance.amount.plus(event.params.srcAmount)
  src_reserveTokenBalance.save()

  let dest_id = event.address.toHexString().concat('-').concat(event.params.destToken.toHexString())
  let dest_reserveTokenBalance = ReserveTokenBalance.load(dest_id)
  if (dest_reserveTokenBalance === null) {
    dest_reserveTokenBalance = new ReserveTokenBalance(dest_id)
    dest_reserveTokenBalance.amount = BigInt.fromI32(0)
    dest_reserveTokenBalance.reserve = event.address.toHexString()
    dest_reserveTokenBalance.token = event.params.destToken.toHexString()
  }

  dest_reserveTokenBalance.amount = dest_reserveTokenBalance.amount.minus(event.params.destAmount)
  if (dest_reserveTokenBalance.amount.lt(BigInt.fromI32(0))) log.error("Negative reserve token balance after trade. {}", [dest_id])
  dest_reserveTokenBalance.save()
}

export function handleTradeEnabled(event: TradeEnabled): void {
  let id = event.address.toHexString()
  let reserve = Reserve.load(id)
  if (reserve === null) {
    log.error("Could not load reserve with trade enabled. {}", [id])
    return
  }
  reserve.isTradeEnabled = event.params.enable
  reserve.save()
}

export function handleSetContractAddresses(event: SetContractAddresses): void {
  let id = event.address.toHexString()
  let reserve = Reserve.load(id)
  if (reserve === null) {
      log.error("Could not load reserve with handleSetContractAddresses. {}", [id])
      return
  }
    // if (id == "0x63825c174ab367968ec60f061753d3bbd36a0d8f") {
    //   // Manually handling for reserve 0x63825c174ab367968ec60f061753d3bbd36a0d8f
    //   log.debug("Manually creating reserve 0x63825c174ab367968ec60f061753d3bbd36a0d8f.", [])
    //   KyberReserve.create(Address.fromString('0x63825c174ab367968ec60f061753d3bbd36a0d8f'));
    //   reserve = new Reserve(id)
    //   reserve.isPermissionless = false
    //   reserve.isRemoved = false
    //   reserve.isTradeEnabled = true
    //   reserve.createdAtBlockNumber = event.block.number
    //   reserve.createdAtLogIndex = event.logIndex
    //   reserve.createdAtBlockTimestamp = event.block.timestamp
    //   reserve.createdAtTransactionHash = event.transaction.hash.toHexString()
    //   KyberReserve.create(event.address)
    // }
    // else {
    //   log.error("Could not load reserve with handleSetContractAddresses. {}", [id])
    //   return
    // }
  // }
  reserve.network = event.params.network.toHexString()
  reserve.rateContract = event.params.rate.toHexString()
  reserve.sanityContract = event.params.sanity.toHexString()
  reserve.save()
  
}

/* Helper functions */

function getIdForExecuteTrade(event: ExecuteTrade): string {
  return event.block.number.toHexString().concat(event.logIndex.toHexString())
}

function getIdForTradeExecute(event: TradeExecute): string {
  return event.block.number.toHexString().concat(event.logIndex.toHexString())
}

function getToken(address: Address): string {
  let id = address.toHexString()
  let token = Token.load(id)
  if (token === null) {
    token = new Token(id)
    token.save()
  }
  return token.id
}

function getUser(address: Address): string {
  let user = User.load(address.toHexString())
  if (user === null) {
    user = new User(address.toHexString())
    user.save()
  }
  return user.id
}