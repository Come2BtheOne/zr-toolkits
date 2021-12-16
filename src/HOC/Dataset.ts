import mixin from '../utils/mixin';
import pkg from '../../package.json';

class Dataset {

    /**
     * 判断一个字符串是否为空
     * @param {string|undefined|null} value 需要判断的值
     * @return {boolean}
     */
    public isEmptyString(value: string | undefined | null): boolean {
        return (value === undefined || value === null || value === "");
    }


    /**
     * 判断一个值是否为对象
     * @param {any} value   需要判断的值
     * @return {boolean}    判断结果
     */
    public isObject(value: any): boolean {
        return Object.prototype.toString.call(value) === '[object Object]';
    }


    /**
     * 判断一个对象是否为空
     * @param {Object} obj 需要判断的对象
     * @return {boolean}  判断结果
     */
    public isEmptyObject(obj: Object): boolean {
        if (new Dataset().isObject(obj)) {
            return Object.keys(obj).length === 0;
        } else {
            throw (`[${pkg.name}.isEmptyObject()]\n入参非对象类型`);
        }
    }


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
    public deWeightThree<T>(arr: Array<T>, key: string): Array<T> {
        let obj: T | {} = {};
        let _arr: Array<T> = arr.reduce(function (a, b) {
            obj[b[key]] ? '' : obj[b[key]] = true && a.push(b);
            return a;
        }, [])
        return _arr;
    }


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
    public searchValueInTree(arr: Array<any>, keyName: string, keyValue: any, multilevelName: string = 'children'): boolean {
        for (let o of arr || []) {
            if (o[keyName] === keyValue) return o
            const o_ = new Dataset().searchValueInTree(o[multilevelName] || [], keyName, keyValue, multilevelName)
            if (o_) return o_
        }
    }
}

export default function (targetClass): any {
    return mixin(Dataset, targetClass);
}