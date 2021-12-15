import { TrimType, CaseType } from '../types';
import { TrimReg } from '../config';
import mixin from '../utils/mixin';
import pkg from '../../package.json';

class Character {
    /**
     * 获取url字符串上的参数
     * @param {string} url  链接
     * @param {string} key  需要获取的参数的键名
     */
    public getUrlParamsValue(url: string, key: string): string | null {
        if (URL) {
            const urlSP = new URL(url);
            return urlSP.searchParams.get(key);
        }
    }

    /**
     * 去除字符串前后空格
     * @param {string} str  字符串
     * @param {TrimType} trimType  切割类型
     * @return {string}
     */
    public trim(str: string, trimType: TrimType = 2): string {
        if (trimType !== undefined && TrimType.hasOwnProperty(trimType)) {
            return str.replace(TrimReg[TrimType[trimType]], "");
        } else {
            throw (`[${pkg.name}.trim()]\n入参[trimType]错误`);
        }
    }

    /**
     * 大小写转化
     * @param {string} str  字符串
     * @param {CaseType} caseType  转换类型
     * @return {string}
     */
    public changeCase(str: string, caseType: CaseType = 3): string {
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
                    } else {
                        return word.toLowerCase();
                    }
                }).join('');
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                throw (`[${pkg.name}.changeCase()]\n入参[caseType]错误`);
        }
    }
}

export default function (targetClass): any {
    return mixin(Character, targetClass);
}