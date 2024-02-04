import React from 'react';
import { CheckboxProvider } from './CheckboxContect';
import AuthPage from './AuthPage';
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/navbar.css";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}