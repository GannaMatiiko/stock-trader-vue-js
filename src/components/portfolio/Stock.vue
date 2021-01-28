<template>
    <v-col sm="6" cols="12">
        <v-card elevation="2">
            <v-card-title class="yellow darken-2 black--text">
                <div>{{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </div>
            </v-card-title>
            <v-card-actions class="card-actions">
                <v-text-field label="Quantity" type="number" v-model.number="quantity"></v-text-field>
                <v-spacer></v-spacer>
                <v-btn color="yellow darken-3 white--text" :disabled="isBtnDisabled" @click="sellStock">
                    {{ insufficientQuantity ? 'Not enough stocks to sell' : 'Sell' }}
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
            isBtnDisabled() {
                return !Number.isInteger(this.quantity) || this.quantity <= 0 || this.insufficientQuantity
            },
            insufficientQuantity() {
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('sellStock', order)
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