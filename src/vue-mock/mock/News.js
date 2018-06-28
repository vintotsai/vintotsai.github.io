const Mock = require('mockjs')
const log = console.log.bind(console)

// log(Mock)

const Random = Mock.Random
// log(Random)

const News = function() {
  let articles = []
  for (let i = 0; i < 10; i++) {
    let article = {
      title: Random.csentence(5, 20),
      image: Random.image('200x100', '#894FC4', '#FFF', 'png', '!'),
      author: Random.cname(),
      date: Random.datetime()
    }
    articles.push(article)
  }
  return {
    articles: articles
  }
}

log(News())


Mock.mock('/news', 'get', News)