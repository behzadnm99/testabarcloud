let express = require('express')
let app = express()

app.get('/' , (req , res) => {
    res.send('hello world')
})


app.listen(8080 , () => console.log('app listen on port 8000'))
