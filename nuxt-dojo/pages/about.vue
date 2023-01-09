<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quae sed
      rem consequatur dignissimos atque, veniam, dolorum harum aliquam animi
      asperiores, nesciunt fugit fuga repellat doloribus quia voluptas dolorem.
      Molestiae!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, beatae
      illo. Excepturi, ipsum tempora! Enim praesentium sint repellendus quia in
      beatae, quod eos. Assumenda facere vitae debitis maxime in? Ratione.
    </p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
// const {data} = useFetch('/api/ninja?name=aviral'); // for query params
const { data } = useFetch("/api/currency/INR"); // for body params
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
