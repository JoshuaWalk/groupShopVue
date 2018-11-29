<template>
  <div id="home">
    <h3>home page</h3>
    <v-btn flat href="/login" target="login here">
      <span class="mr-2">Enter the Store</span>
    </v-btn>
    <div component="dashboard">
        <ul>
      <li v-for="user in users" v-bind:key="user.id">
        id: {{user.id}}
      </li>
    </ul>
    </div>
  </div>
</template>


<script>
const db = firebase.firestore();
console.log(db);
export default {
  name: "home",
  data: () => ({ users: [] }),
  firestore: {
    users: db.collection("users")
  }
};
</script>