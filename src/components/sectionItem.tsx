import { CSSProperties, FC } from 'react';
import { centeredContent } from '../style/common';
import { Element } from './../data/elements'

interface Props {
    element: Element
}

/** React function component */
const SectionItem: FC<Props> = (props) => {

    return (
        <div style={{ ...gridItem, ...centeredContent }}>
            <img src={props.element.image} style={imageStyle} />
            <div style={overlay}>
                <h1 style={textStyle}>{props.element.name}</h1>
            </div>
        </div>
    );
}


const gridItem: CSSProperties = {
    position: 'relative',
    display: "flex",
    margin: '0.5em',
    height: '100%'
}

const overlay: CSSProperties = {
    position: 'absolute',
    width: "100%",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const imageStyle: CSSProperties = {
    width: '100%',  
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
}

const textStyle: CSSProperties = {
    color: '#1E1E1E',
    textShadow: '0 0 3px white'
}

export default SectionItem