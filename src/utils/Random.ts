export default function Random(targetClass): any {
    return class Random extends targetClass {

        /**
         * 基于URL生成UUID
         * @returns {string} cd205467-0120-47b0-9444-894736d873c7
         */
        public static genUUID(): string {
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
        public static genRandomID(): string {
            return new Date().getTime() + '_' + (Math.random() * 10000).toFixed(0);
        }


        /**
       * 洗牌算法随机
       * @param {Array} arr  需要打乱的数组
       */
        public static shuffleRandom<T>(arr: Array<T>): Array<T> {
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
         */
        public static creatRandom(min: number, max: number, exact: number = 0): number {
            if (arguments.length === 0) {
                return Math.random();
            } else if (arguments.length === 1) {
                max = min;
                min = 0;
            }
            const range = min + (Math.random() * (max - min));
            return +(exact === void (0) ? Math.round(range) : range.toFixed(exact));
        }

    }
}