import tks from '../dist/zr-toolkits';
const {
    isEmptyString,
    isObject
} = tks as any;

describe("Dataset class", () => {
    test("判断一个字符串是否为空", () => {
        expect(isEmptyString("link")).toEqual(false);
        expect(isEmptyString(null)).toEqual(true);
        expect(isEmptyString(undefined)).toEqual(true);
        expect(isEmptyString(25)).toEqual(false);
    });

    test("判断一个值是否为对象", () => {
        expect(isObject("aaa")).toEqual(false);
        expect(isObject(2525)).toEqual(false);
        expect(isObject(null)).toEqual(false);
        expect(isObject(undefined)).toEqual(false);
        expect(isObject([])).toEqual(false);
        expect(isObject({})).toEqual(true);
        expect(isObject(()=> {})).toEqual(false);
    })
});