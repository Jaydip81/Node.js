const express = require('express');
const software = express();

software.get('/node', (req, res)=>{
    res.send("hello")
});

software.get('/', (req, res)=>{
    res.send("nope")
});

software.get('/ express', (req, res)=>{
    res.send("owu")
});

software.listen(8040, () => {
    console.log("http://localhost:8040");
})