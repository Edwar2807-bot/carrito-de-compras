const carrito = document.querySelector("#carrito");
const listTemplate = document.querySelector("#listTemplate");                               
const btnsBotones = document.querySelectorAll('.card .btn');

const fragment = document.createDocumentFragment();

const carritoObjeto = [];
//-------------------------------------------------------------------------------
const AgregarAlCarrito = (e) => {

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };
    
    const indice = carritoObjeto.findIndex((index) => index.id === producto.id);

    if (indice === -1) {
        carritoObjeto.push(producto);
    }
    else{
        carritoObjeto[indice].cantidad++;
    }
    console.log(carritoObjeto);
    pintarCarrito(carritoObjeto);
};
//--------------------------------------------------------------------------------

const pintarCarrito = (array) => {
    carrito.textContent = "";
    array.forEach((item) =>{
        //const clone = listTemplate.Content.cloneNode(true);
        const clone = listTemplate.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};

btnsBotones.forEach((boton) => boton.addEventListener("click",AgregarAlCarrito));