import { CSSProperties, FC } from 'react';
import NavigationItem from './navigationItem';
import { elements, WorldElement } from '../../data/elements';
import { colors } from '../../data/colors';

interface Props {
    setCurrentView: React.Dispatch<React.SetStateAction<WorldElement | undefined>>
}

const MasterView: FC<Props> = (props) => {
    return (
        <div style={container}>
            {elements.map((element) => <NavigationItem setCurrentView={props.setCurrentView} key={element.id} element={element} />)}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    backgroundColor: colors.forth,
    gap: "1em",
    padding: "1em"
}

export default MasterView