<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      Written in Vue 2, utilising Vue CLI, and Bootstrap Vue for rapid
      prototyping and scaffolding
    </p>

    <p>Github used to host dummy .json endpoints via Github Pages</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
