"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIp = void 0;
var os_1 = require("os");
function userIp() {
    return __awaiter(this, void 0, void 0, function () {
        var nets, results, _i, _a, name_1, _b, _c, net, familyV4Value, hostUrl, userIpName, port;
        return __generator(this, function (_d) {
            nets = (0, os_1.networkInterfaces)();
            results = Object.create(null);
            for (_i = 0, _a = Object.keys(nets); _i < _a.length; _i++) {
                name_1 = _a[_i];
                for (_b = 0, _c = nets[name_1]; _b < _c.length; _b++) {
                    net = _c[_b];
                    familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
                    if (net.family === familyV4Value && !net.internal) {
                        if (!results[name_1]) {
                            results[name_1] = [];
                        }
                        results[name_1].push(net.address);
                    }
                }
            }
            hostUrl = '';
            userIpName = '';
            port = 9001;
            if ((0, os_1.type)() === 'Windows_NT') {
                hostUrl = "ftp://".concat(results['VirtualBox Host-Only Network'][0], ":") + port;
                userIpName = results['VirtualBox Host-Only Network'][0];
            }
            else if ((0, os_1.type)() === 'Linux') {
                hostUrl = "ftp://".concat(results.wlp8s0[0], ":") + port;
                userIpName = results.wlp8s0[0];
            }
            return [2 /*return*/, {
                    peerHostUrl: hostUrl,
                    peerUserIp: userIpName,
                }];
        });
    });
}
exports.userIp = userIp;
