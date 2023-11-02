var http = require('http'); 
const PORT = 3030; 
  
var httpServer = http.createServer(
    function(request, response) { 
        response.setHeader('zip', 'number');

        if (request.url !== "/order") {
            response.statusCode = 404;
            let resp = response.getHeaders();
            response.end(JSON.stringify(resp)); 
            console.log(response.statusCode, resp);
            return;
        } else {
            response.writeHead(200, {'Customer': 'baba', 'zip': '05478'});
            let resp = response.getHeaders();
            response.end(JSON.stringify(resp))
            console.log(response.statusCode, resp);
        }
    }
); 
  
// Listening to http Server 
httpServer.listen(PORT, () => { 
    console.log(`Server is running at port ${PORT}`); 
}); 