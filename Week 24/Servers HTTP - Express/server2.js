var express = require("express");
const app = express();
const PORT = 3030; 

app.get("/order", (req, res) => {   
    res.writeHead(200, {'Customer': 'baba', 'zip': '05478'});
    let resp = res.getHeaders();
    res.end(JSON.stringify(resp));
    console.log(`Status code: ${res.statusCode}, ${JSON.stringify(resp)}`);
});

app.use(function(req, res) {
    res.statusCode = 404;
    let resp = res.getHeaders();
    res.end(JSON.stringify(resp)); 
    console.log(res.statusCode);
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});