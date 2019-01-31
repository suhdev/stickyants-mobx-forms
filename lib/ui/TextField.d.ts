import * as React from 'react';
import { TextFieldModel } from '../TextFieldModel';
import { IFieldProps } from '../IFieldProps';
export declare class TextField extends React.Component<IFieldProps<TextFieldModel>> {
    onChange: (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement, Event>) => void;
    render(): JSX.Element;
}
