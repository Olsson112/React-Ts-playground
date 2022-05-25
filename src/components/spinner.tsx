import { FC } from "react";
import { PacmanLoader } from "react-spinners";
import { centeredContent, fullScreen } from "../style/common";

interface Props {
    color: string
}

const Spinner: FC<Props> = (props) => {
    return (
        <div style={{...centeredContent, ...fullScreen}}>
            <PacmanLoader color={props.color} />
        </div>
    )
}

export default Spinner