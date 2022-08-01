<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnclick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  name: "App",
  components:{
    Cpn
  },
  data() {
    return {
      message:'hello vue',
      name: 'coderwhy'
    }
  },
  methods: {
    btnclick() {
      alert('啦啦啦')
    }
  }
}
</script>

<style scoped>
.title{
  color: green;
}
</style>