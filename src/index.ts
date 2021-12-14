/**
 * @name:工具库
 * @author: 切图仔
 * @time: 2021-11-30 14:26:47
 */

import pkg from '../package.json';

import Dataset from './utils/Dataset';
import Random from './utils/Random';
import Character from './utils/Character';
import Regexp from './utils/Regexp';
import Time from './utils/Time';
import Num from './utils/Num';
import SystemApi from './utils/SystemApi';
import Other from './utils/Other';
import Observer from './utils/Observer';

@Other
@SystemApi
@Num
@Time
@Regexp
@Character
@Random
@Dataset
export default class Toolkits {
  public static readonly toolkitsName: string = pkg.name;
  public static readonly version: string = pkg.version;

  static observer: any;
  static useObserver() {
    if (!Toolkits.observer) {
      Toolkits.observer = Observer;
    }
    return {
      on: Toolkits.observer.on,
      off: Toolkits.observer.off,
      once: Toolkits.observer.once,
      emit: Toolkits.observer.emit,
      remove: Toolkits.observer.remove
    }
  }
}