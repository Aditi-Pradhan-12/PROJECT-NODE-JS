const http = require("http");

/*since we want our server to listen on some port*/
/*server listening means to acknowledge in the form of a positive or negative response*/
const PORT = 8081;                           /*the port 8081 should always be available and not engaged with other activites*/

/*creating a server*/
http.createServer((req, res)=> {
    res.writeHead(200, )                         /*metadata- it is the additional data we'll send it here*/
    /*status code-> 200-success msg, */
})
.listen(PORT, ()=> {
    console.log(`Node JS server is up and running successfully on port ${PORT}`)
})