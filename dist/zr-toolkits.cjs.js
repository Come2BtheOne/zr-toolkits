/**
 * zr-toolkits v1.0.0
 * (c) 2021-2021 Come2BtheOne https://github.com/Come2BtheOne/zr-toolkits
 * Licensed under MIT
 * Released on: nov 30, 2021
 */

'use strict';

var name = "zr-toolkits";
var version = "1.0.0";
var description = "切图仔巨献";
var main = "dist/zr-toolkits.min.js";
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
var author = "weijhfly";
var license = "MIT";
var devDependencies = {
	"@babel/core": "^7.6.4",
	"@babel/preset-env": "^7.6.3",
	"cross-env": "^5.2.0",
	"html-webpack-plugin": "^3.2.0",
	jest: "^24.9.0",
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
	"storage-util": "^1.1.4"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	keywords: keywords,
	repository: repository,
	author: author,
	license: license,
	devDependencies: devDependencies,
	dependencies: dependencies
};

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

var Tks = /** @class */ (function () {
    function Tks() {
    }
    /**
     * 判断一个字符串是否为空
     * @param {value|undefined|null} value
     * @return {boolean}
     */
    Tks.isEmptyString = function (value) {
        return (value === undefined || value === null || value === "");
    };
    /**
     * 判断一个值是否为对象
     * @param value
     * @return {boolean}
     */
    Tks.isObject = function (value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    };
    /**
     * 判断一个对象是否为空
     * @param obj
     * @return {boolean}
     */
    Tks.isEmptyObject = function (obj) {
        if (this.isObject(obj)) {
            return Object.keys(obj).length === 0;
        }
        else {
            throw ("[".concat(this.toolkitsName, ".isEmptyObject()]\n\u5165\u53C2\u975E\u5BF9\u8C61\u7C7B\u578B"));
        }
    };
    /**
     * 获取url上的参数
     * @param {string} paramsKey  需要获取的参数的键值
     * @param {string} url  链接
     *
     */
    Tks.getUrlParamsValue = function (paramsKey, url) {
        if (URL) {
            var urlSP = new URL(url);
            return urlSP.searchParams.get(paramsKey);
        }
    };
    /**
     * 去除字符串前后空格
     * @param {string} str  字符串
     * @param {TrimType} trimType  切割类型
     * @return {string}
     */
    Tks.trim = function (str, trimType) {
        if (trimType === void 0) { trimType = 2; }
        if (trimType !== undefined && TrimType.hasOwnProperty(trimType)) {
            return str.replace(TrimReg[TrimType[trimType]], "");
        }
        else {
            throw ("[".concat(this.toolkitsName, ".trim()]\n\u5165\u53C2[trimType]\u9519\u8BEF"));
        }
    };
    /**
     * 大小写转化
     * @param {string} str
     * @param {CaseType} caseType
     * @return {string}
     */
    Tks.changeCase = function (str, caseType) {
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
                throw ("[".concat(this.toolkitsName, ".changeCase()]\n\u5165\u53C2[caseType]\u9519\u8BEF"));
        }
    };
    /**
     * 校验邮箱格式
     * @param {string} str
     * @return {boolean}
     */
    Tks.isEmail = function (str) {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str);
    };
    /**
     * 校验手机号码格式
     * @param {string} str
     * @return {boolean}
     */
    Tks.isMobilePhone = function (str) {
        return /^1[0-9]{10}$/.test(str);
    };
    /**
     * 校验座机号码格式
     * @param {string} str
     * @return {boolean}
     */
    Tks.isTelephone = function (str) {
        return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(str);
    };
    /**
     * 正则校验合集
     * @param {string} str  要校验的字符串
     * @param {CheckStringKey} key  校验类型
     * @return {boolean}
     */
    Tks.regCheckString = function (str, key) {
        if (key !== undefined && CheckStringReg.hasOwnProperty(key)) {
            for (var k in CheckStringReg) {
                if (k === key) {
                    return CheckStringReg[k].test(str);
                }
            }
        }
        else {
            throw ("[".concat(this.toolkitsName, ".regCheckString()]\n\u5165\u53C2[key]\u9519\u8BEF"));
        }
    };
    /**
     * 严格校验身份证
     * @param {string} sId  字符串类型的身份证号码
     * @return {boolean}
     */
    Tks.strictCheckIDCard = function (sId) {
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
    /**
     * 格式化金额格式  152,552.25
     * @param {number} num  需要格式的数字
     * @param {number} precision  精确到几位小数
     */
    Tks.formatMoney = function (num, precision) {
        if (precision === void 0) { precision = 2; }
        var _num = +num;
        return _num.toLocaleString('zh', { minimumIntegerDigits: 1, minimumFractionDigits: precision, maximumFractionDigits: 0 });
    };
    /**
     * 将小数转化成百分数
     * @param {number} num  需要转化=的数字
     * @param {number} precision  精确到几位小数
     */
    Tks.makePercent = function (num, precision) {
        if (precision === void 0) { precision = 2; }
        return num.toLocaleString('zh', { style: 'percent', maximumFractionDigits: precision });
    };
    /**
     * 两个数精确相加
     * @param {number} num1
     * @param {number} num2
     * @return {number}
     */
    Tks.plus = function (num1, num2) {
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
    Tks.minus = function (num1, num2) {
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
    Tks.times = function (num1, num2) {
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
    Tks.divide = function (num1, num2) {
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
    /**
     * 将时间戳转换成  2021/11/30 14:10:09
     * @param {number} ms   时间戳
     * @param {boolean} hour12    是否12小时制
     * @return {string}   2021/11/30 14:10:09
     */
    Tks.formatMs = function (ms, hour12) {
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
    Tks.calculateTimeDifference = function (endTime, startTime, justHour) {
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
        return {
            day: day,
            hour: hour,
            min: min,
            sec: sec,
            over: over
        };
    };
    /**
     * 异步加载Script标签
     * @param {string} src Script标签src
     * @param {()=> void} callback  回调函数 不传回调就会返回一个Promise
     */
    Tks.syncLoadScript = function (src, callback) {
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
    Tks.isPC = function () {
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
    Tks.isIOS = function () {
        var u = navigator.userAgent;
        var _ios = false;
        _ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端\
        return _ios;
    };
    /**
     * 当前设备是否为Android
     * @return {boolean}
     */
    Tks.isAndroid = function () {
        var u = navigator.userAgent;
        var _android = false;
        _android = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        return _android;
    };
    /**
     * 通过url下载文件
     * @param {string} url
     * @param {string} fileName
     */
    Tks.downloadByUrl = function (url, fileName) {
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
    Tks.downloadByBob = function (blob, fileName) {
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
    Tks.copyToClipboard = function (str) {
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
    Tks.hasClass = function (el, className) {
        var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
        return reg.test(el.className);
    };
    /**
     * 洗牌算法随机
     * @param arr
     */
    Tks.shuffleRandom = function (arr) {
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
    Tks.creatRandom = function (min, max, exact) {
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
    Tks.toolkitsName = pkg.name;
    Tks.version = pkg.version;
    return Tks;
}());

module.exports = Tks;
