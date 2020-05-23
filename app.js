// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 0-11 = 1月-12月
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  const startTime = Date.now()
  const type = req.method
  const url = req.originalUrl

  res.on('finish', () => {
    const totalTime = Date.now() - startTime
    console.log(`${year}-${month}-${day} ${hour}:${min}:${sec} | ${type} from ${url} | total time: ${totalTime}ms`)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
