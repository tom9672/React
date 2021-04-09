const express = require('express')
const app = express()

app.use((request,response,next)=>{
    console.log('someone visited');
    next()
})

app.get('/students', (request,response)=>{
    const students = [
        {id:001, name:'Tom', age:25},
        {id:001, name:'Jerry', age:25},
        {id:001, name:'Bo', age:25}
    ]
    response.send(students)
})

app.listen(5000,(err)=>{
    if(!err) console.log('server1 run successfully')
})