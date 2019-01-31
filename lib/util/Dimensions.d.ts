import * as React from 'react';
export interface IDimensionsProps {
    children: (ref: React.RefObject<any>, boundingBox: ClientRect) => React.ReactNode;
}
export declare class Dimensions extends React.Component<IDimensionsProps, {
    boundingBox: ClientRect;
}> {
    elRef: React.RefObject<HTMLElement>;
    constructor(props: any);
    componentDidMount(): void;
    render(): any;
}
