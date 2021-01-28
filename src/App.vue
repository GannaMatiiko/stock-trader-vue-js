<template>
  <!-- App.vue -->
  <v-app>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <Header></Header>
      <!-- Provides the application the proper gutter -->
      <v-container class="py-10">
        <!-- If using vue-router -->
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      Header
    },
    created() {
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style>
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    } to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    } to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }

  .v-main__wrap {
    background: aliceblue;
  }
</style>


