import { CSSProperties, FC, useState } from "react";
import { colors } from "../data/colors";
import { elements, WorldElement } from "../data/elements";
import { columnFlex, fullScreen } from "../style/common";
import ViewContainer from "./views/viewContainer";
import Navbar from "./navbar";


const Layout: FC = () => {
    return (
        <div style={{ ...columnFlex, ...fullScreen, ...background }}>
            <Navbar />
            <ViewContainer />
        </div>
    )
}


const background: CSSProperties = {
  backgroundColor: colors.primary
}
  

export default Layout