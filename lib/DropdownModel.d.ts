/// <reference types="react" />
import { FieldModel } from './FieldModel';
import { IValue } from './util/IValue';
export declare class DropdownModel extends FieldModel<IValue> {
    value: IValue;
    highlightedValue: IValue;
    options: IValue[];
    showMenu: boolean;
    defaultLabel: React.ReactNode;
    optionRenderer?: (option: IValue, value: IValue) => React.ReactNode;
    menuRenderer?: (options: IValue[], value: IValue) => React.ReactNode;
    dopdownLabelRenderer?: (value: IValue) => React.ReactNode;
    toggle(): void;
    hide(): void;
    show(): void;
    selectPrevious(): void;
    selectNext(): void;
}
