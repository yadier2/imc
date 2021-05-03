import Comentario from './comentario'
let miComentario = new Comentario
import './style.css'
/* 
miComentario.fetchObteneromentarios()  */
miComentario.axiosAwatitComentarios()  

async function llamarComentarios(){
    try {
        console.log("se llamo la promesa");
        let respuesta = await miComentario.promesaObtenerComentarios()
       console.log(respuesta);
        console.log("Temino la promesa"); 
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("Temino el programa")
    }
}
/* llamarComentarios() */
