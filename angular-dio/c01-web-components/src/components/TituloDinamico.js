class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        //1° criar o shadowm
        const shadow = this.attachShadow({mode: "open"});

        //Criar a base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute('titulo');

        //estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;
        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);
//os nomes das tags customizadas devem conter o '-' no nome para diferenciar as tags normais.