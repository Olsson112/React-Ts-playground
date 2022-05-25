import { CSSProperties, FC, useState } from "react";
import { colors } from "../data/colors";
import { elements, WorldElement } from "../data/elements";
import { columnFlex, fullScreen } from "../style/common";
import ViewContainer from "./views/viewContainer";
import Navbar from "./navbar";
import ErrorBoundary from "./errorBoundary";


const Layout: FC = () => {
    return (
        <div style={{ ...columnFlex, ...fullScreen, ...background }}>
            <Navbar />
            <ErrorBoundary ErrorMessage="Layout is broken...">
                <ViewContainer />
            </ErrorBoundary>
        </div>
    )
}


const background: CSSProperties = {
  backgroundColor: colors.primary
}
  

export default Layout