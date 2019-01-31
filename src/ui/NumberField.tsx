import * as React from 'react';
import { IFieldProps } from '../IFieldProps';
import { NumberFieldModel } from '../NumberFieldModel';

export class NumberField extends React.Component<IFieldProps<NumberFieldModel>>{
  onChange = (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.currentTarget.value;
    this.props.model.onChange(+val);
  }

  render() {
    const { model } = this.props;
    const control = <input type="number" onChange={this.onChange}
        disabled={!model.isEnabled}
        className="sa-formfield__control" />;

    return (
      <div className="sa-formfield__control-wrapper sa-formfield__control-wrapper--number">
        {model.controlRenderer ? model.controlRenderer() : control}
      </div>
    );
  }
}
