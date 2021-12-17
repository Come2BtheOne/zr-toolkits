import { RandomLetter } from '../config';
import { RandomType } from '../types';
import mixin from '../utils/mixin';
import pkg from '../../package.json';

class Random {

    /**
     * 基于URL生成UUID
     * @returns {string} cd205467-0120-47b0-9444-894736d873c7
     */
    public genUUID(): string {
        const url = URL.createObjectURL(new Blob([]));
        // const uuid = url.split("/").pop();
        const uuid = url.substring(url.lastIndexOf('/') + 1);
        URL.revokeObjectURL(url);
        return uuid;
    }


    /**
     * 基于日期对象和random生成随机ID
     * @returns {string}  1627635706897_652
     */
    public genRandomID(): string {
        return new Date().getTime() + '_' + (Math.random() * 10000).toFixed(0);
    }


    /**
   * 洗牌算法随机
   * @param {Array} arr  需要打乱的数组
   * @returns {Array}
   */
    public shuffleRandom<T>(arr: Array<T>): Array<T> {
        let result: Array<any> = [], random;
        while (arr.length > 0) {
            random = Math.floor(Math.random() * arr.length);
            result.push(arr[random])
            arr.splice(random, 1)
        }
        return result;
    }


    /**
     * 在一个范围内生成随机数
     * @param {number} min
     * @param {number} max
     * @param {number} exact  精确到几位小数
     * @returns {number}
     */
    public creatRandom(min: number, max: number, exact: number = 0): number {
        if (arguments.length === 0) {
            return Math.random();
        } else if (arguments.length === 1) {
            max = min;
            min = 0;
        }
        const range = min + (Math.random() * (max - min));
        return +(exact === void (0) ? Math.round(range) : range.toFixed(exact));
    }

    /**
     * 生成随机数字+英文字母的字符串
     * @param {number} min   必填。生成几位字符，
     * @param {number} max   非必填。默认生成min位
     * @param {RandomType} randomType  1:A-Z、a-z、0-9  2:A-Z、a-z  3:0-9  4:A-Z   5:a-z
     * @returns {string}
     */
    public randomRange(min: number, max?: number, randomType: RandomType = 1): string {
        let returnStr = "",
            range = (max ? Math.round(Math.random() * (max - min)) + min : min);
        if (randomType !== undefined && RandomType.hasOwnProperty(randomType)) {
            let charStr = RandomLetter[RandomType[randomType]];
            for (let i = 0; i < range; i++) {
                let index = Math.round(Math.random() * (charStr.length - 1));
                returnStr += charStr.substring(index, index + 1);
            }
            return returnStr;
        } else {
            throw (`[${pkg.name}.randomRange()]\n入参[randomType]错误`);
        }
    }

}

export default function (targetClass): any {
    return mixin(Random, targetClass);
}