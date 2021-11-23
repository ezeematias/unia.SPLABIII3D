import { actualizarTabla, divSpinner } from "./anuncioScript.js";  
export { createAnuncio, deleteAnuncio};

const URL="http://localhost:3000/anuncios";

let anuncios = [];
  
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

///POST
function createAnuncio(anuncio){  
  const options={
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(anuncio)
  };  
  fetch(URL, options)
  .then(response => response.ok ? response.json() : Promise.reject(new Error(`Error: ${response.status} : ${response.statusText} `)))
  .then((data)=>{
    divSpinner.appendChild(getSpinner());
      anuncios = data;
      actualizarTabla(anuncios);    
  }) 
  .catch(error => {
      console.error(error);
      alert(error);
  })
  .finally(() => {
    clearDivSpinner();
  });     
};

///DELETE
function deleteAnuncio(id){
  
  const options={
    method: "DELETE"        
  };   

  fetch(URL +"/" + id, options)
  .then(response => response.ok ? response.json() : Promise.reject(new Error(`Error: ${response.status} : ${response.statusText} `)))
  .then((data)=>{
    anuncios = data;
    actualizarTabla(anuncios); 
  }) 
  .catch(error => {
    alert(error);
  })
  .finally(() => {    
  });  
};
