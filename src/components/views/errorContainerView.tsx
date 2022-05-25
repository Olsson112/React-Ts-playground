import { FC, PropsWithChildren } from "react";
import ErrorBoundary from "../errorBoundary";


interface Props {}

const ErrorContainerView: FC<PropsWithChildren<Props>> = (props) => {
    return (
        <ErrorBoundary ErrorMessage="Something went wrong...">
            {props.children}
        </ErrorBoundary>
    )
}

export default ErrorContainerView