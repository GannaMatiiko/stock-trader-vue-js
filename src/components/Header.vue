<template>
  <v-app-bar color="deep-purple accent-4" 
    :height="$vuetify.breakpoint.mdAndUp ? 48 : 180"
    dark>
    <v-container>
        <v-row>
          <v-col class="d-flex align-center" lg="7" md="6" sm="12">
              <v-tabs
                fixed-tabs
                background-color="deep-purple accent-4"
                dark
              >
                <v-tab to="/">
                  <v-icon class="mr-2">mdi-home</v-icon>
                  Stock Trader
                </v-tab>
                <v-tab to="/portfolio">
                  Portfolio
                </v-tab>
                <v-tab to="/stocks">
                  Stocks
                </v-tab>
              </v-tabs>
          </v-col>
          <v-col class="d-flex align-center justify-end" lg="5" md="6" sm="12">
              <v-btn @click="endDay"
                depressed
                color="light-blue darken-1"
                class="mr-4"
              >
                End Day
              </v-btn>
              <div>Funds: {{ funds | currency}}</div>

              <v-menu rounded offset-y>
                <template v-slot:activator="{ attrs, on }">
                  <v-btn
                    color="teal darken-1"
                    class="white--text ma-5"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Save & Load <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item link>
                    <v-list-item-title @click="saveData">Save Data</v-list-item-title>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-title @click="loadData">Load Data</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

          </v-col>
        </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getFunds', 'stockPortfolio', 'getStocks']),
      funds() {
        return this.$store.getters.getFunds
      },
      heightAuto() {
        return {
          height: $vuetify.breakpoint.smAndDown ? 'auto' : ''
        }
      }
    },
    methods: {
      endDay() {
        this.$store.dispatch('randomizeStocks')
      },
      saveData() {
        const data = {
          funds: this.getFunds,
          stockPortfolio: this.stockPortfolio,
          stocks: this.getStocks
        }
        this.$http.put('data.json', data)
      },
      loadData() {
        this.$store.dispatch('fetchData')
      }
    }
  }
</script>