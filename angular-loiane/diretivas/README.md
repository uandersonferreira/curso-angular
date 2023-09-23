### AO GERAR UM NOVO PROEJTO

```angular2html
ng new meu-projeto --style=sass
ng new meu-projeto --style=less
ng new meu-projeto --style=stylus
```

### EM UM PROJETO EXISTENTE

#### Version old
```angular2html
ng set defaults.styleExt scss
ng set defaults.styleExt less
ng set defaults.styleExt styl
```
#### new version ("css", "scss", "sass", "less", "none")
```angular2html
ng config schematics.@schematics/angular:component.style scss
ng config schematics.@schematics/angular:component.style sass
ng config schematics.@schematics/angular:component.style less

```

COAMNDOS ANGULAR CLI DE VERIFICAÇÃO E TESTE
- ng lint: ng lint é usado para análise estática e conformidade com padrões de codificação.
- ng test: ng test é usado para executar testes de unidade em partes específicas do seu código.
- ng e2e: ng e2e é usado para realizar testes end-to-end (teste de integração) para verificar o comportamento geral do seu aplicativo


### Dependencies x DevDependencies (package.json)

- dependencies: dependências necessárias para executar a aplicação
- DevDependencies: dependências necessárias paera 
desenvolver a aplicação (não necessárias após o
build de produção)
