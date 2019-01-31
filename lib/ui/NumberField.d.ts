import * as React from 'react';
import { IFieldProps } from '../IFieldProps';
import { NumberFieldModel } from '../NumberFieldModel';
export declare class NumberField extends React.Component<IFieldProps<NumberFieldModel>> {
    onChange: (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement, Event>) => void;
    render(): JSX.Element;
}
