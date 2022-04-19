const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(require('./routes/users.route'))
app.use(require('./routes/news.route'))
app.use(require('./routes/comments.route'))
app.use(require('./routes/category.route'))

mongoose
.connect(process.env.URL)
.then(() => console.log('Connected'))
.catch(() => 'Error')

app.listen(process.env.PORT, () => {
  console.log('Connecting...');
})
