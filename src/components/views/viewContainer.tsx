import { FC, lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { WorldElement } from "../../data/elements";
import Spinner from "../spinner";
/* import DetailView from "./detailview";
import MasterView from "./masterView"; */


const MasterView = lazy(() => import("./masterView"))
const DetailView = lazy(() => import("./detailview"))



interface Props {}

const ViewContainer: React.FC<Props> = (props) => {
    return (
        <Suspense fallback={<Spinner color="white" />}>
            <Routes>
                <Route path="/" element={ <MasterView /> } />
                <Route path="/:elementId" element={ <DetailView /> } />
            </Routes>
        </Suspense>
    )
}


export default ViewContainer


