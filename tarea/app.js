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
        let simbolo = this.monedaDestino === "USD" ? "\(" : this.monedaDestino === "EUR" ? "€" : "\)";
        return `S/ ${this.soles.toFixed(2)} equivalen a ${simbolo} ${this.resultado.toFixed(2)} ${this.monedaDestino}`;
    }
}

const listaHistorialObjetos = [];
const formConversor = document.querySelector("#formConversor");
const montoInput = document.querySelector("#montoInput");
const monedaSelect = document.querySelector("#monedaSelect");
const listaHistorialDOM = document.querySelector("#listaHistorial");
const mensajeErrorDOM = document.querySelector("#mensajeError");

formConversor.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensajeErrorDOM.textContent = "";

    const montoValor = montoInput.value.trim();
    const monedaValor = monedaSelect.value;

    if (montoValor === "") {
        mensajeErrorDOM.textContent = "Error: ¡Debes ingresar un monto para convertir!";
        return;
    }

    const montoNum = parseFloat(montoValor);
    if (montoNum <= 0 || isNaN(montoNum)) {
        mensajeErrorDOM.textContent = "Error: El monto debe ser un número mayor a cero";
        return;
    }

    const nuevaConversion = new Conversion(montoNum, monedaValor);
    listaHistorialObjetos.push(nuevaConversion);

    const li = document.createElement("li");
    li.textContent = nuevaConversion.formatoTexto();

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";

    btnBorrar.addEventListener("click", () => {
        const indice = listaHistorialObjetos.indexOf(nuevaConversion);
        if (indice > -1) {
            listaHistorialObjetos.splice(indice, 1);
        }
        li.remove();
    });

    li.appendChild(btnBorrar);
    listaHistorialDOM.appendChild(li);

    formConversor.reset();
});