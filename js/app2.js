document.addEventListener('DOMContentLoaded', () => {
  cargarPortafolio()
})

const cargarPortafolio = () => {
  fetch('datos2.json')
    .then((resp) => {
      return resp.json()
    })
    .then((datos) => {
      let html = ''
      datos.amigurumis.forEach((amigurumis) => {
        //crear el template
        html += `
          <div class="col-12 col-md-4 mb-2"
          data-aos="zoom-in"
          data-aos-duration="1000">
          <div class="card">
          <div class="card-body">
          <p class="card-text text-center">Articulo ${amigurumis.id}</p>
          </div>
          <img
              id="foto21"
              loading="lazy"
              class="img-fluid"
              src="assets/img/${amigurumis.id}.jpeg"
              alt="${amigurumis.nombre}"
          />
          <div class="card-body">
              <p class="card-text text-center">${amigurumis.nombre}</p>
          </div>
          </div>
          </div>
          
               `
      })
      //agregar al html
      const contenedor = document.getElementById('tarjeta')
      contenedor.innerHTML = html
    })
}
