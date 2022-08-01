const table = new Vue({
  el:'#table',
  data:{
    books: [
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:3,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:4,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      }
    ],
  },
  methods:{
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2);
    // }

    getAdd(index) {
      this.books[index].count++;
    },
    getSub(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index,1);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      // for (let i =0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }

      // for(let i in this.books) {
      //   const book = this.books[i];
      //   totalPrice += book.price * book.count;
      // }

      for (let item of this.books) {
        totalPrice += item.price*item.count
      }
      return totalPrice;
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})