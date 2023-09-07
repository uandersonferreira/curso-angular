import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  /*
  AQUI DEFINIMOS A LÓGICA PARA DEFINIR SE UM USER PODE
  ACESSAR OU NÃO DETERMINADO ENDPOINT(CONTROLE DE ACESSO).
  PARECIDO COM AS GRANTS/ROLES DO SPRING, QUE DEFINIMOS.
  */
  const hasToken = !!localStorage.getItem('token');
  return hasToken;
};

/*
Os dois pontos de exclamação consecutivos (!!) são
usados para converter o resultado da expressão em
um valor booleano, de forma explícita. Isso é feito
por duas negações lógicas sucessivas.

TIPOS DE GUARDS

CanActivate: Este guard permite ou impede a ativação de uma rota específica. É usado para proteger o acesso a rotas com base em condições, como autenticação de usuário.

CanActivateChild: Semelhante ao CanActivate, mas aplicado às rotas filhas de uma rota principal. Protege todas as rotas aninhadas.

CanDeactivate: Usado para determinar se um usuário pode sair de uma rota ou componente sem salvar alterações. É comumente usado para evitar a perda de dados em formulários.

CanLoad: Controla o carregamento preguiçoso de módulos de roteamento. Permite ou impede o carregamento de módulos com base em condições, economizando recursos.

Resolve: Pré-carrega dados antes da ativação de uma rota. É usado para buscar dados necessários antes que a rota seja exibida.

 */
