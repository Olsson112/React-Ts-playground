import { CSSProperties, FC } from 'react';
import SectionItem from './sectionItem';
import { elements } from '../data/elements';



const Content: FC = (props) => {
    return (
        <div style={container}>
            {elements.map((element) => <SectionItem key={element.id} element={element} />)}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyItems: 'stretch',
    alignItems: 'stretch'
}

export default Content