class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    //method para Contruir os elementos(tags) html
    build(){
        const componentRoot = document.createElement("div");//CRIA UM ELEMENTO DINAMICO
        componentRoot.setAttribute("class", "card");//ATRIBUI UMA CLASS(ATRIBUTO) AO ELEMENTO
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        
        const newsImage = document.createElement("img");
        newsImage.src =  this.getAttribute("photo") || "assets/foto-default.png"
        newsImage.alt = "Foto da notícia"
        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    //Method para Stilizar os elementos do build()
    style(){
        const style =document.createElement("style")
        style.textContent = `
        
        .card{
            width: 720px;
        
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border: 1px solid black;
         }
        
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
             
        }
        
        .card_left > a{
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            color: black;
            padding-bottom: 5px;
            font-weight: bolder;
        }
        .card_left > p{
            color: rgb(71, 71, 71);
        }
        
        .card_right > img{
            width: 150px;
            height: 150px;
        }
        `
        return style;
    }

}//class

customElements.define("card-news", CardNews)