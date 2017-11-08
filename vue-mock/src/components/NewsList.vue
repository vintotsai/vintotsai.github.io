<template>
  <div class="hello">
    <ul>
      <li v-for="item in news" :key="item.index">
        <div>{{item.title}}</div>
        <div>{{item.author}}</div>
        <div>{{item.date}}</div>
        <img :src="item.image">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NewsList',
  data() {
    return {
      news: []
    }
  },
  created() {
    this.fetchData()
    let arr = _.chunk(['a', 'b', 'c', 'd'],2)
    log('arr->',arr)

    let arr2 = _.concat([],arr,[5,6],7,[[8]])
    log(arr2)
    // var saves = ['profile', 'settings']

    // var done = _.after(saves.length, function() {
    //   log('done saving!')
    // })

    // _.forEach(saves, function(type) {
    //   log({ type: type, complete: done })
    // })
    // log('_lodash->>', _)

    // _.delay((msg)=>{
    //   log(msg)
    // },1000,'hi...')


  },
  methods: {
    fetchData() {
      axios.get('/news').then(res => {
        log(res)
        this.news = res.data.articles
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
