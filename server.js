const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8888
const fs = require('fs')
const path = require('path')

app.use(cors())
app.use(express.static('public/models'))
app.get("*", (req, res)=>{
    if(req.path === "/"){
        fs.readdir('public/models', (e, files)=>{
            const glbFiles = files.reduce((a, file)=>{
                if(path.extname(file) === ".glb") a.push(file)
                return a
            }, [])
            res.send(JSON.stringify(glbFiles))
        })
    }
})
app.listen(PORT, ()=>{
    console.log('server is running')
})