import { CSSProperties, FC, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../data/colors';
import { WorldElement } from '../data/elements';
import { Device, DeviceContext, DeviceContextData } from './context/DeviceProvider';

interface Props {}

/** React function component */
const Navbar: FC<Props> = (props) => {

    const { devices } = useContext(DeviceContext)

    let currentDevice: string = devices.isDesktop ? "Desktop" : devices.isTablet ? "Tablet" : "Mobile"  
    
    if(devices.isDesktop) {
        currentDevice = "Desktop"
    } else if(devices.isTablet) {
        currentDevice = "Tablet"
    } else {
        currentDevice = "Mobile"
    }

    return (
        <div style={header(devices)}>
            <Link to={"/"} style={headerItem}>React Playground</Link>
            <h1 style={deviceHeader}>{currentDevice}</h1>
        </div>
    );
}

const header: (devices: Device) => CSSProperties = (devices) => {
    return {
        height: '4em',
        background: devices.isMobile ? colors.primary : devices.isTablet ? colors.forth : colors.secondary,
        color: colors.third,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1em',
        paddingRight: '1em',
        justifyContent: "space-between"
    }
};

const headerItem: CSSProperties = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: "none",
    color: colors.third
};

const deviceHeader: CSSProperties = {
    margin: 0
}


export default Navbar