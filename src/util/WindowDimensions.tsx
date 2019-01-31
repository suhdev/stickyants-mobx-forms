import * as React from 'react';

const windowContext = React.createContext<WindowSize>({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  outerWidth: window.outerWidth,
  outerHeight: window.outerHeight,
});

/**
 * Window size
 */
export type WindowSize = {
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
}

  ; /**
 * A component to extract the window size (inner/outer) and pass it
 * down the react tree.
 */
export class WindowDimensions extends React.Component<any, WindowSize>{
  updateInProgress: boolean = false;
  constructor(props) {
    super(props);
    this.state = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
    };
  }

  updateWindowSize = () => {
    if (this.updateInProgress) {
      return;
    }
    this.updateInProgress = true;
    requestAnimationFrame(() => {
      this.updateInProgress = false;
      this.setState(() => {
        return {
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
          outerWidth: window.outerWidth,
          outerHeight: window.outerHeight,
        }
          ;
      });
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('r;eize', this.updateWindowSize);
  }

  render() {
    return (
      <windowContext.Provider value={this.state}>
        {this.props.children}
      </windowContext.Provider>
    );
  }
}
export const windowDimensionReceiver = windowContext.Consumer;
