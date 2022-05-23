import { CSSProperties, FC } from 'react';
import { colors } from '../data/colors';
import { WorldElement } from '../data/elements';

interface Props {
    selectNewView: React.Dispatch<React.SetStateAction<WorldElement | undefined>>
}

/** React function component */
const Navbar: FC<Props> = (props) => {
    return (
        <div style={header}>
            <h1 onClick={() => props.selectNewView(undefined)} style={headerItem}>React Playground</h1>
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
    cursor: 'pointer'
};


export default Navbar