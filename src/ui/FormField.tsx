import { observer } from 'mobx-react';
import * as React from 'react';
import { IFieldProps } from '../IFieldProps';
import { FieldModel } from '../FieldModel';
import { FieldType } from '../FieldType';
import { TextField } from './TextField';
import { TextFieldModel } from '../TextFieldModel';

@observer
export class FormFieldLabel extends React.Component<IFieldProps<FieldModel<any>>>{
  render() {
    const { model } = this.props;
    return (
      <div className="sa-formfield__label">
        {model.label}
      </div>
    );
  }
}

@observer
export class FormFieldControl extends React.Component<IFieldProps<FieldModel<any>>>{
  renderField(model: FieldModel<any>) {
    switch (model.type) {
      case FieldType.Text:
        return <TextField model={model as TextFieldModel} />;
    }
  }
  render() {
    const { model } = this.props;
    return (
      <div className="sa-formfield__label">
        {model.label}
      </div>
    );
  }
}

@observer
export class FormField extends React.Component<IFieldProps<FieldModel<any>>>{
  render() {
    const { model } = this.props;

    return (
      <div className="sa-formfield"
        data-type={FieldType[model.type]}
        data-disabled={!model.isEnabled}
        data-borderless={model.isBorderless}
        data-visible={model.isVisible}
        data-longtext={model.isLongText}>
        {model.labelRenderer ? model.labelRenderer() : <FormFieldLabel model={model} />}
        <FormFieldControl model={model} />
      </div>
    );
  }
}
