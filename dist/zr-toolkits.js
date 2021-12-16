/**
 * zr-toolkits v2.1.1
 * (c) 2021-2021 Come2BtheOne https://github.com/Come2BtheOne/zr-toolkits
 * Licensed under MIT
 * Released on: nov 30, 2021
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.tks = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    var name = "zr-toolkits";
    var version = "2.1.1";
    var description = "切图仔巨献";
    var main = "dist/zr-toolkits.js";
    var unpkg = "dist/zr-toolkits.min.js";
    var module = "dist/zr-toolkits.es.js";
    var types = "src/types.ts";
    var scripts = {
    	dev: "cross-env NODE_ENV=development webpack-dev-server --config config/webpack.config.js --mode development",
    	build: "cross-env rollup -c",
    	wpbuild: "cross-env NODE_ENV=production webpack --config config/webpack.config.js --mode production",
    	start: "npm run wpbuild && npm run build",
    	test: "cross-env jest ./test"
    };
    var keywords = [
    	"javascript",
    	"utils"
    ];
    var repository = {
    	type: "git",
    	url: "https://github.com/Come2BtheOne/zr-toolkits"
    };
    var author = "jizirui";
    var license = "MIT";
    var devDependencies = {
    	"@babel/core": "^7.16.5",
    	"@babel/preset-env": "^7.16.5",
    	"@babel/preset-typescript": "^7.16.5",
    	"@types/jest": "^27.0.3",
    	"babel-jest": "^27.4.5",
    	"cross-env": "^5.2.0",
    	"html-webpack-plugin": "^3.2.0",
    	jest: "^27.4.5",
    	rollup: "^1.24.0",
    	"rollup-plugin-banner": "^0.2.1",
    	"rollup-plugin-commonjs": "^10.1.0",
    	"rollup-plugin-json": "^4.0.0",
    	"rollup-plugin-node-resolve": "^5.2.0",
    	"rollup-plugin-typescript": "^1.0.1",
    	"rollup-plugin-uglify": "^6.0.3",
    	"ts-loader": "^9.2.6",
    	tslib: "^1.10.0",
    	typescript: "^4.5.2",
    	webpack: "^4.16.2",
    	"webpack-cli": "^3.1.0",
    	"webpack-dev-server": "^3.1.5",
    	"webpack-merge": "^4.2.2"
    };
    var dependencies = {
    };
    var pkg = {
    	name: name,
    	version: version,
    	description: description,
    	main: main,
    	unpkg: unpkg,
    	module: module,
    	types: types,
    	scripts: scripts,
    	keywords: keywords,
    	repository: repository,
    	author: author,
    	license: license,
    	devDependencies: devDependencies,
    	dependencies: dependencies
    };

    function mixin (CurrClass, TargetClass) {
        var ctx = new CurrClass();
        var prototype = Object.getPrototypeOf(ctx);
        // console.log(Object.keys(ctx));
        // console.log(Reflect.ownKeys(prototype));
        // console.log(Object.getOwnPropertyDescriptor(prototype, "testFn"));
        Reflect.ownKeys(prototype).forEach(function (keys) {
            TargetClass[keys] = ctx[keys];
        });
        return TargetClass;
    }

    var Dataset = /** @class */ (function () {
        function Dataset() {
        }
        /**
         * 判断一个字符串是否为空
         * @param {string|undefined|null} value 需要判断的值
         * @return {boolean}
         */
        Dataset.prototype.isEmptyString = function (value) {
            return (value === undefined || value === null || value === "");
        };
        /**
         * 判断一个值是否为对象
         * @param {any} value   需要判断的值
         * @return {boolean}    判断结果
         */
        Dataset.prototype.isObject = function (value) {
            return Object.prototype.toString.call(value) === '[object Object]';
        };
        /**
         * 判断一个对象是否为空
         * @param {Object} obj 需要判断的对象
         * @return {boolean}  判断结果
         */
        Dataset.prototype.isEmptyObject = function (obj) {
            if (new Dataset().isObject(obj)) {
                return Object.keys(obj).length === 0;
            }
            else {
                throw ("[".concat(pkg.name, ".isEmptyObject()]\n\u5165\u53C2\u975E\u5BF9\u8C61\u7C7B\u578B"));
            }
        };
        /**
         * 对数组对象去重
         * @param {Array} arr   需要去重的数组
         * @param {string} key  根据key值去重
         * @returns {Array} 去重结果
         *
         * 示例：
         * let Arr = [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'b',id: 3}, {name: 'c',id: 4}]
         * deWeightThree(Arr, "name");
         */
        Dataset.prototype.deWeightThree = function (arr, key) {
            var obj = {};
            var _arr = arr.reduce(function (a, b) {
                obj[b[key]] ? '' : obj[b[key]] =  a.push(b);
                return a;
            }, []);
            return _arr;
        };
        /**
         * 递归查询树结构的是否存在某一个值
         * @param {Array} arr   需要查找的数组
         * @param {string} keyName  要查找的键名
         * @param {any} keyValue 需要查找的值
         * @param {string} multilevelName  树结构内，包含子数组的对象名，默认children
         * @returns {boolean} 是否存在
         *
         * 示例：
         * const Arr = [
         *  {
         *    id: 123,
         *    children: [
         *      id: 789,
         *      children: []
         *    ]
         *  },
         *  {
         *    id: 456,
         *    children: [
         *      id: 874,
         *      children: []
         *    ]
         *  },
         * ]
         *
         * searchValueInTree(Arr, "id", 789, "children")
         */
        Dataset.prototype.searchValueInTree = function (arr, keyName, keyValue, multilevelName) {
            if (multilevelName === void 0) { multilevelName = 'children'; }
            for (var _i = 0, _a = arr || []; _i < _a.length; _i++) {
                var o = _a[_i];
                if (o[keyName] === keyValue)
                    return o;
                var o_ = new Dataset().searchValueInTree(o[multilevelName] || [], keyName, keyValue, multilevelName);
                if (o_)
                    return o_;
            }
        };
        return Dataset;
    }());
    function Dataset$1 (targetClass) {
        return mixin(Dataset, targetClass);
    }

    var Random = /** @class */ (function () {
        function Random() {
        }
        /**
         * 基于URL生成UUID
         * @returns {string} cd205467-0120-47b0-9444-894736d873c7
         */
        Random.prototype.genUUID = function () {
            var url = URL.createObjectURL(new Blob([]));
            // const uuid = url.split("/").pop();
            var uuid = url.substring(url.lastIndexOf('/') + 1);
            URL.revokeObjectURL(url);
            return uuid;
        };
        /**
         * 基于日期对象和random生成随机ID
         * @returns {string}  1627635706897_652
         */
        Random.prototype.genRandomID = function () {
            return new Date().getTime() + '_' + (Math.random() * 10000).toFixed(0);
        };
        /**
       * 洗牌算法随机
       * @param {Array} arr  需要打乱的数组
       */
        Random.prototype.shuffleRandom = function (arr) {
            var result = [], random;
            while (arr.length > 0) {
                random = Math.floor(Math.random() * arr.length);
                result.push(arr[random]);
                arr.splice(random, 1);
            }
            return result;
        };
        /**
         * 在一个范围内生成随机数
         * @param {number} min
         * @param {number} max
         * @param {number} exact  精确到几位小数
         */
        Random.prototype.creatRandom = function (min, max, exact) {
            if (exact === void 0) { exact = 0; }
            if (arguments.length === 0) {
                return Math.random();
            }
            else if (arguments.length === 1) {
                max = min;
                min = 0;
            }
            var range = min + (Math.random() * (max - min));
            return +(exact === void (0) ? Math.round(range) : range.toFixed(exact));
        };
        return Random;
    }());
    function Random$1 (targetClass) {
        return mixin(Random, targetClass);
    }

    var CheckStringKey;
    (function (CheckStringKey) {
        CheckStringKey["phone"] = "phone";
        CheckStringKey["tel"] = "tel";
        CheckStringKey["card"] = "card";
        CheckStringKey["pwd"] = "pwd";
        CheckStringKey["postal"] = "postal";
        CheckStringKey["QQ"] = "QQ";
        CheckStringKey["email"] = "email";
        CheckStringKey["money"] = "money";
        CheckStringKey["URL"] = "URL";
        CheckStringKey["IP"] = "IP";
        CheckStringKey["number"] = "number";
        CheckStringKey["english"] = "english";
        CheckStringKey["chinese"] = "chinese";
        CheckStringKey["lower"] = "lower";
        CheckStringKey["upper"] = "upper";
        CheckStringKey["HTML"] = "HTML"; //HTML标记
    })(CheckStringKey || (CheckStringKey = {}));
    var TrimType;
    (function (TrimType) {
        TrimType[TrimType["allSpace"] = 1] = "allSpace";
        TrimType[TrimType["prevNextSpace"] = 2] = "prevNextSpace";
        TrimType[TrimType["prevSpace"] = 3] = "prevSpace";
        TrimType[TrimType["nextSpace"] = 4] = "nextSpace"; //后空格
    })(TrimType || (TrimType = {}));
    var CaseType;
    (function (CaseType) {
        CaseType[CaseType["firstUpper"] = 1] = "firstUpper";
        CaseType[CaseType["firstLower"] = 2] = "firstLower";
        CaseType[CaseType["reverse"] = 3] = "reverse";
        CaseType[CaseType["allUpper"] = 4] = "allUpper";
        CaseType[CaseType["allLower"] = 5] = "allLower"; //全部小写
    })(CaseType || (CaseType = {}));
    var OperationEnum;
    (function (OperationEnum) {
        OperationEnum["tel"] = "tel";
        OperationEnum["sms"] = "sms";
        OperationEnum["mailto"] = "mailto";
    })(OperationEnum || (OperationEnum = {}));

    var CheckStringReg = {
        phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
        tel: /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,
        card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        pwd: /^[a-zA-Z]\w{5,17}$/,
        postal: /[1-9]\d{5}(?!\d)/,
        QQ: /^[1-9][0-9]{4,9}$/,
        email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
        money: /^\d*(?:\.\d{0,2})?$/,
        URL: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
        IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
        number: /^[0-9]$/,
        english: /^[a-zA-Z]+$/,
        chinese: /^[\\u4E00-\\u9FA5]+$/,
        lower: /^[a-z]+$/,
        upper: /^[A-Z]+$/,
        HTML: /<("[^"]*"|'[^']*'|[^'">])*>/ //HTML标记
    };
    var TrimReg = {
        allSpace: /\s+/g,
        prevNextSpace: /(^\s*)|(\s*$)/g,
        prevSpace: /(^\s*)/g,
        nextSpace: /(\s*$)/g //后空格
    };
    var aCity = {
        11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
    };

    var Character = /** @class */ (function () {
        function Character() {
        }
        /**
         * 获取url字符串上的参数
         * @param {string} url  链接
         * @param {string} key  需要获取的参数的键名
         */
        Character.prototype.getUrlParamsValue = function (url, key) {
            if (URL) {
                var urlSP = new URL(url);
                return urlSP.searchParams.get(key);
            }
        };
        /**
         * 去除字符串前后空格
         * @param {string} str  字符串
         * @param {TrimType} trimType  切割类型
         * @return {string}
         */
        Character.prototype.trim = function (str, trimType) {
            if (trimType === void 0) { trimType = 2; }
            if (trimType !== undefined && TrimType.hasOwnProperty(trimType)) {
                return str.replace(TrimReg[TrimType[trimType]], "");
            }
            else {
                throw ("[".concat(pkg.name, ".trim()]\n\u5165\u53C2[trimType]\u9519\u8BEF"));
            }
        };
        /**
         * 大小写转化
         * @param {string} str  字符串
         * @param {CaseType} caseType  转换类型
         * @return {string}
         */
        Character.prototype.changeCase = function (str, caseType) {
            if (caseType === void 0) { caseType = 3; }
            switch (caseType) {
                case 1:
                    return str.replace(/\b\w+\b/g, function (word) {
                        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
                    });
                case 2:
                    return str.replace(/\b\w+\b/g, function (word) {
                        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
                    });
                case 3:
                    return str.split('').map(function (word) {
                        if (/[a-z]/.test(word)) {
                            return word.toUpperCase();
                        }
                        else {
                            return word.toLowerCase();
                        }
                    }).join('');
                case 4:
                    return str.toUpperCase();
                case 5:
                    return str.toLowerCase();
                default:
                    throw ("[".concat(pkg.name, ".changeCase()]\n\u5165\u53C2[caseType]\u9519\u8BEF"));
            }
        };
        return Character;
    }());
    function Character$1 (targetClass) {
        return mixin(Character, targetClass);
    }

    var Regexp = /** @class */ (function () {
        function Regexp() {
        }
        /**
         * 校验邮箱格式
         * @param {string} str
         * @return {boolean}
         */
        Regexp.prototype.isEmail = function (str) {
            return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str);
        };
        /**
         * 校验手机号码格式
         * @param {string} str
         * @return {boolean}
         */
        Regexp.prototype.isMobilePhone = function (str) {
            return /^1[0-9]{10}$/.test(str);
        };
        /**
         * 校验座机号码格式
         * @param {string} str
         * @return {boolean}
         */
        Regexp.prototype.isTelephone = function (str) {
            return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(str);
        };
        /**
         * 正则校验合集
         * @param {string} str  要校验的字符串
         * @param {CheckStringKey} key  校验类型
         * @return {boolean}
         */
        Regexp.prototype.regCheckString = function (str, key) {
            if (key !== undefined && CheckStringReg.hasOwnProperty(key)) {
                for (var k in CheckStringReg) {
                    if (k === key) {
                        return CheckStringReg[k].test(str);
                    }
                }
            }
            else {
                throw ("[".concat(pkg.name, ".regCheckString()]\n\u5165\u53C2[key]\u9519\u8BEF"));
            }
        };
        /**
         * 严格校验身份证
         * @param {string} sId  字符串类型的身份证号码
         * @return {boolean}
         */
        Regexp.prototype.strictCheckIDCard = function (sId) {
            if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
                console.warn('你输入的身份证长度或格式错误');
                return false;
            }
            //身份证城市
            if (!aCity[parseInt(sId.substr(0, 2))]) {
                console.warn('你的身份证地区非法');
                return false;
            }
            // 出生日期验证
            var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"), d = new Date(sBirthday);
            if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
                console.warn('身份证上的出生日期非法');
                return false;
            }
            // 身份证号码校验
            var sum = 0, weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], codes = "10X98765432";
            for (var i = 0; i < sId.length - 1; i++) {
                // @ts-ignore
                sum += sId[i] * weights[i];
            }
            var last = codes[sum % 11]; //计算出来的最后一位身份证号码
            if (sId[sId.length - 1] != last) {
                console.warn('你输入的身份证号非法');
                return false;
            }
            return true;
        };
        return Regexp;
    }());
    function Regexp$1 (targetClass) {
        return mixin(Regexp, targetClass);
    }

    var Time = /** @class */ (function () {
        function Time() {
        }
        /**
         * 将时间戳转换成  2021/11/30 14:10:09
         * @param {number} ms   时间戳
         * @param {boolean} hour12    是否12小时制
         * @return {string}   2021/11/30 14:10:09
         */
        Time.prototype.formatMs = function (ms, hour12) {
            if (hour12 === void 0) { hour12 = false; }
            // @ts-ignore
            return ms.toLocaleString('zh', { hour12: hour12 });
        };
        /**
         * 计算两个时间戳的时间差。可用来实现倒计时功能。
         * @param {number} endTime  结束时间
         * @param {number} startTime  开始时间
         * @param {boolean} justHour  是否要满24小时加1天
         * @return {TimeDifference}
         */
        Time.prototype.calculateTimeDifference = function (endTime, startTime, justHour) {
            if (startTime === void 0) { startTime = +new Date(); }
            if (justHour === void 0) { justHour = false; }
            var t = endTime - startTime, day, hour, min, sec, over = false;
            if (t <= 0) {
                day = 0;
                hour = 0;
                min = 0;
                sec = 0;
                over = true;
            }
            else {
                if (justHour) {
                    hour = Math.floor(t / 1000 / 60 / 60);
                    min = Math.floor(t / 1000 / 60 % 60);
                    sec = Math.floor(t / 1000 % 60);
                }
                else {
                    day = Math.floor(t / 1000 / 60 / 60 / 24);
                    // hour = Math.floor(Math.floor(t / 1000 / 60 / 60 / 24) * 24 + (t / 1000 / 60 / 60 % 24))
                    // hour = Math.floor(t / 1000 / 60 / 60 / 24) * 24
                    hour = Math.floor(t / 1000 / 60 / 60 % 24);
                    min = Math.floor(t / 1000 / 60 % 60);
                    sec = Math.floor(t / 1000 % 60);
                }
            }
            if (day < 10) {
                day = '0' + day;
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (min < 10) {
                min = '0' + min;
            }
            if (sec < 10) {
                sec = '0' + sec;
            }
            var timeDifference = {
                day: day + "",
                hour: hour + "",
                min: min + "",
                sec: sec + "",
                over: over
            };
            return timeDifference;
        };
        return Time;
    }());
    function Time$1 (targetClass) {
        return mixin(Time, targetClass);
    }

    var Num = /** @class */ (function () {
        function Num() {
        }
        /**
         * 格式化金额格式  152,552.25
         * @param {number | string} num  需要格式的数字
         * @param {number} precision  精确到几位小数
         */
        Num.prototype.formatMoney = function (num, precision) {
            if (precision === void 0) { precision = 2; }
            var _num = +num;
            return _num.toLocaleString('zh', { minimumIntegerDigits: 1, minimumFractionDigits: precision, maximumFractionDigits: 0 });
        };
        /**
         * 将小数转化成百分数
         * @param {number | string} num  需要转化的数字
         * @param {number} precision  精确到几位小数
         */
        Num.prototype.makePercent = function (num, precision) {
            if (precision === void 0) { precision = 2; }
            var _num = +num;
            return _num.toLocaleString('zh', { style: 'percent', maximumFractionDigits: precision });
        };
        /**
         * 两个数精确相加
         * @param {number} num1
         * @param {number} num2
         * @return {number}
         */
        Num.prototype.plus = function (num1, num2) {
            var r1 = 0, r2 = 0, m = 0;
            try {
                r1 = num1.toString().split(".")[1].length;
            }
            catch (e) {
                r1 = 0;
            }
            try {
                r2 = num2.toString().split(".")[1].length;
            }
            catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2));
            return (num1 * m + num2 * m) / m;
        };
        /**
         * 两个数精确相减
         * @param {number} num1
         * @param {number} num2
         * @return {number}
         */
        Num.prototype.minus = function (num1, num2) {
            var r1 = 0, r2 = 0, m = 0;
            try {
                r1 = num1.toString().split(".")[1].length;
            }
            catch (e) {
                r1 = 0;
            }
            try {
                r2 = num2.toString().split(".")[1].length;
            }
            catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2));
            return (num1 * m + num2 * m) / m;
        };
        /**
         * 两个数精确相乘
         * @param {number} num1
         * @param {number} num2
         * @return {number}
         */
        Num.prototype.times = function (num1, num2) {
            var m = 0, s1 = num1.toString(), s2 = num2.toString();
            try {
                m += s1.split(".")[1].length;
            }
            catch (e) { }
            try {
                m += s2.split(".")[1].length;
            }
            catch (e) { }
            return (+s1.replace(".", "")) * (+s2.replace(".", "")) / Math.pow(10, m);
        };
        /**
         * 两个数精确相除
         * @param {number} num1
         * @param {number} num2
         * @return {number}
         */
        Num.prototype.divide = function (num1, num2) {
            var r1 = 0, r2 = 0, m = 0, n = 0;
            try {
                r1 = num1.toString().split(".")[1].length;
            }
            catch (e) {
                r1 = 0;
            }
            try {
                r2 = num2.toString().split(".")[1].length;
            }
            catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2));
            n = (r1 >= r2) ? r1 : r2;
            return +((num1 * m - num2 * m) / m).toFixed(n);
        };
        return Num;
    }());
    function Num$1 (targetClass) {
        return mixin(Num, targetClass);
    }

    var SystemApi = /** @class */ (function () {
        function SystemApi() {
        }
        /**
         * 唤起系统打电话功能
         * @param {string} receiver 打给谁
         */
        SystemApi.prototype.phoneCall = function (receiver) {
            console.log('@系统电话：', receiver);
            new SystemApi().send({ operation: OperationEnum.tel, receiver: receiver });
        };
        /**
         * 唤起系统短信功能
         * @param {string} receiver 发给谁
         */
        SystemApi.prototype.sendMessage = function (receiver) {
            console.log('@系统短信：', receiver);
            new SystemApi().send({ operation: OperationEnum.sms, receiver: receiver });
        };
        /**
         * 唤起系统发邮件功能
         * @param {string} receiver 发给谁
         */
        SystemApi.prototype.sendEmail = function (receiver) {
            console.log('@系统邮件：', receiver);
            new SystemApi().send({ operation: OperationEnum.mailto, receiver: receiver });
        };
        SystemApi.prototype.send = function (options) {
            var aTag = document.createElement('a');
            aTag.href = "".concat(options.operation, ":").concat(options.receiver);
            document.body.appendChild(aTag);
            aTag.click();
            document.body.removeChild(aTag);
        };
        /**
         * 调用系统分享
         * @param {ShareOptions} shareOptions 分享参数
         * @returns {Promise}
         */
        SystemApi.prototype.share = function (shareOptions) {
            if (shareOptions === void 0) { shareOptions = {}; }
            var _navigator = window.navigator;
            var isSupported = _navigator && 'canShare' in _navigator;
            if (isSupported) {
                var granted = true;
                if (shareOptions.files && _navigator.canShare) {
                    granted = _navigator.canShare({ files: shareOptions.files });
                }
                if (granted) {
                    return _navigator.share(shareOptions);
                }
            }
            else {
                console.warn("平台不支持系统分享功能");
                return Promise.reject("平台不支持系统分享功能");
            }
        };
        /**
         * 带图带事件的桌面通知。
         * 参数参考  https://developer.mozilla.org/zh-CN/docs/Web/API/notification
         * @param title
         * @param options
         * @param events
         * @returns
         */
        SystemApi.prototype.notify = function (title, options, events) {
            if (options === void 0) { options = {}; }
            if (!("Notification" in window)) {
                return console.error("This browser does not support desktop notification");
            }
            else if (Notification.permission === "granted") {
                new SystemApi().doNotify(title, options, events);
            }
            else if (Notification.permission !== "denied") {
                Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                        new SystemApi().doNotify(title, options, events);
                    }
                });
            }
        };
        SystemApi.prototype.doNotify = function (title, options, events) {
            if (options === void 0) { options = {}; }
            var notification = new Notification(title, options);
            if (events) {
                for (var event in events) {
                    notification[event] = events[event];
                }
            }
        };
        /**
         * 视频截图
         * @param {HTMLVideoElement} videoEl 传入video元素
         * @returns {string} 图片地址
         */
        SystemApi.prototype.captureVideo = function (videoEl) {
            var canvasEl;
            var dataUrl;
            try {
                var cps = window.getComputedStyle(videoEl);
                var width = +cps.getPropertyValue("width").replace("px", "");
                var height = +cps.getPropertyValue("height").replace("px", "");
                canvasEl = document.createElement("canvas");
                canvasEl.style.cssText = "position:fixed;left:-9999px";
                canvasEl.height = height;
                canvasEl.width = width;
                document.body.appendChild(canvasEl);
                var ctx = canvasEl.getContext("2d");
                ctx.drawImage(videoEl, 0, 0, width, height);
                // const image = canvas.toDataURL("image/png");
                dataUrl = canvasEl.toDataURL();
                document.body.removeChild(canvasEl);
                canvasEl = null;
                return dataUrl;
            }
            finally {
                if (canvasEl) {
                    document.body.removeChild(canvasEl);
                }
                if (dataUrl) {
                    return dataUrl;
                }
            }
        };
        return SystemApi;
    }());
    function SystemApi$1 (targetClass) {
        return mixin(SystemApi, targetClass);
    }

    var Other = /** @class */ (function () {
        function Other() {
        }
        /**
         * 异步加载script标签
         * @param {string} src script标签src
         * @param {()=> void} callback  回调函数 不传回调就会返回一个Promise
         */
        Other.prototype.syncLoadScript = function (src, callback) {
            if (callback) {
                var _script = document.createElement('script');
                _script.src = src;
                document.body.appendChild(_script);
                _script.onload = function () {
                    callback();
                };
            }
            else {
                return new Promise(function (resolve, reject) {
                    var _script = document.createElement('script');
                    _script.src = src;
                    document.body.appendChild(_script);
                    _script.onload = function () {
                        resolve(null);
                    };
                });
            }
        };
        /**
         * 当前设备是否为PC
         * @return {boolean}
         */
        Other.prototype.isPC = function () {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        };
        /**
         * 当前设备是否为IOS
         * @return {boolean}
         */
        Other.prototype.isIOS = function () {
            var u = navigator.userAgent;
            var _ios = false;
            _ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端\
            return _ios;
        };
        /**
         * 当前设备是否为Android
         * @return {boolean}
         */
        Other.prototype.isAndroid = function () {
            var u = navigator.userAgent;
            var _android = false;
            _android = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            return _android;
        };
        /**
         * 通过url下载文件
         * @param {string} url  下载链接
         * @param {string} fileName   生成的文件名
         */
        Other.prototype.downloadByUrl = function (url, fileName) {
            if (fileName === void 0) { fileName = 'download'; }
            var link = document.createElement('a');
            link.setAttribute('href', url); //设置下载文件的url地址
            link.setAttribute('download', fileName); //用于设置下载文件的文件名
            link.click();
            document.body.removeChild(link);
        };
        /**
         * 下载流文件
         * @param {Blob} blob   文件流
         * @param {string} fileName   文件名
         */
        Other.prototype.downloadByBob = function (blob, fileName) {
            if (fileName === void 0) { fileName = "download"; }
            var _blob = new Blob([blob], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
            });
            var dlink = document.createElement('a');
            var href = window.URL.createObjectURL(_blob); //创建下载的链接
            dlink.href = href;
            dlink.download = fileName; // 下载后文件名
            document.body.appendChild(dlink);
            dlink.click(); //点击下载
            document.body.removeChild(dlink); //下载完成移除a标签元素
            window.URL.revokeObjectURL(href); //// 释放URL对象
        };
        /**
         * 将内容复制到剪切板
         * @param {string} str
         */
        Other.prototype.copyToClipboard = function (str) {
            var el = document.createElement('textarea');
            el.value = str;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            if (selected) {
                document.getSelection().removeAllRanges();
                document.getSelection().addRange(selected);
            }
        };
        /**
         * 判断某个元素是否含有某个class
         * @param {HTMLElement} el  元素
         * @param {string} className  类名
         */
        Other.prototype.hasClass = function (el, className) {
            var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
            return reg.test(el.className);
        };
        /**
         * 获取当前元素的滚动条滚动位置
         * @param el  元素
         * @returns {Object<{x: number, y: number}>}  x,y轴滚动位置
         */
        Other.prototype.getScrollPosition = function (el) {
            return {
                x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
                y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
            };
        };
        /**
         * 监听用户是否离开当前窗口（切换后台）
         * @param {()=> void} onHide  //隐藏
         * @param {()=> void} onShow  //显示
         */
        Other.prototype.watchVisibility = function (onHide, onShow) {
            document.addEventListener("visibilitychange", function () {
                if (document.hidden) {
                    onHide && onHide();
                }
                else {
                    onShow && onShow();
                }
            });
            window.onbeforeunload = function () {
                document.removeEventListener("visibilitychange", function () {
                    if (document.hidden) {
                        onHide && onHide();
                    }
                    else {
                        onShow && onShow();
                    }
                });
            };
        };
        /**
         *  禁止右键、选择、复制
         */
        Other.prototype.disableWindowEvent = function () {
            ['contextmenu', 'selectstart', 'copy'].forEach(function (ev) {
                document.addEventListener(ev, function (event) {
                    return (event.returnValue = false);
                });
            });
        };
        return Other;
    }());
    function Other$1 (targetClass) {
        return mixin(Other, targetClass);
    }

    var Observer = /** @class */ (function () {
        function Observer() {
        }
        /**
         * 发布/ 触发
         * @param eventName
         * @param payload
         */
        Observer.emit = function (eventName, payload) {
            var callbackList = Observer.Events[eventName] || [];
            // 如果用js写，遍历的时候要做一下判断是否是函数，ts 用类型约束，在调用或者编译阶段会检测是否合法
            // callbackList.map(fn=>{
            //     if(typeof fn==="function") fn.apply(this,args)
            // })
            callbackList.forEach(function (fn) { return fn(payload); });
        };
        /**
         * 订阅/监听
         * @param eventName
         * @param callback
         */
        Observer.on = function (eventName, callback) {
            // if(!eventName||typeof eventName !=="string") return  ；// 因为用了ts 写，所以这句不用写了，如果是js写，建议加这判断
            var callbackList = Observer.Events[eventName] || [];
            callback && callbackList.push(callback);
            Observer.Events[eventName] = callbackList;
        };
        /**
         * 只订阅一次/监听一次：
         * 思路：
         * 1. 重新包装一个回调函数(有名的)，进行注册订阅/监听,
         * 2. 包装函数里面直接调用 once方法的第二个参数回调函数，然后调用off方法 卸载该包装函数
         * @param eventName
         * @param callback
         */
        Observer.once = function (eventName, callback) {
            // if(!eventName||typeof eventName !=="string") return ；
            var decor = function (payload) {
                callback && callback(payload);
                Observer.off(eventName, decor);
            };
            Observer.on(eventName, decor);
        };
        /**
         * 卸载/取消 某一个回调监听(不是取消eventName的所有回调监听),主要配合once一起,实例单独调用,无意义
         * @param eventName
         * @param callback
         */
        Observer.off = function (eventName, callback) {
            var callbackList = Observer.Events[eventName] || [];
            var resCallbacks = callbackList.filter(function (fn) { return fn !== callback; });
            Observer.Events[eventName] = resCallbacks;
        };
        /**
         * 卸载/取消 指定eventName 的所有订阅/监听
         * @param eventName
         * @param callback
         */
        Observer.remove = function (eventName, callback) {
            Observer.Events[eventName] = [];
            callback && callback();
        };
        Observer.Events = {}; //约束示例:{"eventName":[function(){},function(){},.....],......}
        return Observer;
    }());

    /**
     * @name:工具库
     * @author: 切图仔
     * @time: 2021-11-30 14:26:47
     */
    var Toolkits = /** @class */ (function () {
        function Toolkits() {
        }
        Toolkits_1 = Toolkits;
        Toolkits.useObserver = function () {
            if (!Toolkits_1.observer) {
                Toolkits_1.observer = Observer;
            }
            return {
                on: Toolkits_1.observer.on,
                off: Toolkits_1.observer.off,
                once: Toolkits_1.observer.once,
                emit: Toolkits_1.observer.emit,
                remove: Toolkits_1.observer.remove
            };
        };
        var Toolkits_1;
        Toolkits.utilsName = pkg.name;
        Toolkits.version = pkg.version;
        Toolkits = Toolkits_1 = __decorate([
            Other$1,
            SystemApi$1,
            Num$1,
            Time$1,
            Regexp$1,
            Character$1,
            Random$1,
            Dataset$1
        ], Toolkits);
        return Toolkits;
    }());

    return Toolkits;

})));
