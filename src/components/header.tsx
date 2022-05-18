import React, { CSSProperties } from 'react';
import { colors } from '../data/colors';

/** React function component */
export default function Header() {
    return (
        <div style={header}>
            <h1 style={headerItem}>React Playground</h1>
        </div>
    );
}

const header: CSSProperties = {
    height: '4em',
    background: colors.primary,
    color: colors.third,
    display: 'flex',
    alignItems: 'stretch',
    paddingLeft: '1em',
    paddingRight: '1em'
};

const headerItem: CSSProperties = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
};