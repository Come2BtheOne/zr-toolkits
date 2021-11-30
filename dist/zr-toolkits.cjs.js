/**
 * js-toolkits v1.0.0
 * (c) 2021-2021 Come2BtheOne https://github.com/Come2BtheOne/zr-toolkits
 * Licensed under MIT
 * Released on: nov 30, 2021
 */

'use strict';

var tks = /** @class */ (function () {
    function tks() {
    }
    /**
     * 判断一个字符串是否为空
     * @param {value|undefined|null} value
     * @return {boolean}
     */
    tks.isEmptyString = function (value) {
        return (value === undefined || value === null || value === "");
    };
    /**
     * 判断一个值是否为对象
     * @param value
     * @return {boolean}
     */
    tks.isObject = function (value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    };
    /**
     * 判断一个对象是否为空
     * @param obj
     * @return {boolean}
     */
    tks.isEmptyObject = function (obj) {
        if (this.isObject(obj)) {
            return Object.keys(obj).length === 0;
        }
        else {
            throw ("[".concat(this.toolkitsName, ".").concat(arguments.callee.name, "()]\u5165\u53C2\u975E\u5BF9\u8C61\u7C7B\u578B"));
        }
    };
    /**
     * 获取url上的参数
     * @param {string} paramsKey  //需要获取的参数的键值
     * @param {string} url  //链接
     *
     */
    tks.getUrlParamsValue = function (paramsKey, url) {
        if (URL) {
            var urlSP = new URL(url);
            return urlSP.searchParams.get(paramsKey);
        }
    };
    /**
     * 格式化金额格式  152,552.25
     * @param {number} num  //需要格式的数字
     * @param {number} precision  //保留几位小数
     */
    tks.formatMoney = function (num, precision) {
        if (precision === void 0) { precision = 2; }
        var _num = +num;
        return _num.toLocaleString('zh', { minimumIntegerDigits: 1, minimumFractionDigits: precision, maximumFractionDigits: 0 });
    };
    /**
     * 将时间戳转换成  2021/11/30 14:10:09
     * @param {number} ms //时间戳
     * @param {boolean} hour12  //是否12小时制
     */
    tks.formatMs = function (ms, hour12) {
        if (hour12 === void 0) { hour12 = false; }
        // @ts-ignore
        ms.toLocaleString('zh', { hour12: hour12 });
    };
    tks.toolkitsName = "zr-toolkits";
    return tks;
}());

module.exports = tks;
