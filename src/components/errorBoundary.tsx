import { Component, CSSProperties, PropsWithChildren } from "react";
import { PacmanLoader } from "react-spinners";
import { centeredContent } from "../style/common";
import Spinner from "./spinner";

interface Props {
    ErrorMessage: string
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return(
                <div style={{...centeredContent, ...errorContainerStyle}}>
                    <h2>{this.props.ErrorMessage}</h2>
                    <div style={{width: "20px", height: "20px"}}>
                        <PacmanLoader color={"black"} />
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export const testErrorBoundary = () => {
    const nullVariable: any = null
    console.log(nullVariable.somethingThatDoesNotExist);
}

const errorContainerStyle: CSSProperties = {
    backgroundColor: "white",
    height: "100%"
}

export default ErrorBoundary