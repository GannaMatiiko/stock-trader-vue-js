const state = {
    funds: 10000,
    stocks: []
}

const getters = {
    getFunds: state => {
        return state.funds
    },
    stockPortfolio: (state, getters) => {
        return state.stocks.map(stock => {
            const record = getters.getStocks.find(el => el.id == stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                price: record.price,
                name: record.name
            }
        })
    }
}

const mutations = {
    'BUY_STOCK': (state, {stockId, stockPrice, quantity }) => {
        const record = state.stocks.find(el => el.id == stockId)
        if (record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= quantity * stockPrice
    },
    'SELL_STOCK': (state, { stockId, stockPrice, quantity }) => {
        const record = state.stocks.find(el => el.id == stockId)
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += quantity * stockPrice
    },
    'SET_PORTFOLIO': (state, portfolio) => {
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        state.funds = portfolio.funds
    }
}

const actions = {
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order)
    }
}

export default { state, getters, mutations, actions }