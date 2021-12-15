export default function (CurrClass: any, TargetClass: any): any {
    const ctx: any = new CurrClass();
    const prototype = Object.getPrototypeOf(ctx);
    // console.log(Object.keys(ctx));
    // console.log(Reflect.ownKeys(prototype));
    // console.log(Object.getOwnPropertyDescriptor(prototype, "testFn"));

    Reflect.ownKeys(prototype).forEach((keys: string | symbol) => {
        TargetClass[keys] = ctx[keys];
    })
    
    return TargetClass
}