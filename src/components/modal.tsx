import { FC, PropsWithChildren, useEffect } from "react";
import ReactDOM from "react-dom";
import { centeredContent, fullScreen } from "../style/common";


interface Props {
    setShowModal: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Modal: FC<PropsWithChildren<Props>> = (props) => {

    const element = document.createElement("div")
    element.id = "modal-root"

    useEffect(() => {
        document.body.append(element)

        return () => {
            console.log("Modal will be removed from DOM");
            document.body.removeChild(element)
        }
    }, [])

    return ReactDOM.createPortal( 
        (
            <div style={{...fullScreen, ...centeredContent}} onClick={() => props.setShowModal(undefined)}>
                {props.children}
            </div>
        ), 
        element )
}

export default Modal