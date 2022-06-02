import { FC, PropsWithChildren } from "react";


interface Props {
    
}

const Modal: FC<PropsWithChildren<Props>> = (props) => {

    const element = document.createElement("div")
    element.id = "modal-root"


    return ReactDOM.createPortal()
}