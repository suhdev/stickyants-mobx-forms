import * as React from 'react';
import { IFieldProps } from '../IFieldProps';
import { CheckboxModel } from '../CheckboxModel';
import { observer } from 'mobx-react'; import { FormFieldLabel } from './FormField';

@observer
export class CheckboxFieldTick extends React.Component<IFieldProps<CheckboxModel>>{

  render() {
    const { model } = this.props;

    return (
            <div className="sa-formfield__control-tick"
                data-isChecked={model.value}></div>
    );
  }
}

@observer
export class CheckboxField extends React.Component<IFieldProps<CheckboxModel>>{

  render() {
    const { model } = this.props;

    return (
      <div className="sa-formfield__control-wrapper sa-formfield__control-wrapper--checkbox"
          onClick={model.onToggle}>
          <CheckboxFieldTick model={model} />
          <FormFieldLabel model={model} />
      </div>
    );
  }
}
