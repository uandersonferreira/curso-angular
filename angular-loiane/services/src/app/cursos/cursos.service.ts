import {Injectable} from "@angular/core";

@Injectable()//classe injentável
export class CursosService{

  getCursos(){
    return ['Angular','Java', 'Spring Boot'];
  }

}
