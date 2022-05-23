import { CSSProperties, FC } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../data/colors';
import { WorldElement } from '../data/elements';

interface Props {}

/** React function component */
const Navbar: FC<Props> = (props) => {
    return (
        <div style={header}>
            <Link to={"/"} style={headerItem}>React Playground</Link>
        </div>
    );
}

const header: CSSProperties = {
    height: '4em',
    background: colors.primary,
    color: colors.third,
    display: 'flex',
    alignItems: 'stretch',
    paddingLeft: '1em',
    paddingRight: '1em'
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


export default Navbar