export const crearTabla = (data)=>{

    const tabla = document.createElement("table");    
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const cabecera = document.createElement("tr");  
    for (const key in data[0]) {
        if(key !== "id"){
            const th = document.createElement("th");
            const contenido = document.createTextNode(key);
            th.className = key;   
            th.appendChild(contenido);
            cabecera.appendChild(th);    
        }                
    }
    thead.appendChild(cabecera);
    tabla.appendChild(thead);    
    Object.values(data).forEach((element) => {
        const tr = document.createElement("tr");
        for (const key in element) {
            if(key === "id"){
                tr.setAttribute("id", element[key]);
            }
            else{
                const td = document.createElement("td");
                td.className = key;
                td.textContent = element[key];
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);    
    });
    tabla.appendChild(tbody)
    const th = document.createElement("th");
    th.setAttribute("colspan", "7");
    const tfoot = document.createElement("tfoot");
    tfoot.className = "footer-restore-columns";
    tfoot.appendChild(th);
    tabla.appendChild(tfoot);
    tabla.className = "table table-success table-striped";
    return tabla;
}