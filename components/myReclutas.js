export default{
    reculta(data){
        const ws = new Worker("storage/wsRecluta.js", {type:"module"}); 
        ws.postMessage({module:"reclutas", data: data});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("main").innerHTML="";
            document.querySelector("main").append(...doc.body.children);
            ws.terminate()
        });
    }
}