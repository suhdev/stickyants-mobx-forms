import * as React from 'react'; 
import * as ReactDOM from 'react-dom'; 
import {TextField} from '../ui/TextField'; 
import {TextFieldModel} from '../TextFieldModel'; 


var el = document.getElementById('start');
if (!el){
  el = document.createElement('div')
  el.id = 'start'; 
  el.dataset
  window.model = window.model || new TextFieldModel(); 
  document.querySelector('body').append(el); 
} 
ReactDOM.render(
  <TextField model={window.model} />,
  el
)