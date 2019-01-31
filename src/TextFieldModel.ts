import {FieldModel} from './FieldModel'; 
import { observable } from 'mobx';

export class TextFieldModel extends FieldModel<string>{
  placeholder:string;
  @observable value:string = '';
}