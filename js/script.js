const urlApi="http://localhost:3000/anuncios";
let anuncios = []; 
 
function actualizarAnuncios(){ 
    const divContainer = document.createElement('div');
    divContainer.className = 'container-fluid';
    const divRow = document.createElement('div');    
    divRow.className = 'row';
    divContainer.appendChild(divRow);
    anuncios.forEach((element)=>{
        const divContent = document.createElement('div');
        divContent.className = 'm-0 row justify-content-center';
        const br = document.createElement("br");
        const iPrecio = document.createElement("i");
        const iOperacion= document.createElement("i");
        const iPuertas = document.createElement("i");
        const iKm = document.createElement("i");
        const iPotencia = document.createElement("i");
        iPrecio.className = 'bi bi-tags-fill';
        iOperacion.className = 'bi bi-option';
        iPuertas.className = 'bi bi-door-open-fill';
        iKm.className = 'bi bi-speedometer2';
        iPotencia.className = 'bi bi-plug-fill';
        const liPrecio = document.createElement("li");
        const liOperacion = document.createElement("li");
        const liPuertas = document.createElement("li");
        const liKm = document.createElement("li");
        const liPotencia = document.createElement("li");
        liPrecio.className = 'list-group-item';
        liOperacion.className = 'list-group-item';
        liPuertas.className = 'list-group-item';
        liKm.className = 'list-group-item';
        liPotencia.className = 'list-group-item';
        liPrecio.appendChild(iPrecio);
        liOperacion.appendChild(iOperacion);
        liPuertas.appendChild(iPuertas);
        liKm.appendChild(iKm);
        liPotencia.appendChild(iPotencia);
        liPrecio.appendChild(document. createTextNode(` Precio: ${element.precio} `));
        liOperacion.appendChild(document. createTextNode(` Tipo: ${element.transaccion} `));
        liPuertas.appendChild(document. createTextNode(` Puertas: ${element.puertas}`));
        liKm.appendChild(document. createTextNode(` Km: ${element.kms}`));
        liPotencia.appendChild(document. createTextNode(` Potencia: ${element.potencia}`));
        const ul = document.createElement("ul");
        ul.className = 'list-group list-group-flush';
        ul.appendChild(liPrecio);
        ul.appendChild(liOperacion);
        ul.appendChild(liPuertas);
        ul.appendChild(liKm);
        ul.appendChild(liPotencia);
        const divdescripcion = document.createElement("p");        
        divdescripcion.className = 'card-text';
        divdescripcion.innerHTML = `${element.descripcion}`;
        const divTitulo = document.createElement("h4");        
        divTitulo.className = 'card-title';
        divTitulo.innerHTML = `${element.titulo}`;
        const divBody = document.createElement("div");
        divBody.className = 'card-body';                
        divBody.appendChild(divTitulo);
        divBody.appendChild(divdescripcion);      
        divBody.appendChild(ul);
        const img = document.createElement("img");
        img.className = 'card-img-top';
        img.src = "./assets/car.png";
        img.alt = 'Card image cap';
        img.setAttribute('id', 'imgPlaceholder');
        const divImg = document.createElement("div");
        divImg.setAttribute('id', 'imgDiv');
        divImg.appendChild(img);
        const divCard = document.createElement("div");
        divCard.className = 'card col-auto';
        divCard.id = 'cardStyle';
        divCard.appendChild(divImg);
        divCard.appendChild(divBody);
        const divCol = document.createElement("div");
        divCol.className = 'col col-lg-6 col-lg-6';
        divCol.appendChild(divCard);
        divCol.appendChild(br);
        divRow.appendChild(divCol);                     
    });    
    document.getElementById('divAnuncios').appendChild(divContainer);
};

document.addEventListener('DOMContentLoaded', function() {    
  getAll();
}, false);

function getAll(){
    const xhr = new XMLHttpRequest();             
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          const data = JSON.parse(xhr.responseText);
          anuncios = data;
          console.log(data);
          actualizarAnuncios();         
        } else {
          console.error(`Error: ${xhr.status} : ${xhr.statusText} `);          
          alert(`Error: ${xhr.status} : ${xhr.statusText} `);
        }
        clearDivSpinner();
      } else {
          divSpinner.appendChild(getSpinner());
      }    
    };  
    xhr.open("GET", urlApi);
    xhr.send();
  };

  const divSpinner = document.querySelector(".spinner");

  const getSpinner = () => {
      const spinner = document.createElement("img");
      spinner.setAttribute("src", "./assets/spinner.gif");
      spinner.setAttribute("alt", "loader");
      divSpinner.style.display = "flex";
      return spinner;
  };
  const clearDivSpinner = () => {
      while (divSpinner.hasChildNodes()) {
          divSpinner.removeChild(divSpinner.firstChild);
      }
      divSpinner.style.display = "none";
  };