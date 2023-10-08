import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {
  @Input() set appNgElse(condicao: boolean){//O nome têm que ser o nome do selector da diretiva, para utilizar a forma reduzida mostrada na aula 34
    //e para ser possível utilizar a tag com o *nomeDiretiva como as demais existente por default.
    if (!condicao){ // !true -> false
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }else {
      this._viewContainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
