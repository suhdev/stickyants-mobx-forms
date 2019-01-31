import { FieldModel } from "./FieldModel";
import { IValue } from "./util/IValue";
import { observable } from "mobx";

export class AutoCompleteModel extends FieldModel<IValue>{
    @observable.ref value:IValue = null; 
    @observable searchValue:string = ''; 
    
}