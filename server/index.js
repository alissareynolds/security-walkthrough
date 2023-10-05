let express = require('express')
let cors = require('cors')

let app = express()

app.use(cors())
app.use(express.json())

let { logIn, signUp } = require('./controller.js')

app.post('/login', logIn)
app.post('/signup', signUp)

app.listen(4000, () => {
    console.log('Server is running on port 4000.')
})
