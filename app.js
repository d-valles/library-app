const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('combined'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/', '/index.html'))
})

app.listen(4000, () => {
  console.log(`listening on port ${chalk.green(4000)}`)
})