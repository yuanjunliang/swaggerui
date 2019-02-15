const express = require('express')
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
const app = express()

const PORT = 3010

app.use(express.static(pathToSwaggerUi))
app.use(express.static("apijson"))

app.listen(PORT,()=>{
    console.log("node server listen ",PORT)
})