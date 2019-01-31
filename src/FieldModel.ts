import { observable, action, computed } from 'mobx';
import { IFieldModel } from './IFieldModel';
import { FieldType } from './FieldType';
import { FieldFlags } from './FieldFlags';
import { DOMAttributes } from 'react';

export abstract class FieldModel<T> implements IFieldModel<T>{
  id:string;
  value: T;
  events:DOMAttributes<any>;
  renderer?:() => React.ReactNode;
  controlRenderer?:() => React.ReactNode;
  labelRenderer?:() => React.ReactNode;
  @observable className:string = '';
  @observable type:FieldType = FieldType.Text;
  @observable flags:number = 0;
  @observable hasChanges:boolean = false;
  @observable.ref label:string = null;
  
  @computed get isVisible(){
    return this.is(FieldFlags.Visible); 
  }

  @computed get isRequired(){
    return this.is(FieldFlags.Required); 
  }
  
  @computed get isEnabled() {
    return !this.is(FieldFlags.Disabled);
  }

  @computed get isLongText() {
    return this.is(FieldFlags.LongText);
  }

  @computed get isBorderless(){
    return this.is(FieldFlags.Borderless);
  }

  @action.bound
  onChange(value: T): void {
    this.value = value;
    this.hasChanges = true;
  }

  is(flag:FieldFlags) {
    return (this.flags & flag) === flag;
  }

  @action.bound
  clearChanges() {
    this.hasChanges = false;
  }

  setVisible(visible:boolean){
    if (visible){
      this.flags = this.flags & (~FieldFlags.Visible);
    }else {
      this.flags = this.flags | FieldFlags.Visible; 
    }
  }
}