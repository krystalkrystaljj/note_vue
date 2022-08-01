export default {
  template: ` 
 <div>
    <h2>{{message}}</h2>
    <button @click="btnclick">按钮</button>
    <h2>{{name}}</h2>
 </div>`,
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