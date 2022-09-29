import react from "react"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./app"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
<div>
    Hello World 
    <App></App> 
</div>
)