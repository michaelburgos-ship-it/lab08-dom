# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM
 | Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola |El título cambió de forma temporal al texto que escribiste manualmente en la consola del navegador |No|
| textContent desde app.js |El título se modificó automáticamente al texto definitivo "Hola TECSUP" al cargar el sitio. |Sí |
| style.color |El texto del encabezado principal cambió visualmente a color azul |Sí|
| classList.add |**El párrafo seleccionado adquirió un fondo de color amarillo al aplicársele la clase CSS "destacado" |Sí|
| createElement + appendChild |Se generó y agregó de forma dinámica el elemento "JavaScript" al final de la lista de viñetas|Sí|

## Ejercicio 3: Evento click
 | Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Hacer un solo clic izquierdo sobre el botón|Suma 1. |
| dblclick |Hacer un doble clic rápido sobre el botón | Suma 1 (por cada doble clic completo realizado)|
| mouseover | Pasar el puntero del mouse por encima del botón (sin necesidad de hacer clic) | Suma 1 cada vez que el cursor entra en el área del botón|

- evento.type: Te dice exactamente qué acción hiciste con el mouse en ese momento, por ejemplo, si diste un clic, un doble clic o si solo pasaste la flechita por encima
- evento.target: Te muestra a qué botón o parte de la pantalla le diste esa orden, sirviendo para saber exactamente qué elemento interactuó contigo
## Ejercicio 4: Eventos input y submit
 | Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre |El texto de abajo se actualiza en tiempo real, letra por letra, mostrando el saludo con el nombre que vas escribiendo |No|
| Enviar sin preventDefault |El mensaje "Enviado" aparece solo un milisegundo y se borra todo rápido, dejando el cuadro de texto vacío otra vez|Sí|
| Enviar con preventDefault, correo sin @ | La página no se mueve para nada y sale un mensaje de advertencia en letras rojas que dice "Correo no valido: falta @"|No|
| Enviar con preventDefault, correo con @ |Todo se queda en su lugar sin borrarse y aparece el texto confirmando "Enviado: " junto con el correo que pusiste|No|

## Ejercicio 5: Clases y objetos
 | Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop |  Laptop|2500 | Laptop - S/ 2500.00| 1875|
| mouse |Mouse | 45|Mouse - S/ 45.00| 33.75|
| teclado | Teclado|120 | Teclado - S/ 120.00|90 |
| monitor |Monitor |680 |Monitor - S/ 680.00 | 510|

La gran ventaja de usar clases es que funciona como un molde automático que  le ahorra un montón de tiempo. En vez de estar copiando y pegando  código en el HTML por cada producto nuevo que quieras meter, solo creas una línea en JavaScript y aparece por si solo en la pantalla.
## Ejercicio 6: DOM, eventos y objetos juntos
| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 | 12.50| Sí|
| + Lapicero 3.20 |15.70 |Sí |
| + Mochila 89.90 | 105.60| Sí|
| Sin Number() | No muestra nada. Se rompe el código|  No   |
 
| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
| DOM | document.querySelector("#formProducto") y listaCarrito.appendChild(li)|Sirve para conectar el código con la pantalla, agarrar lo que escribe el usuario y dibujar la lista de compra |
| Evento |formProducto.addEventListener("submit", (evento) => { ... }) |Sirve para avisarle a la página cuándo el usuario presiona el botón de enviar para activar las funciones. |
| Objeto |const carrito = new Carrito(); y const producto = new Producto(...) | Sirve para guardar los datos de los productos ordenados y meterlos todos juntos dentro de la bolsa de compras|

- [Bitacora de JavaScript interactivo](notas/BITACORA.md)
- [Ver la pagina en vivo](https://github.com/michaelburgos-ship-it/lab08-dom)
