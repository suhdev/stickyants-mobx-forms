import { FieldModel } from './FieldModel';
import { observable, action } from 'mobx';

export class CheckboxModel extends FieldModel<boolean>{
  @observable value:boolean = false;

  @action.bound
  onToggle() {
    this.value = !this.value;
  }

  labelRenderer = () => null;
}
