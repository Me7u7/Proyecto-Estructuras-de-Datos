/*

Crea un arreglo vacío llamado listaDeCompras.
Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
Implementa una función mostrarLista() que imprima todos los productos de la lista.
Asegúrate de que no haya productos duplicados en la lista.
Puedes usar arrow functions para la funcionalidad solicitada así como otras características del estandar ECMAScript.
--
*/

const listaDeCompras = [];

const agregarProducto = (producto) => {
    if (producto && !listaDeCompras.includes(producto)) { // Verifica si el producto no está vacío y no existe en la lista
        listaDeCompras.push(producto); // Agrega el producto al final de la lista
        document.getElementById("producto").value = ""; // Limpia el campo de entrada
        mostrarLista(); // Muestra la lista actualizada
    } else if (producto) {
        alert("El producto ya está en la lista.");
    }
};

/*
const eliminarProducto = ()=> {
    listaDeCompras.pop(); // Elimina producto
    console.log(listaDeCompras);
};
*/

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto); // indexOf encuentra el índice de un elemento en el arreglo
    if (index !== -1) {
        listaDeCompras.splice(index, 1); // Elimina el producto en el índice encontrado
        document.getElementById("productoEliminar").value = ""; // Limpia el campo de entrada
        mostrarLista(); // Muestra la lista actualizada
    } else {
        alert("Producto no encontrado.");
    }
};

const mostrarLista = () => {
    const listaElement = document.getElementById("listaDeCompras"); // Aquí estaba el problema, el ID debe coincidir
    listaElement.innerHTML = ""; // Limpia la lista antes de mostrarla

    listaDeCompras.forEach(producto => {
        const li = document.createElement("li"); // Crea un elemento de lista <li>
        li.textContent = producto; // Asigna el nombre del producto al <li>
        listaElement.appendChild(li); // Agrega el <li> al <ul> en la página
    });
};

/*

agregarProducto("Durazno");
agregarProducto("Pera");
agregarProducto("Piña");
agregarProducto("Pepino");
eliminarProducto("Durazno");
console.log("LISTA: " + listaDeCompras);

*/
