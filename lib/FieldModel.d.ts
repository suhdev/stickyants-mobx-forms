import { IFieldModel } from './IFieldModel';
import { FieldType } from './FieldType';
import { FieldFlags } from './FieldFlags';
import { DOMAttributes } from 'react';
export declare abstract class FieldModel<T> implements IFieldModel<T> {
    events: DOMAttributes<any>;
    renderer?: () => React.ReactNode;
    controlRenderer?: () => React.ReactNode;
    labelRenderer?: () => React.ReactNode;
    constructor();
    hasChanges: boolean;
    label: string;
    type: FieldType;
    flags: number;
    id: string;
    value: T;
    readonly isEnabled: boolean;
    readonly isLongText: boolean;
    onChange(value: T): void;
    is(flag: FieldFlags): boolean;
    clearChanges(): void;
}
