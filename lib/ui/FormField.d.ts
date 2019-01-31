import * as React from 'react';
import { IFieldProps } from '../IFieldProps';
import { FieldModel } from '../FieldModel';
export declare class FormFieldLabel extends React.Component<IFieldProps<FieldModel<any>>> {
    render(): JSX.Element;
}
export declare class FormFieldControl extends React.Component<IFieldProps<FieldModel<any>>> {
    renderField(model: FieldModel<any>): JSX.Element;
    render(): JSX.Element;
}
export declare class FormField extends React.Component<IFieldProps<FieldModel<any>>> {
    render(): JSX.Element;
}
