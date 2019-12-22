# KyberSwap Subgraph

View sample queries at https://thegraph.com/explorer/subgraph/blocklytics/kyberswap
  * [Trades by user](https://thegraph.com/explorer/subgraph/blocklytics/kyberswap?query=Trades%20for%20user)
  * [Reserves](https://thegraph.com/explorer/subgraph/blocklytics/kyberswap?query=Reserves)
  * [Latest trades](https://thegraph.com/explorer/subgraph/blocklytics/kyberswap?query=ProxyTrades)

# Demo app

Web app with live updates using websockets at https://kyber-swaps-dot-handy-reference-234917.appspot.com/

# Notes

ReserveBalances are currently inaccurate.

`ProxyTrades` are a summary of trades fulfilled by one or more reserves. For trades through individual reserves, use entity `ReserveTrades`.
