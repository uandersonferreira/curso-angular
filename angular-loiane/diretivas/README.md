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
