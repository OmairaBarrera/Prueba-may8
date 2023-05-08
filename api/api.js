const url = "http://localhost:3000";

export const addModulo = async (modulo) =>{
    try{
        await fetch(`${url}/moduloskill`,{
            method: "POST",
            body: JSON.stringify(modulo),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch(error){
        console.log(error);
    }
}