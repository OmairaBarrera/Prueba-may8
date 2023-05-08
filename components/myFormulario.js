import "../components/my-nav/my-nav.js";

let form = document.querySelector(".from-recluta")
addEventListener("submit", async e =>{
    if(e.target === form){
        e.preventDefault();
        try{
            await fetch(`http://localhost:4500/reclutas`,{
                method: "POST",
                body: JSON.stringify({
                    nombre: e.target.nombre.value,
                    edad: e.target.edad.value,
                    telefono: e.target.telefono.value,
                    email: e.target.email.value,
                    direccion: e.target.direccion.value,
                    f_nacimiento: e.target.nacimiento.value,
                    n_identificacion: e.target.identificacion.value,
                    f_ingreso: e.target.ingreso.value,
                    id_team: 1
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch(error){
            console.log(error);
        }
    }
})