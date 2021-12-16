import tks from '../dist/zr-toolkits';
import pkg from '../package.json';
const {
    isEmptyString,
    isObject,
    isEmptyObject
} = tks as any;

describe("Dataset class", () => {
    test("判断一个字符串是否为空", () => {
        expect(isEmptyString("link")).toBeFalsy();
        expect(isEmptyString(null)).toBeTruthy();
        expect(isEmptyString(undefined)).toBeTruthy();
        expect(isEmptyString(25)).toBeFalsy();
    });

    test("判断一个值是否为对象", () => {
        expect(isObject("aaa")).toBeFalsy();
        expect(isObject(2525)).toBeFalsy();
        expect(isObject(null)).toBeFalsy();
        expect(isObject(undefined)).toBeFalsy();
        expect(isObject([])).toBeFalsy();
        expect(isObject({})).toBeTruthy();
        expect(isObject(()=> {})).toBeFalsy();
    });

    test("判断一个对象是否为空", () => {
        expect(() => isEmptyObject("aaa")).toThrow(`[${pkg.name}.isEmptyObject()]\n入参非对象类型`);
        expect(isEmptyObject({})).toBeTruthy();
        expect(isEmptyObject({aa: 252})).toBeFalsy();
    });
});