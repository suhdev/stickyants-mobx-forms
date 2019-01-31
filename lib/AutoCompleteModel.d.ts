import { FieldModel } from "./FieldModel";
import { IValue } from "./util/IValue";
export declare class AutoCompleteModel extends FieldModel<IValue> {
    value: IValue;
    searchValue: string;
}
