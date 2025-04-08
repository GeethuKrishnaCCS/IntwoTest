var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styles from './IntwoApi.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios';
import { HttpClient } from '@microsoft/sp-http';
// Define the IVacancy interface
// interface IVacancy {
//   id: string;
//   title: string;
//   location?: {
//     name: string;
//   };
//   department?: {
//     name: string;
//   };
// }
var IntwoApi = /** @class */ (function (_super) {
    __extends(IntwoApi, _super);
    function IntwoApi(props) {
        return _super.call(this, props) || this;
    }
    IntwoApi.prototype.render = function () {
        var _a = this.props, description = _a.description, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        return (React.createElement("section", { className: "".concat(styles.intwoApi, " ").concat(hasTeamsContext ? styles.teams : '') },
            React.createElement("div", { className: styles.welcome },
                React.createElement("img", { alt: "", src: isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png'), className: styles.welcomeImage }),
                React.createElement("h2", null,
                    "Well done, ",
                    escape(userDisplayName),
                    "!"),
                React.createElement("div", null, environmentMessage),
                React.createElement("div", null,
                    "Web part property value: ",
                    React.createElement("strong", null, escape(description)))),
            React.createElement("div", null,
                React.createElement("h3", null, "Welcome to SharePoint Framework!"),
                React.createElement("p", null, "The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It's the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling."),
                React.createElement("h4", null, "Learn more about SPFx development:"),
                React.createElement("ul", { className: styles.links },
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://aka.ms/spfx", target: "_blank", rel: "noreferrer" }, "SharePoint Framework Overview")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://aka.ms/spfx-yeoman-graph", target: "_blank", rel: "noreferrer" }, "Use Microsoft Graph in your solution")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://aka.ms/spfx-yeoman-teams", target: "_blank", rel: "noreferrer" }, "Build for Microsoft Teams using SharePoint Framework")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://aka.ms/spfx-yeoman-viva", target: "_blank", rel: "noreferrer" }, "Build for Microsoft Viva Connections using SharePoint Framework")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://aka.ms/spfx-yeoman-store", target: "_blank", rel: "noreferrer" }, "Publish SharePoint Framework applications to the marketplace")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://aka.ms/spfx-yeoman-api", target: "_blank", rel: "noreferrer" }, "SharePoint Framework API reference")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://aka.ms/m365pnp", target: "_blank", rel: "noreferrer" }, "Microsoft 365 Developer Community"))))));
    };
    IntwoApi.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //await this.getVacancies();
                    return [4 /*yield*/, this.getVacancyById()];
                    case 1:
                        //await this.getVacancies();
                        _a.sent();
                        this.callLogicApp();
                        return [2 /*return*/];
                }
            });
        });
    };
    IntwoApi.prototype.callLogicApp = function () {
        var logicAppUrl = "https://prod-06.centralindia.logic.azure.com:443/workflows/97f76ad1d93840a3863af7e5fc61e5f6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SYxziFnv3E7-B3KC1-pQYIqBE6hRfyFWSkckVW7nKd4";
        var requestBody = {
            name: "John Doe",
            email: "john@example.com"
        };
        fetch(logicAppUrl, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! Status: ".concat(response.status));
            }
            return response.json();
        })
            .then(function (data) {
            console.log("Logic App Response:", data);
        })
            .catch(function (error) {
            console.error("Error calling Logic App:", error);
        });
    };
    IntwoApi.prototype.getVacancyById = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var proxyUrl, targetUrl, response, error_1, requestHeaders, httpClientOptions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        proxyUrl = "https://cors-anywhere.herokuapp.com/";
                        targetUrl = "https://api.homerun.co/v2/vacancies?include[]=location&include[]=department";
                        //proxyUrl +
                        fetch(proxyUrl + targetUrl, {
                            method: "GET",
                            headers: {
                                "Authorization": "Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1",
                                "Content-Type": "application/json",
                                'origin': 'http://localhost:8080/'
                            }
                        })
                            .then(function (response) { return response.json(); })
                            .then(function (data) { return console.log(data); })
                            .catch(function (err) { return console.error("Error:", err); });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios.get(targetUrl, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    "Authorization": "Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1"
                                }
                            })];
                    case 2:
                        response = _b.sent();
                        this.context.res = {
                            status: 200,
                            body: response.data
                        };
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.context.res = {
                            status: ((_a = error_1.response) === null || _a === void 0 ? void 0 : _a.status) || 500,
                            body: {
                                error: true,
                                message: error_1.message
                            }
                        };
                        return [3 /*break*/, 4];
                    case 4:
                        requestHeaders = new Headers();
                        requestHeaders.append('Content-type', 'application/json');
                        requestHeaders.append('Cache-Control', 'no-cache');
                        //For an OAuth token  
                        requestHeaders.append('Authorization', 'Bearer 1012918|xjCx70R5YWfwZxOTxCKjN0FASoCycktRKfhFADm2ae6ac2b1');
                        httpClientOptions = {
                            headers: requestHeaders
                        };
                        console.log("About to make REST API request.");
                        return [2 /*return*/, this.context.httpClient.post(targetUrl, HttpClient.configurations.v1, httpClientOptions)
                                .then(function (response) {
                                console.log("REST API response received.");
                                return response.json();
                            })];
                }
            });
        });
    };
    return IntwoApi;
}(React.Component));
export default IntwoApi;
//# sourceMappingURL=IntwoApi.js.map