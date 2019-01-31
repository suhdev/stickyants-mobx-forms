import { FieldModel } from './FieldModel';
import { observable } from 'mobx';

export class NumberFieldModel extends FieldModel<number>{
  placeholder:string;
  @observable value:number = 0;
}
