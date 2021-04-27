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

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
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
  6701 
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
    name: `任嘉敏1`,
    cvr: 0.3,
  });
  offlineData.push({
    name: `任嘉敏2`,
    cvr: 0.4,
  });
  offlineData.push({
    name: `任嘉敏3`,
    cvr: 0.1,
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
