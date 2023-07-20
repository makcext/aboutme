"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
const App_1 = __importDefault(require("./App"));
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = client_1.default.createRoot(rootElement);
    root.render(react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(App_1.default, null)));
}
console.log("hi from index.jsx");
//# sourceMappingURL=index.js.map