import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    pathMatch: 'full',
  }, // full o endpoint têm que ser exatamente o mesmo, normalmente conf para a rota padrão do sistema

  {
    /*
    CRIANDO ROTAS FILHAS

    portifolio
    portifolio/1
    portifolio/1/jvdrvhfjhshvdhd
    */
    path: 'portifolio',
    component: CardComponent,
    children: [
      {path: ':id', component: CardComponent},
      {path: ':id/:token', component: CardComponent},
  ]},

  {
    path: 'portifolio/:id',
    component: CardComponent,
    pathMatch: 'prefix', //default
  },
  {
    path: '**',
    redirectTo: '',
    /*
    Rota coringa, caso tente acessar algum endpoint que
    não existe ele manda para a default '' (redirect).
    (paginas de não encontrado)
    */
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
