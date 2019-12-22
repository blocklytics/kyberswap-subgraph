// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class DepositToken extends EthereumEvent {
  get params(): DepositToken__Params {
    return new DepositToken__Params(this);
  }
}

export class DepositToken__Params {
  _event: DepositToken;

  constructor(event: DepositToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TradeExecute extends EthereumEvent {
  get params(): TradeExecute__Params {
    return new TradeExecute__Params(this);
  }
}

export class TradeExecute__Params {
  _event: TradeExecute;

  constructor(event: TradeExecute) {
    this._event = event;
  }

  get origin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get src(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get srcAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get destToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get destAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get destAddress(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class TradeEnabled extends EthereumEvent {
  get params(): TradeEnabled__Params {
    return new TradeEnabled__Params(this);
  }
}

export class TradeEnabled__Params {
  _event: TradeEnabled;

  constructor(event: TradeEnabled) {
    this._event = event;
  }

  get enable(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class WithdrawAddressApproved extends EthereumEvent {
  get params(): WithdrawAddressApproved__Params {
    return new WithdrawAddressApproved__Params(this);
  }
}

export class WithdrawAddressApproved__Params {
  _event: WithdrawAddressApproved;

  constructor(event: WithdrawAddressApproved) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get addr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approve(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class WithdrawFunds extends EthereumEvent {
  get params(): WithdrawFunds__Params {
    return new WithdrawFunds__Params(this);
  }
}

export class WithdrawFunds__Params {
  _event: WithdrawFunds;

  constructor(event: WithdrawFunds) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get destination(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SetContractAddresses extends EthereumEvent {
  get params(): SetContractAddresses__Params {
    return new SetContractAddresses__Params(this);
  }
}

export class SetContractAddresses__Params {
  _event: SetContractAddresses;

  constructor(event: SetContractAddresses) {
    this._event = event;
  }

  get network(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rate(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sanity(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TokenWithdraw extends EthereumEvent {
  get params(): TokenWithdraw__Params {
    return new TokenWithdraw__Params(this);
  }
}

export class TokenWithdraw__Params {
  _event: TokenWithdraw;

  constructor(event: TokenWithdraw) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sendTo(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class EtherWithdraw extends EthereumEvent {
  get params(): EtherWithdraw__Params {
    return new EtherWithdraw__Params(this);
  }
}

export class EtherWithdraw__Params {
  _event: EtherWithdraw;

  constructor(event: EtherWithdraw) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sendTo(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransferAdminPending extends EthereumEvent {
  get params(): TransferAdminPending__Params {
    return new TransferAdminPending__Params(this);
  }
}

export class TransferAdminPending__Params {
  _event: TransferAdminPending;

  constructor(event: TransferAdminPending) {
    this._event = event;
  }

  get pendingAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AdminClaimed extends EthereumEvent {
  get params(): AdminClaimed__Params {
    return new AdminClaimed__Params(this);
  }
}

export class AdminClaimed__Params {
  _event: AdminClaimed;

  constructor(event: AdminClaimed) {
    this._event = event;
  }

  get newAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get previousAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AlerterAdded extends EthereumEvent {
  get params(): AlerterAdded__Params {
    return new AlerterAdded__Params(this);
  }
}

export class AlerterAdded__Params {
  _event: AlerterAdded;

  constructor(event: AlerterAdded) {
    this._event = event;
  }

  get newAlerter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isAdd(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class OperatorAdded extends EthereumEvent {
  get params(): OperatorAdded__Params {
    return new OperatorAdded__Params(this);
  }
}

export class OperatorAdded__Params {
  _event: OperatorAdded;

  constructor(event: OperatorAdded) {
    this._event = event;
  }

  get newOperator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isAdd(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class KyberReserve extends SmartContract {
  static bind(address: Address): KyberReserve {
    return new KyberReserve("KyberReserve", address);
  }

  enableTrade(): boolean {
    let result = super.call("enableTrade", []);

    return result[0].toBoolean();
  }

  try_enableTrade(): CallResult<boolean> {
    let result = super.tryCall("enableTrade", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  pendingAdmin(): Address {
    let result = super.call("pendingAdmin", []);

    return result[0].toAddress();
  }

  try_pendingAdmin(): CallResult<Address> {
    let result = super.tryCall("pendingAdmin", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getOperators(): Array<Address> {
    let result = super.call("getOperators", []);

    return result[0].toAddressArray();
  }

  try_getOperators(): CallResult<Array<Address>> {
    let result = super.tryCall("getOperators", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddressArray());
  }

  sanityRatesContract(): Address {
    let result = super.call("sanityRatesContract", []);

    return result[0].toAddress();
  }

  try_sanityRatesContract(): CallResult<Address> {
    let result = super.tryCall("sanityRatesContract", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  withdraw(token: Address, amount: BigInt, destination: Address): boolean {
    let result = super.call("withdraw", [
      EthereumValue.fromAddress(token),
      EthereumValue.fromUnsignedBigInt(amount),
      EthereumValue.fromAddress(destination)
    ]);

    return result[0].toBoolean();
  }

  try_withdraw(
    token: Address,
    amount: BigInt,
    destination: Address
  ): CallResult<boolean> {
    let result = super.tryCall("withdraw", [
      EthereumValue.fromAddress(token),
      EthereumValue.fromUnsignedBigInt(amount),
      EthereumValue.fromAddress(destination)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  disableTrade(): boolean {
    let result = super.call("disableTrade", []);

    return result[0].toBoolean();
  }

  try_disableTrade(): CallResult<boolean> {
    let result = super.tryCall("disableTrade", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getAlerters(): Array<Address> {
    let result = super.call("getAlerters", []);

    return result[0].toAddressArray();
  }

  try_getAlerters(): CallResult<Array<Address>> {
    let result = super.tryCall("getAlerters", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddressArray());
  }

  getConversionRate(
    src: Address,
    dest: Address,
    srcQty: BigInt,
    blockNumber: BigInt
  ): BigInt {
    let result = super.call("getConversionRate", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dest),
      EthereumValue.fromUnsignedBigInt(srcQty),
      EthereumValue.fromUnsignedBigInt(blockNumber)
    ]);

    return result[0].toBigInt();
  }

  try_getConversionRate(
    src: Address,
    dest: Address,
    srcQty: BigInt,
    blockNumber: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("getConversionRate", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dest),
      EthereumValue.fromUnsignedBigInt(srcQty),
      EthereumValue.fromUnsignedBigInt(blockNumber)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getSrcQty(src: Address, dest: Address, dstQty: BigInt, rate: BigInt): BigInt {
    let result = super.call("getSrcQty", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dest),
      EthereumValue.fromUnsignedBigInt(dstQty),
      EthereumValue.fromUnsignedBigInt(rate)
    ]);

    return result[0].toBigInt();
  }

  try_getSrcQty(
    src: Address,
    dest: Address,
    dstQty: BigInt,
    rate: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("getSrcQty", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dest),
      EthereumValue.fromUnsignedBigInt(dstQty),
      EthereumValue.fromUnsignedBigInt(rate)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  kyberNetwork(): Address {
    let result = super.call("kyberNetwork", []);

    return result[0].toAddress();
  }

  try_kyberNetwork(): CallResult<Address> {
    let result = super.tryCall("kyberNetwork", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  conversionRatesContract(): Address {
    let result = super.call("conversionRatesContract", []);

    return result[0].toAddress();
  }

  try_conversionRatesContract(): CallResult<Address> {
    let result = super.tryCall("conversionRatesContract", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  tradeEnabled(): boolean {
    let result = super.call("tradeEnabled", []);

    return result[0].toBoolean();
  }

  try_tradeEnabled(): CallResult<boolean> {
    let result = super.tryCall("tradeEnabled", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  approvedWithdrawAddresses(param0: Bytes): boolean {
    let result = super.call("approvedWithdrawAddresses", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toBoolean();
  }

  try_approvedWithdrawAddresses(param0: Bytes): CallResult<boolean> {
    let result = super.tryCall("approvedWithdrawAddresses", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  admin(): Address {
    let result = super.call("admin", []);

    return result[0].toAddress();
  }

  try_admin(): CallResult<Address> {
    let result = super.tryCall("admin", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getBalance(token: Address): BigInt {
    let result = super.call("getBalance", [EthereumValue.fromAddress(token)]);

    return result[0].toBigInt();
  }

  try_getBalance(token: Address): CallResult<BigInt> {
    let result = super.tryCall("getBalance", [
      EthereumValue.fromAddress(token)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getDestQty(
    src: Address,
    dest: Address,
    srcQty: BigInt,
    rate: BigInt
  ): BigInt {
    let result = super.call("getDestQty", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dest),
      EthereumValue.fromUnsignedBigInt(srcQty),
      EthereumValue.fromUnsignedBigInt(rate)
    ]);

    return result[0].toBigInt();
  }

  try_getDestQty(
    src: Address,
    dest: Address,
    srcQty: BigInt,
    rate: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("getDestQty", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dest),
      EthereumValue.fromUnsignedBigInt(srcQty),
      EthereumValue.fromUnsignedBigInt(rate)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class EnableTradeCall extends EthereumCall {
  get inputs(): EnableTradeCall__Inputs {
    return new EnableTradeCall__Inputs(this);
  }

  get outputs(): EnableTradeCall__Outputs {
    return new EnableTradeCall__Outputs(this);
  }
}

export class EnableTradeCall__Inputs {
  _call: EnableTradeCall;

  constructor(call: EnableTradeCall) {
    this._call = call;
  }
}

export class EnableTradeCall__Outputs {
  _call: EnableTradeCall;

  constructor(call: EnableTradeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveAlerterCall extends EthereumCall {
  get inputs(): RemoveAlerterCall__Inputs {
    return new RemoveAlerterCall__Inputs(this);
  }

  get outputs(): RemoveAlerterCall__Outputs {
    return new RemoveAlerterCall__Outputs(this);
  }
}

export class RemoveAlerterCall__Inputs {
  _call: RemoveAlerterCall;

  constructor(call: RemoveAlerterCall) {
    this._call = call;
  }

  get alerter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAlerterCall__Outputs {
  _call: RemoveAlerterCall;

  constructor(call: RemoveAlerterCall) {
    this._call = call;
  }
}

export class WithdrawTokenCall extends EthereumCall {
  get inputs(): WithdrawTokenCall__Inputs {
    return new WithdrawTokenCall__Inputs(this);
  }

  get outputs(): WithdrawTokenCall__Outputs {
    return new WithdrawTokenCall__Outputs(this);
  }
}

export class WithdrawTokenCall__Inputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get sendTo(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class WithdrawTokenCall__Outputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }
}

export class AddAlerterCall extends EthereumCall {
  get inputs(): AddAlerterCall__Inputs {
    return new AddAlerterCall__Inputs(this);
  }

  get outputs(): AddAlerterCall__Outputs {
    return new AddAlerterCall__Outputs(this);
  }
}

export class AddAlerterCall__Inputs {
  _call: AddAlerterCall;

  constructor(call: AddAlerterCall) {
    this._call = call;
  }

  get newAlerter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAlerterCall__Outputs {
  _call: AddAlerterCall;

  constructor(call: AddAlerterCall) {
    this._call = call;
  }
}

export class ApproveWithdrawAddressCall extends EthereumCall {
  get inputs(): ApproveWithdrawAddressCall__Inputs {
    return new ApproveWithdrawAddressCall__Inputs(this);
  }

  get outputs(): ApproveWithdrawAddressCall__Outputs {
    return new ApproveWithdrawAddressCall__Outputs(this);
  }
}

export class ApproveWithdrawAddressCall__Inputs {
  _call: ApproveWithdrawAddressCall;

  constructor(call: ApproveWithdrawAddressCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get approve(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class ApproveWithdrawAddressCall__Outputs {
  _call: ApproveWithdrawAddressCall;

  constructor(call: ApproveWithdrawAddressCall) {
    this._call = call;
  }
}

export class WithdrawCall extends EthereumCall {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get destination(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DisableTradeCall extends EthereumCall {
  get inputs(): DisableTradeCall__Inputs {
    return new DisableTradeCall__Inputs(this);
  }

  get outputs(): DisableTradeCall__Outputs {
    return new DisableTradeCall__Outputs(this);
  }
}

export class DisableTradeCall__Inputs {
  _call: DisableTradeCall;

  constructor(call: DisableTradeCall) {
    this._call = call;
  }
}

export class DisableTradeCall__Outputs {
  _call: DisableTradeCall;

  constructor(call: DisableTradeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TradeCall extends EthereumCall {
  get inputs(): TradeCall__Inputs {
    return new TradeCall__Inputs(this);
  }

  get outputs(): TradeCall__Outputs {
    return new TradeCall__Outputs(this);
  }
}

export class TradeCall__Inputs {
  _call: TradeCall;

  constructor(call: TradeCall) {
    this._call = call;
  }

  get srcToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get srcAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get destToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get destAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get conversionRate(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get validate(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }
}

export class TradeCall__Outputs {
  _call: TradeCall;

  constructor(call: TradeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferAdminCall extends EthereumCall {
  get inputs(): TransferAdminCall__Inputs {
    return new TransferAdminCall__Inputs(this);
  }

  get outputs(): TransferAdminCall__Outputs {
    return new TransferAdminCall__Outputs(this);
  }
}

export class TransferAdminCall__Inputs {
  _call: TransferAdminCall;

  constructor(call: TransferAdminCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferAdminCall__Outputs {
  _call: TransferAdminCall;

  constructor(call: TransferAdminCall) {
    this._call = call;
  }
}

export class ClaimAdminCall extends EthereumCall {
  get inputs(): ClaimAdminCall__Inputs {
    return new ClaimAdminCall__Inputs(this);
  }

  get outputs(): ClaimAdminCall__Outputs {
    return new ClaimAdminCall__Outputs(this);
  }
}

export class ClaimAdminCall__Inputs {
  _call: ClaimAdminCall;

  constructor(call: ClaimAdminCall) {
    this._call = call;
  }
}

export class ClaimAdminCall__Outputs {
  _call: ClaimAdminCall;

  constructor(call: ClaimAdminCall) {
    this._call = call;
  }
}

export class TransferAdminQuicklyCall extends EthereumCall {
  get inputs(): TransferAdminQuicklyCall__Inputs {
    return new TransferAdminQuicklyCall__Inputs(this);
  }

  get outputs(): TransferAdminQuicklyCall__Outputs {
    return new TransferAdminQuicklyCall__Outputs(this);
  }
}

export class TransferAdminQuicklyCall__Inputs {
  _call: TransferAdminQuicklyCall;

  constructor(call: TransferAdminQuicklyCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferAdminQuicklyCall__Outputs {
  _call: TransferAdminQuicklyCall;

  constructor(call: TransferAdminQuicklyCall) {
    this._call = call;
  }
}

export class AddOperatorCall extends EthereumCall {
  get inputs(): AddOperatorCall__Inputs {
    return new AddOperatorCall__Inputs(this);
  }

  get outputs(): AddOperatorCall__Outputs {
    return new AddOperatorCall__Outputs(this);
  }
}

export class AddOperatorCall__Inputs {
  _call: AddOperatorCall;

  constructor(call: AddOperatorCall) {
    this._call = call;
  }

  get newOperator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddOperatorCall__Outputs {
  _call: AddOperatorCall;

  constructor(call: AddOperatorCall) {
    this._call = call;
  }
}

export class RemoveOperatorCall extends EthereumCall {
  get inputs(): RemoveOperatorCall__Inputs {
    return new RemoveOperatorCall__Inputs(this);
  }

  get outputs(): RemoveOperatorCall__Outputs {
    return new RemoveOperatorCall__Outputs(this);
  }
}

export class RemoveOperatorCall__Inputs {
  _call: RemoveOperatorCall;

  constructor(call: RemoveOperatorCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveOperatorCall__Outputs {
  _call: RemoveOperatorCall;

  constructor(call: RemoveOperatorCall) {
    this._call = call;
  }
}

export class SetContractsCall extends EthereumCall {
  get inputs(): SetContractsCall__Inputs {
    return new SetContractsCall__Inputs(this);
  }

  get outputs(): SetContractsCall__Outputs {
    return new SetContractsCall__Outputs(this);
  }
}

export class SetContractsCall__Inputs {
  _call: SetContractsCall;

  constructor(call: SetContractsCall) {
    this._call = call;
  }

  get _kyberNetwork(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _conversionRates(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _sanityRates(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetContractsCall__Outputs {
  _call: SetContractsCall;

  constructor(call: SetContractsCall) {
    this._call = call;
  }
}

export class WithdrawEtherCall extends EthereumCall {
  get inputs(): WithdrawEtherCall__Inputs {
    return new WithdrawEtherCall__Inputs(this);
  }

  get outputs(): WithdrawEtherCall__Outputs {
    return new WithdrawEtherCall__Outputs(this);
  }
}

export class WithdrawEtherCall__Inputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get sendTo(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawEtherCall__Outputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _kyberNetwork(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ratesContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends EthereumCall {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}
