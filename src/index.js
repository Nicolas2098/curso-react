import React from "react";
//import ReactDom from "react-dom";
import { createRoot } from 'react-dom/client';
import App from '@routes/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home"/>);

//ReactDom.render(<App />, document.getElementById('app'));
