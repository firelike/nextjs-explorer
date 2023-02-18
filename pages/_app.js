import React from 'react';
import '../styles/style.scss'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
