<template>
    <div id="home">
        <h3> home page</h3>
        <v-btn
        flat
        href="/login"
        target="login here"
      >
        <span class="mr-2">Enter the Store</span>
      </v-btn>
    <div component = 'dashboard'>
        </div>  
    </div>
</template>


<script>
export default {
    name: 'home',
    data () {
        return {
        }
    }
}
</script>