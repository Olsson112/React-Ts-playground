import { CSSProperties, FC } from 'react';
import NavigationItem from './navigationItem';
import { elements, WorldElement } from '../../data/elements';
import { colors } from '../../data/colors';
import ErrorContainerView from './errorContainerView';

interface Props {}

const MasterView: FC<Props> = (props) => {
    return (
        <div style={container}>
            {
                elements.map((element) => (
                    <ErrorContainerView key={element.id}>
                        <NavigationItem element={element} />
                    </ErrorContainerView>
                ))
            }
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    backgroundColor: colors.forth,
    gap: "1em",
    padding: "1em"
}

export default MasterView