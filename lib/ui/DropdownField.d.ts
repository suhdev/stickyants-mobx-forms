import * as React from 'react';
import { IFieldProps } from '../IFieldProps';
import { DropdownModel } from '../DropdownModel';
import { IValue } from '../util/IValue';
export declare type IOptionProps = IFieldProps<DropdownModel> & {
    option: IValue;
};
export declare class DropdownFieldOption extends React.Component<IOptionProps> {
    onClick: () => void;
    render(): any;
}
export declare class DropdownFieldMenu extends React.Component<IFieldProps<DropdownModel>> {
    render(): any;
}
export declare class DropdownFieldLabel extends React.Component<IFieldProps<DropdownModel>> {
    render(): JSX.Element;
}
export declare class DropdownField extends React.Component<IFieldProps<DropdownModel>> {
    onFocus: () => void;
    onBlur: () => void;
    onKeyUp: (e: React.KeyboardEvent<any>) => void;
    render(): JSX.Element;
}
