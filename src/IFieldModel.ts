import { FieldType } from './FieldType';
import { DOMAttributes } from 'react';

export interface IFieldModel<T> {
  value:T;
  type:FieldType;
  onChange(value:T):void;
  label:React.ReactNode;
  id:string|number;
  hasChanges:boolean;
  className?:string;
  flags:number;
  isVisible:boolean; 
  isEnabled:boolean;
  isRequired:boolean; 
  events:DOMAttributes<any>;
  renderer?:() => React.ReactNode;
  controlRenderer?:() => React.ReactNode;
  labelRenderer?:() => React.ReactNode;
  clearChanges():void;
  setVisible(visible:boolean):void; 
}
