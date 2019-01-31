const React = require('react');
const { storiesOf } = require('@storybook/react');
const TextField = require('../ui/TextField');
const TextFieldModel = require('../TextFieldModel');
const model = new TextFieldModel();
storiesOf('TextField', module)
    .add('with text', () => (React.createElement(TextField, { model: model })))
    .add('with some emoji', () => (React.createElement("span", null, "Test")));
