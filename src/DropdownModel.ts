import { FieldModel } from './FieldModel';
import { IValue } from './util/IValue';
import { observable, action } from 'mobx';

export class DropdownModel extends FieldModel<IValue>{
  @observable.ref value:IValue = null;
  @observable.ref highlightedValue:IValue = null; 
  @observable.ref options:IValue[] = [];
  @observable showMenu:boolean = false;
  defaultLabel:React.ReactNode = null;

  optionRenderer?:(option:IValue, value:IValue) => React.ReactNode;
  menuRenderer?:(options:IValue[], value:IValue) => React.ReactNode;
  dopdownLabelRenderer?:(value:IValue) => React.ReactNode;

  @action.bound
  toggle(){
    this.showMenu = !this.showMenu; 
  }

  @action.bound
  hide(){
    this.showMenu = false; 
  }

  @action.bound
  show(){
    this.showMenu = true; 
    this.highlightedValue = this.value; 
  }

  @action.bound
  selectPrevious():void{
    let idx = 0; 
    if (this.value !== null){
      idx = this.options.indexOf(this.highlightedValue); 
    }
    if (idx !== -1){
      this.highlightedValue = idx > 0?
        this.options[--idx]:
        this.options[this.options.length-1];
    }
  
  }

  @action.bound
  selectNext():void{
    let idx = 0; 
    if (this.highlightedValue !== null){
      idx = this.options.indexOf(this.highlightedValue); 
    }
    if (idx !== -1){
      this.highlightedValue = idx < this.options.length?
        this.options[++idx]:
        this.options[0];
    }
  }
}
