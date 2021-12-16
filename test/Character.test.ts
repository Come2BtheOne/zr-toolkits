import tks from '../dist/zr-toolkits';
import pkg from '../package.json';
const {
    getUrlParamsValue,
    trim,
    changeCase
} = tks as any;

describe("Character class", () => {
    test("获取url字符串上的参数", () => {
        expect(getUrlParamsValue("https://www.jestjs.cn/docs/using-matchers?name=XXX&age=24")).toEqual({name: "XXX", age: "24"});
        expect(getUrlParamsValue("https://www.jestjs.cn/docs/using-matchers?name=XXX&age=24", "name")).toBe("XXX");
        expect(getUrlParamsValue("https://www.jestjs.cn/docs/using-matchers?name=XXX&age=24", "style")).toBeNull();
    });

    test("去除字符串前后空格", () => {
        const str: string = " ASG ZJ G ";
        expect(trim(str, 1)).toBe("ASGZJG");
        expect(trim(str, 2)).toBe("ASG ZJ G");
        expect(trim(str, 3)).toBe("ASG ZJ G ");
        expect(trim(str, 4)).toBe(" ASG ZJ G");
    });

    test("大小写转化", () => {
        const str: string = "aaaBBBccc";
        expect(changeCase(str, 1)).toBe("Aaabbbccc");
        expect(changeCase(str, 2)).toBe("aAABBBCCC");
        expect(changeCase(str, 3)).toBe("AAAbbbCCC");
        expect(changeCase(str, 4)).toBe("AAABBBCCC");
        expect(changeCase(str, 5)).toBe("aaabbbccc");
    });
});