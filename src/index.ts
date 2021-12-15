/**
 * @name:工具库
 * @author: 切图仔
 * @time: 2021-11-30 14:26:47
 */

import pkg from '../package.json';

import Dataset from './HOC/Dataset';
import Random from './HOC/Random';
import Character from './HOC/Character';
import Regexp from './HOC/Regexp';
import Time from './HOC/Time';
import Num from './HOC/Num';
import SystemApi from './HOC/SystemApi';
import Other from './HOC/Other';
import Observer from './HOC/Observer';

@Other
@SystemApi
@Num
@Time
@Regexp
@Character
@Random
@Dataset
export default class Toolkits {
  static readonly utilsName: string = pkg.name;
  static readonly version: string = pkg.version;

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