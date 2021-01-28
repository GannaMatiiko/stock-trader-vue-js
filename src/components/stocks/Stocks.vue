<template>
    <div>
        <h3>Pick up any stock you want to buy</h3>
        <h4 class="mb-8">You are awesome stock trader!</h4>
        <v-row>
            <Stock 
                v-for="stock in stocks" 
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
            stocks() {
                return this.$store.getters.getStocks
            }
        }
    }
</script>