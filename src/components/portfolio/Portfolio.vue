<template>
    <div>
        <template v-if="stocksPortfolio.length">
            <h3>Hey, that's the stocks you have bought!</h3>
            <h4 class="mb-8">Feel free to sell them in case you began new succesfull day</h4>
        </template>
        <template v-else>
            <h3>It seems you haven't bought any stocks yet... Hurry up!</h3>
        </template>
        <v-row>
            <Stock 
                v-for="stock in stocksPortfolio" 
                :stock="stock"
                :key="stock.id"
            ></Stock>
        </v-row>
    </div>
</template>

<script>
    import Stock from './Stock.vue'
    export default {
        data() {
            return {
            }
        },
        components: {
            Stock
        },
        computed: {
            stocksPortfolio() {
                return this.$store.getters.stockPortfolio
            }
        }
    }
</script>