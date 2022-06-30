
class obras {
 constructor(id, nombre, descripcion, imagen) {
   this.id = parseInt(id);
   this.nombre = nombre;
   this.descripcion = descripcion;
   this.imagen = imagen;
 }
}
let misDatos = [];
   $.getJSON("js/data.json", function (data, response) {
      if (response === 'success')
        console.log(data)
        else
        console.log("nadaaaa");
        misDatos = data;
   
        init();
 }
);


const todasLasObras = [];

function init (){
  for (const obra of misDatos) {
    todasLasObras.push(new obras(obra.id, obra.nombre, obra.descripcion, obra.imagen));
  }

/* creo las obras de forma dinamica  */
for (let obras of todasLasObras) {
  generarHTMLdinamico(obras)
}}


function generarHTMLdinamicoPrepend(obras) {
  $(".row").prepend(creadorHtml(obras))
}

function generarHTMLdinamico(obras) {
  $(".row").append(creadorHtml(obras))
}

function creadorHtml(obras) {
  
  return `
           
  <div class="card-margin col-12 col-lg-4 col-xl-3 col-md-4">
   <div class="card mb-3 mt-3 text-center">
    <img src=${obras.imagen} class=" c-e card-img-top img-fluid" alt="imagen no encontrada">
   <div class="card-body">
    <h5 class="card-title">${obras.nombre}</h5>
    <p class="card-text">${obras.descripcion}</p> 
    <button type="button" id="${obras.id}" class="boton">Ver mas fotos</button>
   </div>
  </div>
         
     </div> `;
         
}





