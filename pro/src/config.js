"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const utils_1 = require("./utils");
const DEFAULT_PKG_FILE = path_1.default.join(utils_1.getUserDir(), 'npm.global.txt');
exports.DEFAULT_PKG_FILE = DEFAULT_PKG_FILE;
const DEFAULT_RECORD_FILE = path_1.default.join(__dirname, '.pathrc');
exports.DEFAULT_RECORD_FILE = DEFAULT_RECORD_FILE;
