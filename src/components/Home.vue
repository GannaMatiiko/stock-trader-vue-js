<template>
    <div>
        <h1>Trade or view your portfolio</h1>
        <h4>You may Save & Load your Data</h4>
        <h4>Click on "End Day" to begin a new day!</h4>
        <v-divider class="my-4"></v-divider>
        <p>Your funds: {{ funds | currency}}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.getFunds
            }
        }
    }
</script>