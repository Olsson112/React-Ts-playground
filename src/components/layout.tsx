import { CSSProperties, FC } from "react";
import { colors } from "../data/colors";
import { columnFlex, fullScreen } from "../style/common";
import Content from "./content";
import Header from "./header";


const Layout: FC = () => {
    return (
        <div style={{ ...columnFlex, ...fullScreen, ...background }}>
            <Header/>
            <Content/>
        </div>
    )
}


const background: CSSProperties = {
  backgroundColor: colors.primary
}
  

export default Layout