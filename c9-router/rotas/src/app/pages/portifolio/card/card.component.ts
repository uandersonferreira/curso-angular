import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //RECUPERANDO PARAMETROS DAS ROTAS
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
  ) {
    //http://localhost:4200/portifolio/1
    this.parametrizador.params.subscribe((res) => console.log(res));

    //http://localhost:4200/portifolio/1?{name=Uanderosn&token=123}
    //PEGANDO OS PARAMETROS DOS ELEMENTOS FILHOS
    this.parametrizador.firstChild?.params.subscribe(
      // ? pois o elemento pode não existir
      (res) => console.log(res)
      );

    //QUERYPARAMS
    //http://localhost:4200/portifolio/1?{name=Uanderson&token=123}
    this.parametrizador.queryParams.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    //REDIRECIONAMENTO POR COMPONENTE
    // setInterval(() => {
    //   this.navegador.navigate(['/home'])},5000);
  }
}
/*
SEMPRE FOMOS RECUPERAR DADOS PRECISAMOS TRABALHAR
DENTRO DE UM 'subscribre()'

activeRouter -> uma instância do serviço ActivatedRoute (Injeção de dependência)

this.activeRoute.params.subscribe(res => console.log(res))

    Aqui, estamos usando o activeRoute para acessar os parâmetros de rota da URL atual. O params é um Observable que fornece os parâmetros de rota como um objeto quando eles mudam.

    O método subscribe é chamado no params, o que significa que estamos observando os parâmetros de rota para quaisquer alterações.

    Quando ocorre uma alteração nos parâmetros de rota, a função de callback dentro de subscribe é executada. Neste caso, a função de callback é uma função de flecha que recebe um argumento chamado res.

    O console.log(res) simplesmente imprime os parâmetros de rota no console. Isso é útil para depurar e entender quaisquer alterações nos parâmetros de rota à medida que o usuário navega pelo aplicativo

*/
