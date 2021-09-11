/**
 * 获取角色数据
 * @returns {{upthreestar: *, 注释: string, threestar: *, twostar: *, onestar: *}}
 * @constructor
 */

// 读取角色json
import a from '../data/pcr.json';

/**
 * 记录出货情况
 * @type {{one: number, two: number, three: number}}
 */
const Record = {
  one: 0,
  two: 0,
  three: 0,
};

/**
 * 随机角色图片方法
 * @type {{a: {upthreestar: *, 注释: string, threestar: *, twostar: *, onestar: *},
 * threeSelectImg: (function(): *), twoSelectImg: (function(): *),
 * oneSelectImg: (function(): *), randomNum: (function(): number)}}
 */
const rand = {
  // 读取pcr角色json
  a,
  // 随机数生成方法
  randomNum() {
    // [0.100]的随机数
    const x = Math.random() * (100 + 1);
    return x;
  },
  // 三星角色图片数组随机挑选
  threeSelectImg() {
    // [0.19]的随机整数
    const x = Math.floor(Math.random() * (19 + 1));
    const b = this.a.threestar[x].url;
    Record.three += 1;
    return b;
  },
  // 二星角色图片数组随机挑选
  twoSelectImg() {
    // [0.20]的随机整数
    const x = Math.floor(Math.random() * (20 + 1));
    const b = this.a.twostar[x].url;
    Record.two += 1;
    return b;
  },
  // 一星角色图片数组随机挑选
  oneSelectImg() {
    // [0.18]的随机整数
    const x = Math.floor(Math.random() * (18 + 1));
    const b = this.a.onestar[x].url;
    Record.one += 1;
    localStorage.setItem('one', String(Record.one));
    return b;
  },
};

/**
 * 招募js对象
 * @type {{Start: Recruit.Start, LastStart: Recruit.LastStart, lastoneRecord: (function(): string)}}
 */
const Recruit = {
  // 概率选择
  Probability: 2.5,
  // 前9发概率
  Start() {
    const x = rand.randomNum();
    // 三星角色概率为2.5%
    if (x <= Recruit.Probability) {
      console.log('3星，当前概率为');
      console.log(Recruit.Probability);
      return rand.threeSelectImg();
      // 二星角色概率为18%
    } if (x <= 18 && x > Recruit.Probability) {
      console.log('2星');
      return rand.twoSelectImg();
    }
    console.log('1星');
    Recruit.oneRecord += 1;
    return rand.oneSelectImg();
  },
  // 最后第10发的概率
  LastStart() {
    const x = rand.randomNum();
    if (x <= Recruit.Probability) {
      console.log('3星');
      return rand.threeSelectImg();
    }
    console.log('2星');
    return rand.twoSelectImg();
  },
  lastoneRecord() {
    const b = Recruit.oneRecord;
    localStorage.setItem('one', String(b));
    return localStorage.getItem('one');
  },
};

/**
 * 刷新方法
 * @constructor
 */
function Refresh() {
  Record.one = 0;
  Record.two = 0;
  Record.three = 0;
}

// 模块抛出
export {
  Recruit,
  rand,
  Record,
  Refresh,
};
