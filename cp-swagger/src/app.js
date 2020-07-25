import express from 'express'

import docs from './utils/api-doc.js'
const app = express()


app.use('/api', docs)

app.listen(3000, () => {
  console.log('Server is running at 3000');
})

