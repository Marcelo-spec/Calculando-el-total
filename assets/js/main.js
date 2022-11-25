function totalcalcular() {
    const cantidad = document.querySelector('#cantidad').value;
    const color = document.querySelector('#color').value;
    const precio = document.querySelector('#precio').innerHTML;

    document.querySelector('#totalresultado').innerHTML = cantidad * precio;
    document.querySelector('#cantidadresultado').innerHTML = cantidad;
    document.querySelector('#colorresultado').style.backgroundColor = color;

    console.info('Cantidad: ', cantidad);
    console.info('Color: ', color);
    console.info('Precio: ', precio);

}
document.querySelector('#btn').addEventListener('click', totalcalcular);