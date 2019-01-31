
import * as React from 'react'; 
import {TextFieldModel}  from '../TextFieldModel';
import { IFieldProps } from '../IFieldProps';
import { observer } from 'mobx-react';
import "./TextField.scss";

@observer
export class TextField extends React.Component<IFieldProps<TextFieldModel>>{
  onChange = (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.currentTarget.value;
    this.props.model.onChange(val);
  }

  render() {
    const { model } = this.props;
    const control = model.isLongText ?
      <textarea value={model.value}
        onChange={this.onChange} disabled={!model.isEnabled}
        required={model.isRequired}
        className="sa-formfield__control sa-formfield__padding sa-formfield__control--text" /> :
      <input type="text" onChange={this.onChange}
        disabled={!model.isEnabled}
        required={model.isRequired}
        className="sa-formfield__control sa-formfield__padding sa-formfield__control--text" />;

    return (
      <div className="sa-formfield__control-wrapper">
        {model.controlRenderer ? model.controlRenderer() : control}
      </div>
    );
  }
}