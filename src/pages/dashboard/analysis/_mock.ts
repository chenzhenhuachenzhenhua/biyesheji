import moment from 'moment';
import type { AnalysisData, RadarData, VisitDataType } from './data.d';

// mock data
const visitData: VisitDataType[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [

  {
    x: '采矿业',
    y: 81.5,
  },
  {
    x: '公共管理、社会保障和社会组织',
    y: 65.8,
  },
  {
    x: '制造业',
    y: 56.4,
  },
  {
    x: '教育',
    y: 55.2,
  },
  {
    x: '金融业',
    y: 30.0,
  },
  {
    x: '建筑业',
    y: 29.0,
  },
  {
    x: '卫生和社会工作',
    y: 24.7,
  },
  {
    x: '交通运输、仓储和邮政业',
    y: 21.1,
  },
  {
    x: '电力、热力、燃气及水生产和供应业',
    y: 15.8,
  },
  {
    x: '批发和零售业',
    y: 13.6,
  },
  {
    x: '租赁和商务服务业',
    y: 11.8,
  },
  {
    x: '科学研究和技术服务业',
    y: 7.7,
  },
];
// for (let i = 0; i < 12; i += 1) {
//   salesData.push({
//     x: `${i + 1}月`,
//     y: Math.floor(Math.random() * 1000) + 200,
//   });
// }
// const searchData = [];
// for (let i = 0; i < 50; i += 1) {
//   searchData.push({
//     index: i + 1,
//     keyword: `搜索关键词-${i}`,
//     count: Math.floor(Math.random() * 1000),
//     range: Math.floor(Math.random() * 100),
//     status: Math.floor((Math.random() * 10) % 2),
//   });
// }
const searchData = [];
// for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: 1,
    keyword: `太原市`,
    count: 80060,
    range: 1.47,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 2,
    keyword: `大同`,
    count: 67181,
    range: 7.79,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 3,
    keyword: `吕梁市`,
    count: 66739,
    range: 2.69,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 4,
    keyword: `晋城市`,
    count: 66277,
    range: 2.24,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 5,
    keyword: `朔州市`,
    count: 66205,
    range: 4.80,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 6,
    keyword: `晋中市`,
    count: 65199,
    range: 2.54,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 7,
    keyword: `长治市`,
    count: 64100,
    range: 7.03,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 8,
    keyword: `阳泉市`,
    count: 63788,
    range: 5.05,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 9,
    keyword: `忻州市`,
    count: 63496,
    range: 14.05,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 10,
    keyword: `临汾市`,
    count: 62279,
    range: 2.05,
    // status: Math.floor((Math.random() * 10) % 2),
  });
  searchData.push({
    index: 11,
    keyword: `运城市`,
    count: 58118,
    range: 2.28,
    status: "down",
  });
const salesTypeData = [
  {
    x: '企业',
    y: 2816780,
  },
  {
    x: '事业',
    y: 1023927,
  },
  {
    x: '机关',
    y: 498591,
  },
  {
    x: '民间非营利组织',
    y: 66689,
  },
  {
    x: '其他',
    y: 4702,
  },
];

const salesTypeDataOnline = [
  {
    x: '企业',
    y: 2734032,
  },
  {
    x: '事业',
    y: 1039799,
  },
  {
    x: '机关',
    y: 471324,
  },
  {
    x: '民间非营利组织',
    y: 6391,
  },
  {
    x: '其他',
    y: 6701,
  },
];

const salesTypeDataOffline = [
  {
    x: '企业',
    y: 16389870,
  },
  {
    x: '事业',
    y: 6303995,
  },
  {
    x: '机关',
    y: 2849305,
  },
];

const offlineData = [];
// for (let i = 0; i < 10; i += 1) {
//   offlineData.push({
//     name: `Stores ${i}`,
//     cvr: Math.ceil(Math.random() * 9) / 10,
//   });
// }
for (let i = 0; i < 10; i += 1) {
  // offlineData.push({
  //   name: `Stores ${i}`,
  //   cvr: Math.ceil(Math.random() * 5) / 10,
  // });
  offlineData.push({
    name: `太原市`,
    cvr: 0.230,
  });
  offlineData.push({
    name: `大同市`,
    cvr: 0.087,
  });
  offlineData.push({
    name: `阳泉市`,
    cvr: 0.049,
  });
  offlineData.push({
    name: `长治市`,
    cvr: 0.104,
  });
  offlineData.push({
    name: `晋城市`,
    cvr: 0.084,
  });
  offlineData.push({
    name: `朔州市`,
    cvr: 0.043,
  });
  offlineData.push({
    name: `晋中市`,
    cvr: 0.085,
  });
  offlineData.push({
    name: `运城市`,
    cvr: 0.082,
  });
  offlineData.push({
    name: `忻州市`,
    cvr: 0.054,
  });
  offlineData.push({
    name: `临汾市`,
    cvr: 0.079,
  });
  offlineData.push({
    name: `阳泉市`,
    cvr: 0.079,
  });
}

const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: RadarData[] = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

const getFakeChartData: AnalysisData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};

export default {
  'GET  /api/fake_chart_data': getFakeChartData,
};
