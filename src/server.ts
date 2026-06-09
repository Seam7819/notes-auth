import app from "./app";

async function server(){
    try{
        app.listen(process.env.PORT, ()=>{
            console.log(`server is running on port ${process.env.PORT}`);
        })
    }catch(err){
        console.error(err);
    }
}

server();