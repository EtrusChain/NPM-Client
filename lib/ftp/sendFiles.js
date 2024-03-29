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
exports.sendFiles = void 0;
var removeDuplicates_1 = require("../utils/removeDuplicates");
var getPeers_1 = require("../p2p/getPeers");
var ftpSendBuffer_1 = require("./ftpSendBuffer");
var readFile_1 = require("./readFile");
function sendFiles(fileBuffer, fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var readFile, fileArray, _a, getPeersData, peersUserId, peersUserName, perr, perrName, index, userIp, hostName, fileArrayElement, _b;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    readFile = (0, readFile_1.readFiles)(fileBuffer, "".concat(fileName));
                    return [4 /*yield*/, readFile];
                case 1:
                    _a = [
                        (_e.sent()).peerOne
                    ];
                    return [4 /*yield*/, readFile];
                case 2:
                    _a = _a.concat([
                        (_e.sent()).peerTwo
                    ]);
                    return [4 /*yield*/, readFile];
                case 3:
                    _a = _a.concat([
                        (_e.sent()).peerThree
                    ]);
                    return [4 /*yield*/, readFile];
                case 4:
                    _a = _a.concat([
                        (_e.sent()).peerFour
                    ]);
                    return [4 /*yield*/, readFile];
                case 5:
                    _a = _a.concat([
                        (_e.sent()).peerFive
                    ]);
                    return [4 /*yield*/, readFile];
                case 6:
                    fileArray = _a.concat([
                        (_e.sent()).peerSix
                    ]);
                    getPeersData = (0, getPeers_1.getPeers)();
                    return [4 /*yield*/, getPeersData];
                case 7:
                    peersUserId = (_e.sent()).userIpData;
                    return [4 /*yield*/, getPeersData];
                case 8:
                    peersUserName = (_e.sent()).hostNameData;
                    perr = peersUserId.slice(0, 6);
                    perrName = peersUserName.slice(0, 6);
                    (0, removeDuplicates_1.removeDuplicates)(perr);
                    (0, removeDuplicates_1.removeDuplicates)(perrName);
                    index = 0;
                    _e.label = 9;
                case 9:
                    if (!(index < 6)) return [3 /*break*/, 12];
                    userIp = perr[index];
                    hostName = perrName[index];
                    fileArrayElement = fileArray[index];
                    if (typeof userIp === 'undefined') {
                        userIp = perr[0];
                        hostName = perrName[0];
                    }
                    // createFile(element, ((await readFile) as any).peer + fileArrayElement);
                    _b = ftpSendBuffer_1.sendFilesBuffer;
                    return [4 /*yield*/, readFile];
                case 10:
                    // createFile(element, ((await readFile) as any).peer + fileArrayElement);
                    _b.apply(void 0, [(_e.sent()).peerFile.fileHash + "-".concat(index), fileArrayElement, hostName, userIp]);
                    _e.label = 11;
                case 11:
                    index++;
                    return [3 /*break*/, 9];
                case 12:
                    _c = {
                        message: 'File Sended Succesfully'
                    };
                    _d = {};
                    return [4 /*yield*/, readFile];
                case 13:
                    _d.fileName = (_e.sent()).peerFile.fileName;
                    return [4 /*yield*/, readFile];
                case 14: return [2 /*return*/, (_c.data = (_d.fileHash = (_e.sent()).peerFile.fileHash,
                        _d.peers = perr,
                        _d),
                        _c)];
            }
        });
    });
}
exports.sendFiles = sendFiles;
