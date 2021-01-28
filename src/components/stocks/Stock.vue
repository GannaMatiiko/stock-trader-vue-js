<template>
    <v-col sm="6" cols="12">
        <v-card elevation="2">
            <v-card-title class="green darken-1 white--text">
                <div>{{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </div>
            </v-card-title>
            <v-card-actions class="card-actions">
                <v-text-field label="Quantity" type="number" v-model.number="quantity"></v-text-field>
                <v-spacer></v-spacer>
                <v-btn color="green darken-3 white--text" :disabled="isBtnDisabled" @click="buyStock">
                    {{ insufficientFunds ? 'Not enough money' : 'Buy' }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        data() {
            return {
                quantity: 0
            }
        },
        props: ['stock'],
        computed: {
            funds() {
                return this.$store.getters.getFunds
            },
            isBtnDisabled() {
                return !Number.isInteger(this.quantity) || this.quantity <= 0 || this.insufficientFunds
            },
            insufficientFunds() {
                return this.funds < this.quantity * this.stock.price
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('buyStock', order)
                this.quantity = 0
            }
        }
    }
</script>

<style scoped>
    .card-actions {
        padding: 10px 30px;
    }
</style>