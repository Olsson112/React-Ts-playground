import { CSSProperties, FC } from "react";
import { WorldElement } from "../../data/elements";
import { fullscreenAbsolute } from "../../style/common";


interface Props {
    currentView: WorldElement
}

const DetailView: FC<Props> = (props) => {
    return (
        <div style={container}>
            <img style={fullscreenAbsolute} src={props.currentView.image} alt="" />
        </div>
    )
}

const container: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
}


export default DetailView