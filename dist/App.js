"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const material_1 = require("@mui/material");
const qrsvg_1 = __importDefault(require("./components/qrsvg"));
function Logo() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", width: "100", height: "100", style: { padding: '8px', height: '10vmin', pointerEvents: 'none', animation: 'App-logo-spin infinite 50s linear' } },
        react_1.default.createElement("rect", { x: "0", y: "0", width: "100", height: "100", fill: "#282c34" }),
        react_1.default.createElement("text", { x: "50", y: "60", fontSize: "50", fill: "#fff", textAnchor: "middle" }, "dev")));
}
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement(Logo, null),
            react_1.default.createElement(material_1.Typography, { variant: "overline", fontSize: 24, component: "div", gutterBottom: true }, "makcext front-end developer"),
            react_1.default.createElement("p", null,
                "scan ",
                react_1.default.createElement("code", null, "&"),
                " save."),
            react_1.default.createElement("p", null,
                "react ",
                react_1.default.createElement("code", null, "|"),
                " material-ui ",
                react_1.default.createElement("code", null, "|"),
                " mobx ",
                react_1.default.createElement("code", null, "|"),
                " graphql")),
        react_1.default.createElement("div", { className: "App-body" },
            react_1.default.createElement(material_1.Box, { maxWidth: "lg", sx: { minWidth: 300, background: "#282c34" } },
                react_1.default.createElement(material_1.CardContent, { sx: { minWidth: 300, background: "#282c34" } },
                    react_1.default.createElement(material_1.Typography, { paddingBottom: 2, variant: "h4", sx: {
                            background: 'linear-gradient(to bottom, #555, #999)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            // WebkitLineClamp: 5,
                            // WebkitBoxOrient: 'vertical',
                            position: 'relative',
                            textAlign: 'justify',
                        } },
                        react_1.default.createElement(qrsvg_1.default, null),
                        "It involves the implementation of designs and interactions that users see and interact with directly in their web browsers. Frontend developers use a combination of programming languages, frameworks, and tools to build dynamic, responsive, and visually appealing web applications."),
                    react_1.default.createElement(material_1.Box, { padding: "8px" },
                        react_1.default.createElement("a", { className: "App-link", href: "https://t.me/makcext", target: "_blank", rel: "noopener noreferrer" }, "connect"))),
                react_1.default.createElement(material_1.Typography, { className: "App-version", variant: "subtitle1", align: "right" }, "ver0.0.1  .")))));
}
exports.default = App;
//# sourceMappingURL=App.js.map