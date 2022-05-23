import { FC } from "react";
import { WorldElement } from "../../data/elements";
import DetailView from "./detailview";
import MasterView from "./masterView";


interface Props {
    currentView: WorldElement | undefined
    setCurrentView: React.Dispatch<React.SetStateAction<WorldElement | undefined>>
}

const ViewContainer: FC<Props> = (props) => {
    return (
        props.currentView == undefined ? (
            <MasterView setCurrentView={props.setCurrentView} />
        ) : <DetailView currentView={props.currentView} />
    )
}


export default ViewContainer


