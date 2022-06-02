import { CSSProperties, FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import { elements, WorldElement } from "../../data/elements";
import { fullscreenAbsolute } from "../../style/common";
import ImageCollage from "../imageCollage";
import TextBox from "../textBox";


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
            <div style={{...fullscreenAbsolute, ...absoluteContainer}}>
                <h1 style={{...elementNameHeader, color: foundElement.textColor}}>{foundElement.name}</h1>
                <TextBox textColor={foundElement.textColor} searchWord={foundElement.name} />
                <ImageCollage searchWord={foundElement.name}/>
            </div>
            <img style={{...fullscreenAbsolute, filter: "blur(8px)"}} src={foundElement!.image} alt="" />
        </div>
    )
}

const container: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
}

const elementNameHeader: CSSProperties = {
    color: "white",
    textAlign: "center",
    fontFamily: "fantasy",
    fontSize: "80px",
    marginBottom: 0
}

const absoluteContainer: CSSProperties = {
    display: "flex",
    flexDirection: "column",

    zIndex: 1,
    overflowY: "scroll"
}

export default DetailView