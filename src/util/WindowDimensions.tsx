import * as React from 'react'; 

const WindowContext = React.createContext<WindowSize>({
    innerWidth:window.innerWidth, 
    innerHeight:window.innerHeight,
    outerWidth:window.outerWidth,
    outerHeight:window.outerHeight
});

export type WindowSize = {
    innerWidth:number;
    innerHeight:number;
    outerWidth:number;
    outerHeight:number;
}

export class WindowDimensions extends React.Component<any,WindowSize>{
    updateInProgress:boolean = false;
    constructor(props){
        super(props); 
        this.state = {
            innerWidth:window.innerWidth, 
            innerHeight:window.innerHeight,
            outerWidth:window.outerWidth,
            outerHeight:window.outerHeight
        }
    }

    updateWindowSize = ()=>{
        if (this.updateInProgress){
            return; 
        }
        this.updateInProgress = true; 
        requestAnimationFrame(()=>{
            this.updateInProgress = false; 
            this.setState(()=>{
                return {
                    innerWidth:window.innerWidth, 
                    innerHeight:window.innerHeight,
                    outerWidth:window.outerWidth,
                    outerHeight:window.outerHeight
                }
            });
        })
    }

    componentDidMount(){
        window.addEventListener('resize',this.updateWindowSize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.updateWindowSize); 
    }

    render(){
        return (
            <WindowContext.Provider value={this.state}>
                {this.props.children}
            </WindowContext.Provider>
        )
    }
}

export const WindowDimensionReceiver = WindowContext.Consumer; 
