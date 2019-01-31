import * as React from 'react';
import { IFieldProps } from '../IFieldProps';
import { DropdownModel } from '../DropdownModel';
import { observer } from 'mobx-react';
import { IValue } from '../util/IValue';

export type IOptionProps = IFieldProps<DropdownModel> &
  {option:IValue};

@observer
export class DropdownFieldOption extends React.Component<IOptionProps>{
  onClick = () => {
    this.props.model.onChange(this.props.option);
  }

  render() {
    const { model, option } =  this .props;
    return (
      model.optionRenderer ? model.optionRenderer(option, model.value) :
      <div data-id={ option.id }
          onClick={ this.onClick }
          className="sa-formfield-dropdown__option"> { option.label } </div>
    );
  }
}

@observer
export class DropdownFieldMenu extends React.Component <IFieldProps<DropdownModel>> {
  render() {
    const { model } =  this.props;
    return(
      model.options.map(e => <DropdownFieldOption model= {model}
        option={e} key={e.id} />)
    );
  }
}

@observer
export class DropdownFieldLabel extends React.Component <IFieldProps<DropdownModel>> {
  render() {
    const { model }  = this.props ;
    return (
      <div className="sa-formfield-dropdown__label">
          {(model.value && model.value.label) || model.defaultLabel}
      </div>
    );
  }
}

@observer
export class DropdownField extends React.Component<IFieldProps<DropdownModel>>{

  onFocus = ()=>{
    this.props.model.show();
  }

  onBlur = ()=>{
    setTimeout(()=>{
      this.props.model.hide();
    },250);
  }

  onKeyUp = (e:React.KeyboardEvent<any>)=>{
    if (e.which === 38){
      this.props.model.selectPrevious();
    }else if (e.which === 40){
      this.props.model.selectNext();
    }else if (e.which === 13 || e.which === 32){
      this.props.model.toggle();
    }else if (e.which === 27){
      this.props.model.revert();
    }
  }

  render() {
    const { model } = this.props;

    return(
      <div className="sa-formfield-control sa-formfield-control--dropdown" 
        tabIndex={0} onFocus={this.onFocus}
        onKeyUp={this.onKeyUp}
        onBlur={this.onBlur}>
        <DropdownFieldLabel model={model} />
        <div className="sa-formfield-dropdown__menu">
          <DropdownFieldMenu model={model}  />
        </div>
      </div>
    );
  }
}
