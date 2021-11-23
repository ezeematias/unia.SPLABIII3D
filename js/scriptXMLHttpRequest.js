import { actualizarTabla, divSpinner } from "./anuncioScript.js";  
export { getAll, updateAnuncio, anuncios};

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

///GET
function getAll(){
    const xhr = new XMLHttpRequest();  
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          const data = JSON.parse(xhr.responseText);
          anuncios = data;
          actualizarTabla(anuncios);         
        } else {
          console.error(`Error: ${xhr.status} : ${xhr.statusText} `);          
          alert(`Error: ${xhr.status} : ${xhr.statusText} `);
        }
        clearDivSpinner();          
      } else {
          divSpinner.appendChild(getSpinner());
      }    
    };  
    xhr.open("GET", URL);
    xhr.send();
  };

///PUT
function updateAnuncio(anuncio){
    const anuncioToEdit = JSON.stringify(anuncio);
    const xhr = new XMLHttpRequest();  
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState == 4){
        if(xhr.status >= 200 && xhr.status < 300){
            const data = JSON.parse(xhr.responseText);
            anuncios = data;            
        }
        else{
            console.error(`Error: ${xhr.status} : ${xhr.statusText} `);
            alert(`Error: ${xhr.status} : ${xhr.statusText} `);
        }
      } else {
      }    
    });
    xhr.open("PUT", URL + "/" + anuncio.id);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(anuncioToEdit);   
};


