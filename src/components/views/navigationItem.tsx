import { CSSProperties, FC, useContext } from 'react';
import { centeredContent } from '../../style/common';
import { WorldElement } from '../../data/elements'
import { Link } from 'react-router-dom';
import { testErrorBoundary } from '../errorBoundary';
import { DeviceContext } from '../context/DeviceProvider';

interface Props {
    element: WorldElement
}

/** React function component */
const NavigationItem: FC<Props> = (props) => {

    const { logCurrentDevice } = useContext(DeviceContext)

    logCurrentDevice()

  /*   if(props.element.id == 2) {
        testErrorBoundary()
    } */

    return (
        <Link to={`/${props.element.id}`} style={{ ...gridItem, ...centeredContent }}>
            <img src={props.element.image} style={imageStyle} />
            <div style={overlay}>
                <h1 style={textStyle}>{props.element.name}</h1>
            </div>
        </Link>
    );
}


const gridItem: CSSProperties = {
    position: 'relative',
    display: "flex",
    height: '100%',
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
    position: 'absolute',
    borderRadius: "10px"
}

const textStyle: CSSProperties = {
    color: '#1E1E1E',
    textShadow: '0 0 3px white'
}

export default NavigationItem