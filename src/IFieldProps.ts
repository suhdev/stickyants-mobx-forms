import { FieldModel } from './FieldModel';

export interface IFieldProps<T extends FieldModel<any>> {
  model:T; 
}
