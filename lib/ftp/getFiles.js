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
exports.getFiles = void 0;
var fs_1 = require("fs");
var getPeers_1 = require("../p2p/getPeers");
var ftpClient = require("basic-ftp");
var removeDuplicates_1 = require("../utils/removeDuplicates");
function getFiles(fileHash, fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var fileData, userIp, userHostName, index, userIpIndex, hostNameIndex, client, index, userFileData, fileBuffer, fs, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fileData = [];
                    return [4 /*yield*/, (0, getPeers_1.getPeers)()];
                case 1:
                    userIp = (_a.sent()).userIpData;
                    return [4 /*yield*/, (0, getPeers_1.getPeers)()];
                case 2:
                    userHostName = (_a.sent()).hostNameData;
                    (0, removeDuplicates_1.removeDuplicates)(userIp);
                    (0, removeDuplicates_1.removeDuplicates)(userHostName);
                    index = 0;
                    _a.label = 3;
                case 3:
                    if (!(index < userIp.length)) return [3 /*break*/, 6];
                    userIpIndex = userIp[index];
                    hostNameIndex = userHostName[index];
                    client = new ftpClient.Client();
                    client.ftp.verbose = true;
                    return [4 /*yield*/, client
                            .access({
                            host: userIpIndex,
                            port: Number(process.env.PORT),
                            user: hostNameIndex,
                            password: "".concat(process.env.PASSWORD),
                            secure: false,
                        })
                            .catch(function (err) {
                            if (err.code === 'ECONNREFUSED') {
                                // process.exit(1);
                            }
                        })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    index++;
                    return [3 /*break*/, 3];
                case 6:
                    for (index = 0; index < 6; index++) {
                        userFileData = (0, fs_1.readFileSync)(__dirname + "/files/".concat(fileHash, "-").concat(index));
                        fileData.push(userFileData);
                    }
                    fileBuffer = Buffer.concat(fileData);
                    fs = require('fs');
                    data = Buffer.from(fileBuffer);
                    fs.writeFile("".concat(__dirname, "/download/").concat(fileName), data, 'binary');
                    return [2 /*return*/, {
                            message: 'File Sended',
                            data: {
                                status: 'Succesfully',
                                buffer: fileBuffer,
                            },
                        }];
            }
        });
    });
}
exports.getFiles = getFiles;
// getFiles('Ec3fe4c1dda5aa86b1abecb8d4478c1057bd69d43b82086ff995aae1149cff6927', 'Hands-on-blockchain.pdf');
