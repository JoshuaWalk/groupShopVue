<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Awesome</span>
        <span class="font-weight-light">Sauce</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="/shop"
      >
        <span class="mr-2">Shop</span>
      </v-btn>
      <v-btn
        flat
        href="/login"
      >
        <span class="mr-2">Login</span>
        </v-btn>
      <v-btn
        flat
        href="/signup"
      >
        <span class="mr-2">Sign Up</span>
      </v-btn>
      <v-btn
        flat
        href="/cart"
      >
        <span class="mr-2">Cart</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      
    }
  }
}
</script>
