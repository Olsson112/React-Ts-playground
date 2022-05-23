import { CSSProperties, FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import { elements, WorldElement } from "../../data/elements";
import { fullscreenAbsolute } from "../../style/common";


interface Props {}

const DetailView: FC<Props> = (props) => {

    // Find i elements
    const { elementId } = useParams()

    const foundElement = elements.find((element) => Number(elementId) == element.id)

    if(!foundElement) {
        return <Navigate to="/" />
    }

    return (
        <div style={container}>
            <img style={fullscreenAbsolute} src={foundElement!.image} alt="" />
        </div>
    )
}

const container: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
}


export default DetailView