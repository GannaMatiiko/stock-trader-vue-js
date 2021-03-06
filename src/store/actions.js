import Vue from 'vue'

export const fetchData = ({ commit }) => {
    Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
        if (data) {
            const stocks = data.stocks
            const stockPortfolio = data.stockPortfolio
            const funds = data.funds

            const portfolio = {
                funds,
                stockPortfolio
            }

            commit('SET_STOCKS', stocks)
            commit('SET_PORTFOLIO', portfolio)
        }
    })
}