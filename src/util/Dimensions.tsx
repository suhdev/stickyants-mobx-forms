import * as React from 'react';

export interface IDimensionsProps {
  children:(ref:React.RefObject<any>, boundingBox:ClientRect) => React.ReactNode;
}

export class Dimensions extends React.Component<IDimensionsProps, {boundingBox:ClientRect}>{
  elRef:React.RefObject<HTMLElement>;
  constructor(props) {
    super(props);
    this.elRef = React.createRef<HTMLElement>();
    this.state = {
      boundingBox:null,
    };
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      const boundingBox = this.elRef.current.getBoundingClientRect();
      this.setState(() => {
        return {
          boundingBox,
        };
      });
    });

  }

  render() {
    return this.props.children(this.elRef, this.state.boundingBox);
  }
}
