<template>
    <center>
        <div id="shop">
            <h3> this is the shop </h3>

        <li v-for="mens in tshirts" v-bind:key="tshirts.id">
        id: {{mens.id}}
        <button @click='addToCart(product)' class='button is-info'>Add to cart</button>
        </li>

        <button onclick
        
        </div>
    </center>
</template>



<script>
const db = firebase.firestore();
console.log(db);
export default {
  name: "shop",
  data: () => ({ tshirts: [] }),
  firestore: {
    tshirts: db.collection("tshirts")
  },
  methods: {
            addToCart () {
                alert ('added')
            }
}};
</script>