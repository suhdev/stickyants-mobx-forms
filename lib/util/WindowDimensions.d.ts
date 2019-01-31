import * as React from 'react';
/**
 * Window size
 */
export declare type WindowSize = {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
}; /**
* A component to extract the window size (inner/outer) and pass it
* down the react tree.
*/
export declare class WindowDimensions extends React.Component<any, WindowSize> {
    updateInProgress: boolean;
    constructor(props: any);
    updateWindowSize: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export declare const windowDimensionReceiver: any;
