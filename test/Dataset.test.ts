import tks from '../dist/zr-toolkits';
import pkg from '../package.json';
const {
    isEmptyString,
    isObject,
    isEmptyObject,
    deWeightThree,
    searchValueInTree
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

    test("对数组对象去重", () => {
        const input = [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'b',id: 2}, {name: 'c',id: 3}];
        const output1 = [{name: 'a',id: 1}, {name: 'b',id: 2}, {name: 'c',id: 3}];
        const output2 = [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'c',id: 3}];
        expect(deWeightThree(input, "name")).toEqual(output1);
        expect(deWeightThree(input, "id")).toEqual(output2);
    });

    
    test("递归查询树结构的是否存在某一个值", () => {
        const Arr = [
            {
                id: 123,
                children: [
                    {
                        id: 789,
                        children: []
                    }
                ]
            },
            {
                id: 456,
                children: [
                    {
                        id: 874,
                        children: []
                    }
                ]
            },
        ]
        expect(searchValueInTree(Arr, "id", 789, "children")).toBeTruthy();
        expect(searchValueInTree(Arr, "id", 99999, "children")).toBeFalsy();
    });
});