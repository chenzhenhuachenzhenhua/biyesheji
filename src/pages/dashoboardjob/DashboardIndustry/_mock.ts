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
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '食用酒水',
    y: 188,
  },
  {
    x: '个护健康',
    y: 344,
  },
  {
    x: '服饰箱包',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
// const offlineChartData = [];
// for (let i = 0; i < 20; i += 1) {
//   offlineChartData.push({
//     x: new Date().getTime() + 1000 * 60 * 30 * i,
//     y1: Math.floor(Math.random() * 100) + 10,
//     y2: Math.floor(Math.random() * 100) + 10,
//   });
// }
const offlineChartData = [
  {
    "year": "2020",
    "value": 71,
    "category": "英语"
  },
  {
    "year": "2019",
    "value": 76,
    "category": "英语"
  },
  {
    "year": "2018",
    "value": 98,
    "category": "英语"
  },
  {
    "year": "2020",
    "value": 71,
    "category": "土木工程"
  },
  {
    "year": "2019",
    "value": 82,
    "category": "土木工程"
  },
  {
    "year": "2018",
    "value": 99,
    "category": "土木工程"
  },
  {
    "year": "2020",
    "value": 88,
    "category": "计算机科学与技术"
  },
  {
    "year": "2019",
    "value": 85,
    "category": "计算机科学与技术"
  },
  {
    "year": "2018",
    "value": 94,
    "category": "计算机科学与技术"
  },
  {
    "year": "2020",
    "value": 72,
    "category": "车辆工程"
  },
  {
    "year": "2019",
    "value": 78,
    "category": "车辆工程"
  },
  {
    "year": "2018",
    "value": 94,
    "category": "车辆工程"
  },
  {
    "year": "2020",
    "value": 59,
    "category": "软件工程"
  },
  {
    "year": "2019",
    "value": 83,
    "category": "软件工程"
  },
  {
    "year": "2018",
    "value": 93,
    "category": "软件工程"
  },
  {
    "year": "2020",
    "value": 49,
    "category": "物联网工程"
  },
  {
    "year": "2019",
    "value": 54,
    "category": "物联网工程"
  },
  {
    "year": "2018",
    "value": 85,
    "category": "物联网工程"
  },
  {
    "year": "2020",
    "value": 56,
    "category": "信息与计算科学"
  },
  {
    "year": "2019",
    "value": 62,
    "category": "信息与计算科学"
  },
  {
    "year": "2018",
    "value": 83,
    "category": "信息与计算科学"
  },
  {
    "year": "2020",
    "value": 68,
    "category": "自动化"
  },
  {
    "year": "2019",
    "value": 75,
    "category": "自动化"
  },
  {
    "year": "2018",
    "value": 83,
    "category": "自动化"
  },
  {
    "year": "2020",
    "value": 67,
    "category": "高分子材料与工程"
  },
  {
    "year": "2019",
    "value": 65,
    "category": "高分子材料与工程"
  },
  {
    "year": "2018",
    "value": 83,
    "category": "高分子材料与工程"
  },
  {
    "year": "2020",
    "value": 72,
    "category": "冶金工程"
  },
  {
    "year": "2019",
    "value": 76,
    "category": "冶金工程"
  },
  {
    "year": "2018",
    "value": 83,
    "category": "冶金工程"
  },
  {
    "year": "2020",
    "value": 52,
    "category": "会计学"
  },
  {
    "year": "2019",
    "value": 63,
    "category": "会计学"
  },
  {
    "year": "2018",
    "value": 82,
    "category": "会计学"
  },
  {
    "year": "2020",
    "value": 72,
    "category": "化学工程"
  },
  {
    "year": "2019",
    "value": 76,
    "category": "化学工程"
  },
  {
    "year": "2018",
    "value": 81,
    "category": "化学工程"
  },
  {
    "year": "2020",
    "value": 50,
    "category": "行政管理"
  },
  {
    "year": "2019",
    "value": 61,
    "category": "行政管理"
  },
  {
    "year": "2018",
    "value": 81,
    "category": "行政管理"
  },
  {
    "year": "2020",
    "value": 75,
    "category": "生物工程"
  },
  {
    "year": "2019",
    "value": 67,
    "category": "生物工程"
  },
  {
    "year": "2018",
    "value": 79,
    "category": "生物工程"
  },
  {
    "year": "2020",
    "value": 62,
    "category": "电子科学与技术"
  },
  {
    "year": "2019",
    "value": 80,
    "category": "电子科学与技术"
  },
  {
    "year": "2018",
    "value": 73,
    "category": "电子科学与技术"
  }
]


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
  'GET  /api/fake_chart_data_category_industry': getFakeChartData,
};
