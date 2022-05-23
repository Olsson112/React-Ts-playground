import { FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { WorldElement } from "../../data/elements";
import DetailView from "./detailview";
import MasterView from "./masterView";


interface Props {}

const ViewContainer: FC<Props> = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <MasterView /> } />
                <Route path="/:elementId" element={ <DetailView /> } />
            </Routes>
        </>
    )
}


export default ViewContainer


