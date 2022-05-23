import { CSSProperties } from "react";

export const centeredContent: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
};

export const fullScreen: CSSProperties = {
    width: '100vw',
    height: '100vh'
}

export const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

export const fullscreenAbsolute: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover"
}