
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(503).send('unhealthy')
})

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
