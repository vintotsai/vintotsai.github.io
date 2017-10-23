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
import axios from "axios";
export default {
  name: "NewsList",
  data() {
    return {
      news: []
    };
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get("/news").then(res => {
        console.log(res);
        this.news = res.data.articles;
      });
    }
  }
};
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
