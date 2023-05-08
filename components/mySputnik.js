import "../components/my-nav/my-nav.js";

let data= 'http://localhost:4500/reclutas';
const ws = new Worker("storage/wsSputnik.js", {type:"module"}); 
ws.postMessage({module:"reclutas", data: data});
ws.addEventListener("message", (e)=>{
    console.log(e)
    /* let doc = new DOMParser().parseFromString(e.data, "text/html");
    document.querySelector("main").innerHTML="";
    document.querySelector("main").append(...doc.body.children); */
    ws.terminate()
});
