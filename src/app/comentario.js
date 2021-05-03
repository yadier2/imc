import axios from 'axios'
class Comentario{
    //axios es una libreria hay que instalar
     axiosObtenrComentarios(){
        let peticion = axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        peticion
        .then(peticion=> {
            console.log(peticion.data);
        })
        .catch()
        .finally()
    }
 async axiosAwatitComentarios(){
    let peticion = await axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
   let data = peticion.data.categories
  
   console.log(data.forEach(element =>{
       console.log(element.id);
   }));

}
    fetchObteneromentarios(){
        let promesa = fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        promesa
        .then(r => {
            return r.json()
            
        }).then(r => {
            console.log(r);
        })
        .catch()
        .finally( () => {
            console.log("Finalizo la promesa");
        })
    }
   
    promesaObtenerComentarios(){
        //new Promise recibe 2 funciones
        let miPromesa = new Promise((resolve, reject ) => {
           /*  reject(JSON.stringify("la peticion fallo")) */
            resolve(JSON.stringify({name:"la peticion se ejecuto satisfatoriamente"}))
        })
    
        // por donde puede pasar la promesa 3 caminos
    /* miPromesa
       .then(r => {
           console.log(JSON.parse(r));
               return "mensaje para la siguente promesa"
        })  
     .then(r => {
            console.log(r);
        })
    .catch(r => {
          console.log(JSON.parse(r));
      })
      .finally(r => {
          console.log("finally");
      })
 */
      return miPromesa
    }
   
}
export default Comentario;
