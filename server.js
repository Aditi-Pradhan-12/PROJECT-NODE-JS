const http = require("http");

/*since we want our server to listen on some port*/
/*server listening means to acknowledge in the form of a positive or negative response*/

const PORT = 8081;                                  /*the port 8081 should always be available and not engaged with other activites*/
const toDoList = ["hello everyone!!!", "good evening all"]

/*creating a server*/
http.createServer((req, res)=> {
    const {method, url} = req;                      /*default mehod is GET*/
    /*console.log(method, url)*/
    if(url === "/todos"){
        if(method === "GET"){                       /*GET METHOD- used to get data from the DB through server*/
            res.writeHead(200);
            res.write(toDoList.toString());
        }else if(method === "POST"){                /*POST METHOD- IS USED TO SEND SOME INFO FROM THE SERVER TO THE ARRAY*/
            let body = "";
            req.on('error', (err)=>{
                console.error(err)
            }).on('data',(chunk)=>{
                body += chunk
                /*console.log(chunk);*/
            }).on('end',()=>{
                body = JSON.parse(body)
                /*console.log(body);*/
                let newToDo = toDoList;
                newToDo.push(body.item);            
                console.log(newToDo)
            })
        }else if(method === "DELETE"){              /*DELETE METHOD- to delete something*/
            let body = "";
            req.on('error',(err)=>{
                console.error(err)
            }).on('data',(chunk)=>{
                body += chunk
            }).on('end',()=>{
                body = JSON.parse(body);

                /*condition to delete something*/
                let deletethis = body.item;
                
                /*we delete things from the array, so to do this we need the for loop*/
                /*for(let i=0; i<toDoList; i++){
                    if(toDoList[i] === deletethis){
                        toDoList.splice(i,1);               /*splice operator to delete the required instance*/
                        /*break;                              /*to come out of the for loop
                    }
                }*/

                /*delete method 2*/
                toDoList.find((each, i)=>{
                    if(each === deletethis){
                        toDoList.splice(i,1)
                    }
                })
            })
        }
        else{
            res.writeHead(501);                     /*NEGATIVE RESPONSE*/
        }
    }else if(url === "/"){

    }
    res.end();                                      /*release the resource we have used*/

})
.listen(PORT, ()=> {
    console.log(`Node JS server is up and running successfully on port ${PORT}`)
})

