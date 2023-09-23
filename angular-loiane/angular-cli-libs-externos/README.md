### Instalando o Bootstrap
- tutorial de configuração: https://geekflare.com/add-bootstrap-to-angular/

```angular2html
npm install bootstrap
npm install bootstrap@3.3.7
```

- angular.json declarar os arquivos
```angular2html
"styles": [

  "node_modules/bootstrap/scss/bootstrap.scss",

  "node_modules/bootstrap-icons/font/bootstrap-icons.css",

  "src/styles.scss"

],

"scripts": [

  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

]
```

Ou diretamente no arquivo .css

```angular2html
@import '~bootstrap/dist/css/bootstrap.min.css';
```

