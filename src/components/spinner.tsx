import { FC } from "react";
import { PacmanLoader } from "react-spinners";
import { centeredContent, fullScreen } from "../style/common";


const Spinner: FC = (props) => {
    return (
        <div style={{...centeredContent, ...fullScreen}}>
            <PacmanLoader color="white" />
        </div>
    )
}

export default Spinner