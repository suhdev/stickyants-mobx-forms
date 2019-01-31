import { FieldModel } from './FieldModel';
export declare class CheckboxModel extends FieldModel<boolean> {
    value: boolean;
    onToggle(): void;
    labelRenderer: () => any;
}
