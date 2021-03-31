<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <input/>
    </p>
    <p>
      <input/>
    </p>
    <p>
      <button @click="login">登录</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    login:function(){
      console.log('login')
      this.$router.push({ name: "Query"});
    }
  }
  
}
</script>

<style scoped>
h1 {
  font: 1.5em sans-serif;
}
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
