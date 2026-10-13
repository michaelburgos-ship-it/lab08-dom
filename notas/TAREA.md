# Tarea: Mi componente interactivo

## Componente elegido
Para mi tarea decidí hacer un **Conversor de monedas**. Elegí este proyecto porque me pareció muy útil para calcular rápido cuánto vale nuestro dinero en otros países. Lo que hace el programa es dejarte escribir un monto en Soles (S/) y cambiarlo al instante a Dólares, Euros o Pesos Argentinos. Además, tiene una alerta por si pones números negativos o dejas el cuadro en blanco, y te va armando una lista como un historial donde puedes borrar las operaciones viejas con un botón.

---

## Version 1: solo DOM
En esta primera entrega armé la estructura básica con las cajitas en el HTML y usé un código de JavaScript bien simple solo para obligar a la página a mostrar dos conversiones de ejemplo ya escritas en la lista, sin que el usuario pudiera mover nada todavía.

### Código principal (v1)
```js
// Agarro la lista vacía que está en la pantalla
const listaPantalla = document.querySelector("#listaHistorial");

// Invento un primer resultado para probar
const elemento1 = document.createElement("li");
elemento1.textContent = "S/ 100.00 equivalen a \$ 27.00 USD";
listaPantalla.appendChild(elemento1);

// Invento otro resultado de prueba
const elemento2 = document.createElement("li");
elemento2.textContent = "S/ 50.00 equivalen a € 12.50 EUR";
listaPantalla.appendChild(elemento2);
```

* **Qué agregué:** Usé comandos para buscar la lista en la pantalla, crear filas nuevas con texto e incrustarlas ahí mismo.
* **Por qué:** Lo hice para probar que el diseño visual, el fondo y las letras se vieran ordenados antes de ponerme a programar los botones.
* **Qué cambió en el comportamiento:** Ahora, apenas abres la página web, ya te aparecen dos ejemplos fijos en el historial.

---

## Version 2: con eventos
Aquí ya hice que la página funcione de verdad con un formulario. El usuario ya puede escribir sus propios Soles, elegir a qué moneda cambiar y el programa hace la matemática. También le metí un texto en letras rojas por si el usuario se equivoca al escribir.

### Código principal (v2)
```js
const miFormulario = document.querySelector("#formConversor");
const cajaMonto = document.querySelector("#montoInput");
const selectorMoneda = document.querySelector("#monedaSelect");
const listaPantalla = document.querySelector("#listaHistorial");
const textoError = document.querySelector("#mensajeError");

miFormulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Evita que la página se reinicie de golpe
    textoError.textContent = "";

    // Si no escribieron nada, salta el error
    if (cajaMonto.value.trim() === "") {
        textoError.textContent = "Error: ¡Debes ingresar un monto para convertir!";
        return;
    }

    const dineroSoles = parseFloat(cajaMonto.value);
    if (dineroSoles <= 0) {
        textoError.textContent = "Error: El monto debe ser un número mayor a cero";
        return;
    }

    // Un cálculo simple para probar los dólares
    let calculo = dineroSoles * 0.27; 
    
    const filaNueva = document.createElement("li");
    filaNueva.textContent = "S/ " + dineroSoles + " equivale a \$ " + calculo + " USD";
    listaPantalla.appendChild(filaNueva);
    miFormulario.reset(); // Limpia la cajita
});
```

* **Qué agregué:** Le puse un escuchador al botón de enviar, el comando para que la página no se refresque sola y los "if" para revisar que el monto sea un número válido.
* **Por qué:** Quería que el usuario pudiera interactuar escribiendo sus propios números en el teclado y que la página no se borrara al darle al botón.
* **Qué cambió en el comportamiento:** La página ya calcula conversiones reales creadas por el usuario y te avisa en rojo si pones un dato mal.

---

## Version 3: con clases y objetos
Para la versión final, ordené todo el código usando una clase que sirve como un molde para las conversiones. Guardé las operaciones en una lista interna de JavaScript y le agregué a cada fila un botón de "Eliminar" para poder limpiar el historial.

### Código principal (v3)
```js
class Conversion {
    constructor(soles, monedaDestino) {
        this.soles = parseFloat(soles);
        this.monedaDestino = monedaDestino;
        this.resultado = this.calcular();
    }
    calcular() {
        if (this.monedaDestino === "USD") return this.soles * 0.27;
        if (this.monedaDestino === "EUR") return this.soles * 0.25;
        if (this.monedaDestino === "ARS") return this.soles * 250.0;
        return 0;
    }
    formatoTexto() {
        return `S/ ${this.soles.toFixed(2)} equivalen a ${this.monedaDestino} ${this.resultado.toFixed(2)}`;
    }
}

// Así programé el botón de borrar para cada fila nueva:
const btnBorrar = document.createElement("button");
btnBorrar.textContent = "Eliminar";
btnBorrar.addEventListener("click", () => {
    const posicion = listaHistorialObjetos.indexOf(nuevaConversion);
    if (posicion > -1) listaHistorialObjetos.splice(posicion, 1);
    filaNueva.remove(); // Borra la fila de la pantalla
});
```

* **Qué agregué:** Armé la clase `Conversion` con sus operaciones adentro, una lista para guardar los datos en memoria y botones interactivos que usan el comando para desaparecer de la pantalla.
* **Por qué:** Lo hice para que el código quede mucho más ordenado, soporte varias monedas y para que el usuario pueda borrar una fila si se equivoca.
* **Qué cambió en el comportamiento:** Ahora puedes cambiar a dólares, euros o pesos al mismo tiempo con los decimales bien redondeados, y cada conversión viene con su propio botón para eliminarla de la pantalla.

---

## Donde uso DOM, eventos y objetos

### Componentes de Código Utilizados

* **Pieza:** DOM
    * **Línea de código final:** `document.querySelector("#formConversor")` / `listaHistorialDOM.appendChild(li)` / `li.remove()`
    * **Para qué sirve en este proyecto:** Me ayuda a jalar los números que escribe el usuario en las cajitas, dibujar las filas nuevas con los resultados en la lista y desaparecer las viñetas cuando tocas borrar.

* **Pieza:** Eventos
    * **Línea de código final:** `formConversor.addEventListener("submit", ...)` / `btnBorrar.addEventListener("click", ...)`
    * **Para qué sirve en este proyecto:** Hace que la página reaccione justo cuando presionas el botón verde de calcular o cuando le das clic al botón rojo de eliminar.

* **Pieza:** Objetos
    * **Línea de código final:** `const nuevaConversion = new Conversion(montoNum, monedaValor)` / `listaHistorialObjetos.push(...)`
    * **Para qué sirve en este proyecto:** Guarda los datos de cada moneda bien empaquetados en una ficha y se encarga de hacer la multiplicación matemática por detrás.

---

## Pruebas realizadas

### Tabla de Control de Calidad

* **Acción:** No escribir nada en la cajita del dinero y darle al botón verde de Calcular.
    * **Resultado esperado:** Que no te deje enviar nada y aparezca el aviso: "Error: ¡Debes ingresar un monto para convertir!" en letras rojas.
    * **Resultado obtenido:** No mandó nada y salió el mensaje idéntico en color rojo.
    * **Cumple (Sí/No):** Sí

* **Acción:** Escribir un número negativo (como por ejemplo poner -20).
    * **Resultado esperado:** Que salga el texto de error en la pantalla diciendo: "Error: El monto debe ser un número mayor a cero".
    * **Resultado obtenido:** La página bloqueó la operación y mostró exactamente esa advertencia.
    * **Cumple (Sí/No):** Sí

* **Acción:** Convertir S/ 100 a Dólares (USD).
    * **Resultado esperado:** Que se cree una nueva fila en el historial que diga "S/ 100.00 equivalen a \$ 27.00 USD" al lado de su botón para borrar.
    * **Resultado obtenido:** Apareció la fila tal cual con el cálculo exacto de los dólares.
    * **Cumple (Sí/No):** Sí

* **Acción:** Convertir S/ 200 a Euros (EUR).
    * **Resultado esperado:** Que se agregue una segunda fila abajo diciendo "S/ 200.00 equivalen a € 50.00 EUR" sin borrar la anterior.
    * **Resultado obtenido:** Se sumó el nuevo registro de Euros a la lista sin problemas.
    * **Cumple (Sí/No):** Sí

* **Acción:** Darle clic al botón "Eliminar" en la fila donde convertimos los S/ 100.
    * **Resultado esperado:** Que la fila de los S/ 100 desaparezca por completo de la pantalla y la de Euros se quede solita en su lugar.
    * **Resultado obtenido:** La viñeta se borró al instante y la otra fila se quedó ahí sin moverse.
    * **Cumple (Sí/No):** Sí

---

## Por que disene asi mi clase
Diseñé la clase `Conversion` con las variables `soles` y `monedaDestino` porque son las dos únicas cosas que necesitamos pedirle al usuario para empezar. Metí la función `calcular()` dentro del constructor para que el objeto haga la matemática rápido apenas se crea, sin hacernos perder tiempo afuera. El método `formatoTexto()` lo inventé para poner los símbolos como \$ o € ordenados y dejar los decimales bonitos con dos números usando el comando `.toFixed(2)`. De esta forma, si el profesor me pide cambiar el precio del dólar la otra semana, solo cambio ese pedacito de mi molde y todo el programa se arregla solo de golpe sin romper el diseño de la pantalla.
