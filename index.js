const tiposeguroEl = document.getElementById("tiposeguro");
const messageEl = document.getElementById("message");
const EnviarEl = document.getElementById ("Enviar")

tiposeguroEl.addEventListener("change", handleChange);
function handleChange(){
    let price ="";
    switch (tiposeguroEl.value) {
        case 'basico':
            price="$ 500";
            break;
    
        case 'intermedio':
            price="$ 1000";
            break;
    
        case 'premium':
            price="$ 1500";
            break;
    }
    messageEl.innerText = "El precio estimado es: " + price;


}
EnviarEl.addEventListener ("click", click);
 function click(){
    alert ("Formulario enviado")
 }