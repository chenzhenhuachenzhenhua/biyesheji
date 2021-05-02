import moment from 'moment';
import type { VisitDataType } from './data.d';
// mock data
const visitData: VisitDataType[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: '山西省就业人数（万人）',
    // moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: 767.59,
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
    status: 1,
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
//     cvr: Math.ceil(Math.random() * 5) / 10,
//   }); 
// }
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

const offlineChartData = [
  {
    "year": "1850",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1850",
    "value": 54,
    "category": "Solid fuel"
  },
  {
    "year": "1850",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1850",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1850",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1851",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1851",
    "value": 54,
    "category": "Solid fuel"
  },
  {
    "year": "1851",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1851",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1851",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1852",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1852",
    "value": 57,
    "category": "Solid fuel"
  },
  {
    "year": "1852",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1852",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1852",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1853",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1853",
    "value": 59,
    "category": "Solid fuel"
  },
  {
    "year": "1853",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1853",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1853",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1854",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1854",
    "value": 69,
    "category": "Solid fuel"
  },
  {
    "year": "1854",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1854",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1854",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1855",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1855",
    "value": 71,
    "category": "Solid fuel"
  },
  {
    "year": "1855",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1855",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1855",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1856",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1856",
    "value": 76,
    "category": "Solid fuel"
  },
  {
    "year": "1856",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1856",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1856",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1857",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1857",
    "value": 77,
    "category": "Solid fuel"
  },
  {
    "year": "1857",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1857",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1857",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1858",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1858",
    "value": 78,
    "category": "Solid fuel"
  },
  {
    "year": "1858",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1858",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1858",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1859",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1859",
    "value": 83,
    "category": "Solid fuel"
  },
  {
    "year": "1859",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1859",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1859",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1860",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1860",
    "value": 91,
    "category": "Solid fuel"
  },
  {
    "year": "1860",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1860",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1860",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1861",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1861",
    "value": 95,
    "category": "Solid fuel"
  },
  {
    "year": "1861",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1861",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1861",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1862",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1862",
    "value": 96,
    "category": "Solid fuel"
  },
  {
    "year": "1862",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1862",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1862",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1863",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1863",
    "value": 103,
    "category": "Solid fuel"
  },
  {
    "year": "1863",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1863",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1863",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1864",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1864",
    "value": 112,
    "category": "Solid fuel"
  },
  {
    "year": "1864",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1864",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1864",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1865",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1865",
    "value": 119,
    "category": "Solid fuel"
  },
  {
    "year": "1865",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1865",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1865",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1866",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1866",
    "value": 122,
    "category": "Solid fuel"
  },
  {
    "year": "1866",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1866",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1866",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1867",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1867",
    "value": 130,
    "category": "Solid fuel"
  },
  {
    "year": "1867",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1867",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1867",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1868",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1868",
    "value": 134,
    "category": "Solid fuel"
  },
  {
    "year": "1868",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1868",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1868",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1869",
    "value": 0,
    "category": "Liquid fuel"
  },
  {
    "year": "1869",
    "value": 142,
    "category": "Solid fuel"
  },
  {
    "year": "1869",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1869",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1869",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1870",
    "value": 1,
    "category": "Liquid fuel"
  },
  {
    "year": "1870",
    "value": 146,
    "category": "Solid fuel"
  },
  {
    "year": "1870",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1870",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1870",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1871",
    "value": 1,
    "category": "Liquid fuel"
  },
  {
    "year": "1871",
    "value": 156,
    "category": "Solid fuel"
  },
  {
    "year": "1871",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1871",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1871",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1872",
    "value": 1,
    "category": "Liquid fuel"
  },
  {
    "year": "1872",
    "value": 173,
    "category": "Solid fuel"
  },
  {
    "year": "1872",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1872",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1872",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1873",
    "value": 1,
    "category": "Liquid fuel"
  },
  {
    "year": "1873",
    "value": 183,
    "category": "Solid fuel"
  },
  {
    "year": "1873",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1873",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1873",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1874",
    "value": 1,
    "category": "Liquid fuel"
  },
  {
    "year": "1874",
    "value": 173,
    "category": "Solid fuel"
  },
  {
    "year": "1874",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1874",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1874",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1875",
    "value": 1,
    "category": "Liquid fuel"
  },
  {
    "year": "1875",
    "value": 187,
    "category": "Solid fuel"
  },
  {
    "year": "1875",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1875",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1875",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1876",
    "value": 1,
    "category": "Liquid fuel"
  },
  {
    "year": "1876",
    "value": 190,
    "category": "Solid fuel"
  },
  {
    "year": "1876",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1876",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1876",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1877",
    "value": 2,
    "category": "Liquid fuel"
  },
  {
    "year": "1877",
    "value": 192,
    "category": "Solid fuel"
  },
  {
    "year": "1877",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1877",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1877",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1878",
    "value": 2,
    "category": "Liquid fuel"
  },
  {
    "year": "1878",
    "value": 194,
    "category": "Solid fuel"
  },
  {
    "year": "1878",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1878",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1878",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1879",
    "value": 3,
    "category": "Liquid fuel"
  },
  {
    "year": "1879",
    "value": 207,
    "category": "Solid fuel"
  },
  {
    "year": "1879",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1879",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1879",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1880",
    "value": 3,
    "category": "Liquid fuel"
  },
  {
    "year": "1880",
    "value": 233,
    "category": "Solid fuel"
  },
  {
    "year": "1880",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1880",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1880",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1881",
    "value": 4,
    "category": "Liquid fuel"
  },
  {
    "year": "1881",
    "value": 239,
    "category": "Solid fuel"
  },
  {
    "year": "1881",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1881",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1881",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1882",
    "value": 4,
    "category": "Liquid fuel"
  },
  {
    "year": "1882",
    "value": 252,
    "category": "Solid fuel"
  },
  {
    "year": "1882",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1882",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1882",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1883",
    "value": 3,
    "category": "Liquid fuel"
  },
  {
    "year": "1883",
    "value": 269,
    "category": "Solid fuel"
  },
  {
    "year": "1883",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1883",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1883",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1884",
    "value": 4,
    "category": "Liquid fuel"
  },
  {
    "year": "1884",
    "value": 271,
    "category": "Solid fuel"
  },
  {
    "year": "1884",
    "value": 0,
    "category": "Gas fuel"
  },
  {
    "year": "1884",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1884",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1885",
    "value": 4,
    "category": "Liquid fuel"
  },
  {
    "year": "1885",
    "value": 273,
    "category": "Solid fuel"
  },
  {
    "year": "1885",
    "value": 1,
    "category": "Gas fuel"
  },
  {
    "year": "1885",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1885",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1886",
    "value": 5,
    "category": "Liquid fuel"
  },
  {
    "year": "1886",
    "value": 275,
    "category": "Solid fuel"
  },
  {
    "year": "1886",
    "value": 2,
    "category": "Gas fuel"
  },
  {
    "year": "1886",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1886",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1887",
    "value": 5,
    "category": "Liquid fuel"
  },
  {
    "year": "1887",
    "value": 287,
    "category": "Solid fuel"
  },
  {
    "year": "1887",
    "value": 3,
    "category": "Gas fuel"
  },
  {
    "year": "1887",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1887",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1888",
    "value": 5,
    "category": "Liquid fuel"
  },
  {
    "year": "1888",
    "value": 317,
    "category": "Solid fuel"
  },
  {
    "year": "1888",
    "value": 5,
    "category": "Gas fuel"
  },
  {
    "year": "1888",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1888",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1889",
    "value": 6,
    "category": "Liquid fuel"
  },
  {
    "year": "1889",
    "value": 318,
    "category": "Solid fuel"
  },
  {
    "year": "1889",
    "value": 3,
    "category": "Gas fuel"
  },
  {
    "year": "1889",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1889",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1890",
    "value": 8,
    "category": "Liquid fuel"
  },
  {
    "year": "1890",
    "value": 345,
    "category": "Solid fuel"
  },
  {
    "year": "1890",
    "value": 3,
    "category": "Gas fuel"
  },
  {
    "year": "1890",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1890",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1891",
    "value": 9,
    "category": "Liquid fuel"
  },
  {
    "year": "1891",
    "value": 360,
    "category": "Solid fuel"
  },
  {
    "year": "1891",
    "value": 2,
    "category": "Gas fuel"
  },
  {
    "year": "1891",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1891",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1892",
    "value": 9,
    "category": "Liquid fuel"
  },
  {
    "year": "1892",
    "value": 363,
    "category": "Solid fuel"
  },
  {
    "year": "1892",
    "value": 2,
    "category": "Gas fuel"
  },
  {
    "year": "1892",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1892",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1893",
    "value": 10,
    "category": "Liquid fuel"
  },
  {
    "year": "1893",
    "value": 358,
    "category": "Solid fuel"
  },
  {
    "year": "1893",
    "value": 2,
    "category": "Gas fuel"
  },
  {
    "year": "1893",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1893",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1894",
    "value": 9,
    "category": "Liquid fuel"
  },
  {
    "year": "1894",
    "value": 372,
    "category": "Solid fuel"
  },
  {
    "year": "1894",
    "value": 2,
    "category": "Gas fuel"
  },
  {
    "year": "1894",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1894",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1895",
    "value": 11,
    "category": "Liquid fuel"
  },
  {
    "year": "1895",
    "value": 393,
    "category": "Solid fuel"
  },
  {
    "year": "1895",
    "value": 2,
    "category": "Gas fuel"
  },
  {
    "year": "1895",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1895",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1896",
    "value": 12,
    "category": "Liquid fuel"
  },
  {
    "year": "1896",
    "value": 405,
    "category": "Solid fuel"
  },
  {
    "year": "1896",
    "value": 2,
    "category": "Gas fuel"
  },
  {
    "year": "1896",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1896",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1897",
    "value": 13,
    "category": "Liquid fuel"
  },
  {
    "year": "1897",
    "value": 425,
    "category": "Solid fuel"
  },
  {
    "year": "1897",
    "value": 2,
    "category": "Gas fuel"
  },
  {
    "year": "1897",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1897",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1898",
    "value": 13,
    "category": "Liquid fuel"
  },
  {
    "year": "1898",
    "value": 449,
    "category": "Solid fuel"
  },
  {
    "year": "1898",
    "value": 2,
    "category": "Gas fuel"
  },
  {
    "year": "1898",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1898",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1899",
    "value": 14,
    "category": "Liquid fuel"
  },
  {
    "year": "1899",
    "value": 491,
    "category": "Solid fuel"
  },
  {
    "year": "1899",
    "value": 3,
    "category": "Gas fuel"
  },
  {
    "year": "1899",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1899",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1900",
    "value": 16,
    "category": "Liquid fuel"
  },
  {
    "year": "1900",
    "value": 515,
    "category": "Solid fuel"
  },
  {
    "year": "1900",
    "value": 3,
    "category": "Gas fuel"
  },
  {
    "year": "1900",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1900",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1901",
    "value": 18,
    "category": "Liquid fuel"
  },
  {
    "year": "1901",
    "value": 531,
    "category": "Solid fuel"
  },
  {
    "year": "1901",
    "value": 4,
    "category": "Gas fuel"
  },
  {
    "year": "1901",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1901",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1902",
    "value": 19,
    "category": "Liquid fuel"
  },
  {
    "year": "1902",
    "value": 543,
    "category": "Solid fuel"
  },
  {
    "year": "1902",
    "value": 4,
    "category": "Gas fuel"
  },
  {
    "year": "1902",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1902",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1903",
    "value": 20,
    "category": "Liquid fuel"
  },
  {
    "year": "1903",
    "value": 593,
    "category": "Solid fuel"
  },
  {
    "year": "1903",
    "value": 4,
    "category": "Gas fuel"
  },
  {
    "year": "1903",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1903",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1904",
    "value": 23,
    "category": "Liquid fuel"
  },
  {
    "year": "1904",
    "value": 597,
    "category": "Solid fuel"
  },
  {
    "year": "1904",
    "value": 4,
    "category": "Gas fuel"
  },
  {
    "year": "1904",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1904",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1905",
    "value": 23,
    "category": "Liquid fuel"
  },
  {
    "year": "1905",
    "value": 636,
    "category": "Solid fuel"
  },
  {
    "year": "1905",
    "value": 5,
    "category": "Gas fuel"
  },
  {
    "year": "1905",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1905",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1906",
    "value": 23,
    "category": "Liquid fuel"
  },
  {
    "year": "1906",
    "value": 680,
    "category": "Solid fuel"
  },
  {
    "year": "1906",
    "value": 5,
    "category": "Gas fuel"
  },
  {
    "year": "1906",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1906",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1907",
    "value": 28,
    "category": "Liquid fuel"
  },
  {
    "year": "1907",
    "value": 750,
    "category": "Solid fuel"
  },
  {
    "year": "1907",
    "value": 5,
    "category": "Gas fuel"
  },
  {
    "year": "1907",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1907",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1908",
    "value": 30,
    "category": "Liquid fuel"
  },
  {
    "year": "1908",
    "value": 714,
    "category": "Solid fuel"
  },
  {
    "year": "1908",
    "value": 5,
    "category": "Gas fuel"
  },
  {
    "year": "1908",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1908",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1909",
    "value": 32,
    "category": "Liquid fuel"
  },
  {
    "year": "1909",
    "value": 747,
    "category": "Solid fuel"
  },
  {
    "year": "1909",
    "value": 6,
    "category": "Gas fuel"
  },
  {
    "year": "1909",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1909",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1910",
    "value": 34,
    "category": "Liquid fuel"
  },
  {
    "year": "1910",
    "value": 778,
    "category": "Solid fuel"
  },
  {
    "year": "1910",
    "value": 7,
    "category": "Gas fuel"
  },
  {
    "year": "1910",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1910",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1911",
    "value": 36,
    "category": "Liquid fuel"
  },
  {
    "year": "1911",
    "value": 792,
    "category": "Solid fuel"
  },
  {
    "year": "1911",
    "value": 7,
    "category": "Gas fuel"
  },
  {
    "year": "1911",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1911",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1912",
    "value": 37,
    "category": "Liquid fuel"
  },
  {
    "year": "1912",
    "value": 834,
    "category": "Solid fuel"
  },
  {
    "year": "1912",
    "value": 8,
    "category": "Gas fuel"
  },
  {
    "year": "1912",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1912",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1913",
    "value": 41,
    "category": "Liquid fuel"
  },
  {
    "year": "1913",
    "value": 895,
    "category": "Solid fuel"
  },
  {
    "year": "1913",
    "value": 8,
    "category": "Gas fuel"
  },
  {
    "year": "1913",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1913",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1914",
    "value": 42,
    "category": "Liquid fuel"
  },
  {
    "year": "1914",
    "value": 800,
    "category": "Solid fuel"
  },
  {
    "year": "1914",
    "value": 8,
    "category": "Gas fuel"
  },
  {
    "year": "1914",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1914",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1915",
    "value": 45,
    "category": "Liquid fuel"
  },
  {
    "year": "1915",
    "value": 784,
    "category": "Solid fuel"
  },
  {
    "year": "1915",
    "value": 9,
    "category": "Gas fuel"
  },
  {
    "year": "1915",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1915",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1916",
    "value": 48,
    "category": "Liquid fuel"
  },
  {
    "year": "1916",
    "value": 842,
    "category": "Solid fuel"
  },
  {
    "year": "1916",
    "value": 10,
    "category": "Gas fuel"
  },
  {
    "year": "1916",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1916",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1917",
    "value": 54,
    "category": "Liquid fuel"
  },
  {
    "year": "1917",
    "value": 891,
    "category": "Solid fuel"
  },
  {
    "year": "1917",
    "value": 11,
    "category": "Gas fuel"
  },
  {
    "year": "1917",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1917",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1918",
    "value": 53,
    "category": "Liquid fuel"
  },
  {
    "year": "1918",
    "value": 873,
    "category": "Solid fuel"
  },
  {
    "year": "1918",
    "value": 10,
    "category": "Gas fuel"
  },
  {
    "year": "1918",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1918",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1919",
    "value": 61,
    "category": "Liquid fuel"
  },
  {
    "year": "1919",
    "value": 735,
    "category": "Solid fuel"
  },
  {
    "year": "1919",
    "value": 10,
    "category": "Gas fuel"
  },
  {
    "year": "1919",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1919",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1920",
    "value": 78,
    "category": "Liquid fuel"
  },
  {
    "year": "1920",
    "value": 843,
    "category": "Solid fuel"
  },
  {
    "year": "1920",
    "value": 11,
    "category": "Gas fuel"
  },
  {
    "year": "1920",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1920",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1921",
    "value": 84,
    "category": "Liquid fuel"
  },
  {
    "year": "1921",
    "value": 709,
    "category": "Solid fuel"
  },
  {
    "year": "1921",
    "value": 10,
    "category": "Gas fuel"
  },
  {
    "year": "1921",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1921",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1922",
    "value": 94,
    "category": "Liquid fuel"
  },
  {
    "year": "1922",
    "value": 740,
    "category": "Solid fuel"
  },
  {
    "year": "1922",
    "value": 11,
    "category": "Gas fuel"
  },
  {
    "year": "1922",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1922",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1923",
    "value": 111,
    "category": "Liquid fuel"
  },
  {
    "year": "1923",
    "value": 845,
    "category": "Solid fuel"
  },
  {
    "year": "1923",
    "value": 14,
    "category": "Gas fuel"
  },
  {
    "year": "1923",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1923",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1924",
    "value": 110,
    "category": "Liquid fuel"
  },
  {
    "year": "1924",
    "value": 836,
    "category": "Solid fuel"
  },
  {
    "year": "1924",
    "value": 16,
    "category": "Gas fuel"
  },
  {
    "year": "1924",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1924",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1925",
    "value": 116,
    "category": "Liquid fuel"
  },
  {
    "year": "1925",
    "value": 842,
    "category": "Solid fuel"
  },
  {
    "year": "1925",
    "value": 17,
    "category": "Gas fuel"
  },
  {
    "year": "1925",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1925",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1926",
    "value": 119,
    "category": "Liquid fuel"
  },
  {
    "year": "1926",
    "value": 846,
    "category": "Solid fuel"
  },
  {
    "year": "1926",
    "value": 19,
    "category": "Gas fuel"
  },
  {
    "year": "1926",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1926",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1927",
    "value": 136,
    "category": "Liquid fuel"
  },
  {
    "year": "1927",
    "value": 905,
    "category": "Solid fuel"
  },
  {
    "year": "1927",
    "value": 21,
    "category": "Gas fuel"
  },
  {
    "year": "1927",
    "value": 0,
    "category": "Cement production"
  },
  {
    "year": "1927",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1928",
    "value": 143,
    "category": "Liquid fuel"
  },
  {
    "year": "1928",
    "value": 890,
    "category": "Solid fuel"
  },
  {
    "year": "1928",
    "value": 23,
    "category": "Gas fuel"
  },
  {
    "year": "1928",
    "value": 10,
    "category": "Cement production"
  },
  {
    "year": "1928",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1929",
    "value": 160,
    "category": "Liquid fuel"
  },
  {
    "year": "1929",
    "value": 947,
    "category": "Solid fuel"
  },
  {
    "year": "1929",
    "value": 28,
    "category": "Gas fuel"
  },
  {
    "year": "1929",
    "value": 10,
    "category": "Cement production"
  },
  {
    "year": "1929",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1930",
    "value": 152,
    "category": "Liquid fuel"
  },
  {
    "year": "1930",
    "value": 862,
    "category": "Solid fuel"
  },
  {
    "year": "1930",
    "value": 28,
    "category": "Gas fuel"
  },
  {
    "year": "1930",
    "value": 10,
    "category": "Cement production"
  },
  {
    "year": "1930",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1931",
    "value": 147,
    "category": "Liquid fuel"
  },
  {
    "year": "1931",
    "value": 759,
    "category": "Solid fuel"
  },
  {
    "year": "1931",
    "value": 25,
    "category": "Gas fuel"
  },
  {
    "year": "1931",
    "value": 8,
    "category": "Cement production"
  },
  {
    "year": "1931",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1932",
    "value": 141,
    "category": "Liquid fuel"
  },
  {
    "year": "1932",
    "value": 675,
    "category": "Solid fuel"
  },
  {
    "year": "1932",
    "value": 24,
    "category": "Gas fuel"
  },
  {
    "year": "1932",
    "value": 7,
    "category": "Cement production"
  },
  {
    "year": "1932",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1933",
    "value": 154,
    "category": "Liquid fuel"
  },
  {
    "year": "1933",
    "value": 708,
    "category": "Solid fuel"
  },
  {
    "year": "1933",
    "value": 25,
    "category": "Gas fuel"
  },
  {
    "year": "1933",
    "value": 7,
    "category": "Cement production"
  },
  {
    "year": "1933",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1934",
    "value": 162,
    "category": "Liquid fuel"
  },
  {
    "year": "1934",
    "value": 775,
    "category": "Solid fuel"
  },
  {
    "year": "1934",
    "value": 28,
    "category": "Gas fuel"
  },
  {
    "year": "1934",
    "value": 8,
    "category": "Cement production"
  },
  {
    "year": "1934",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1935",
    "value": 176,
    "category": "Liquid fuel"
  },
  {
    "year": "1935",
    "value": 811,
    "category": "Solid fuel"
  },
  {
    "year": "1935",
    "value": 30,
    "category": "Gas fuel"
  },
  {
    "year": "1935",
    "value": 9,
    "category": "Cement production"
  },
  {
    "year": "1935",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1936",
    "value": 192,
    "category": "Liquid fuel"
  },
  {
    "year": "1936",
    "value": 893,
    "category": "Solid fuel"
  },
  {
    "year": "1936",
    "value": 34,
    "category": "Gas fuel"
  },
  {
    "year": "1936",
    "value": 11,
    "category": "Cement production"
  },
  {
    "year": "1936",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1937",
    "value": 219,
    "category": "Liquid fuel"
  },
  {
    "year": "1937",
    "value": 941,
    "category": "Solid fuel"
  },
  {
    "year": "1937",
    "value": 38,
    "category": "Gas fuel"
  },
  {
    "year": "1937",
    "value": 11,
    "category": "Cement production"
  },
  {
    "year": "1937",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1938",
    "value": 214,
    "category": "Liquid fuel"
  },
  {
    "year": "1938",
    "value": 880,
    "category": "Solid fuel"
  },
  {
    "year": "1938",
    "value": 37,
    "category": "Gas fuel"
  },
  {
    "year": "1938",
    "value": 12,
    "category": "Cement production"
  },
  {
    "year": "1938",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1939",
    "value": 222,
    "category": "Liquid fuel"
  },
  {
    "year": "1939",
    "value": 918,
    "category": "Solid fuel"
  },
  {
    "year": "1939",
    "value": 38,
    "category": "Gas fuel"
  },
  {
    "year": "1939",
    "value": 13,
    "category": "Cement production"
  },
  {
    "year": "1939",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1940",
    "value": 229,
    "category": "Liquid fuel"
  },
  {
    "year": "1940",
    "value": 1017,
    "category": "Solid fuel"
  },
  {
    "year": "1940",
    "value": 42,
    "category": "Gas fuel"
  },
  {
    "year": "1940",
    "value": 11,
    "category": "Cement production"
  },
  {
    "year": "1940",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1941",
    "value": 236,
    "category": "Liquid fuel"
  },
  {
    "year": "1941",
    "value": 1043,
    "category": "Solid fuel"
  },
  {
    "year": "1941",
    "value": 42,
    "category": "Gas fuel"
  },
  {
    "year": "1941",
    "value": 12,
    "category": "Cement production"
  },
  {
    "year": "1941",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1942",
    "value": 222,
    "category": "Liquid fuel"
  },
  {
    "year": "1942",
    "value": 1063,
    "category": "Solid fuel"
  },
  {
    "year": "1942",
    "value": 45,
    "category": "Gas fuel"
  },
  {
    "year": "1942",
    "value": 11,
    "category": "Cement production"
  },
  {
    "year": "1942",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1943",
    "value": 239,
    "category": "Liquid fuel"
  },
  {
    "year": "1943",
    "value": 1092,
    "category": "Solid fuel"
  },
  {
    "year": "1943",
    "value": 50,
    "category": "Gas fuel"
  },
  {
    "year": "1943",
    "value": 10,
    "category": "Cement production"
  },
  {
    "year": "1943",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1944",
    "value": 275,
    "category": "Liquid fuel"
  },
  {
    "year": "1944",
    "value": 1047,
    "category": "Solid fuel"
  },
  {
    "year": "1944",
    "value": 54,
    "category": "Gas fuel"
  },
  {
    "year": "1944",
    "value": 7,
    "category": "Cement production"
  },
  {
    "year": "1944",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1945",
    "value": 275,
    "category": "Liquid fuel"
  },
  {
    "year": "1945",
    "value": 820,
    "category": "Solid fuel"
  },
  {
    "year": "1945",
    "value": 59,
    "category": "Gas fuel"
  },
  {
    "year": "1945",
    "value": 7,
    "category": "Cement production"
  },
  {
    "year": "1945",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1946",
    "value": 292,
    "category": "Liquid fuel"
  },
  {
    "year": "1946",
    "value": 875,
    "category": "Solid fuel"
  },
  {
    "year": "1946",
    "value": 61,
    "category": "Gas fuel"
  },
  {
    "year": "1946",
    "value": 10,
    "category": "Cement production"
  },
  {
    "year": "1946",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1947",
    "value": 322,
    "category": "Liquid fuel"
  },
  {
    "year": "1947",
    "value": 992,
    "category": "Solid fuel"
  },
  {
    "year": "1947",
    "value": 67,
    "category": "Gas fuel"
  },
  {
    "year": "1947",
    "value": 12,
    "category": "Cement production"
  },
  {
    "year": "1947",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1948",
    "value": 364,
    "category": "Liquid fuel"
  },
  {
    "year": "1948",
    "value": 1015,
    "category": "Solid fuel"
  },
  {
    "year": "1948",
    "value": 76,
    "category": "Gas fuel"
  },
  {
    "year": "1948",
    "value": 14,
    "category": "Cement production"
  },
  {
    "year": "1948",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1949",
    "value": 362,
    "category": "Liquid fuel"
  },
  {
    "year": "1949",
    "value": 960,
    "category": "Solid fuel"
  },
  {
    "year": "1949",
    "value": 81,
    "category": "Gas fuel"
  },
  {
    "year": "1949",
    "value": 16,
    "category": "Cement production"
  },
  {
    "year": "1949",
    "value": 0,
    "category": "Gas flarinl"
  },
  {
    "year": "1950",
    "value": 423,
    "category": "Liquid fuel"
  },
  {
    "year": "1950",
    "value": 1070,
    "category": "Solid fuel"
  },
  {
    "year": "1950",
    "value": 97,
    "category": "Gas fuel"
  },
  {
    "year": "1950",
    "value": 18,
    "category": "Cement production"
  },
  {
    "year": "1950",
    "value": 23,
    "category": "Gas flarinl"
  },
  {
    "year": "1951",
    "value": 479,
    "category": "Liquid fuel"
  },
  {
    "year": "1951",
    "value": 1129,
    "category": "Solid fuel"
  },
  {
    "year": "1951",
    "value": 115,
    "category": "Gas fuel"
  },
  {
    "year": "1951",
    "value": 20,
    "category": "Cement production"
  },
  {
    "year": "1951",
    "value": 24,
    "category": "Gas flarinl"
  },
  {
    "year": "1952",
    "value": 504,
    "category": "Liquid fuel"
  },
  {
    "year": "1952",
    "value": 1119,
    "category": "Solid fuel"
  },
  {
    "year": "1952",
    "value": 124,
    "category": "Gas fuel"
  },
  {
    "year": "1952",
    "value": 22,
    "category": "Cement production"
  },
  {
    "year": "1952",
    "value": 26,
    "category": "Gas flarinl"
  },
  {
    "year": "1953",
    "value": 533,
    "category": "Liquid fuel"
  },
  {
    "year": "1953",
    "value": 1125,
    "category": "Solid fuel"
  },
  {
    "year": "1953",
    "value": 131,
    "category": "Gas fuel"
  },
  {
    "year": "1953",
    "value": 24,
    "category": "Cement production"
  },
  {
    "year": "1953",
    "value": 27,
    "category": "Gas flarinl"
  },
  {
    "year": "1954",
    "value": 557,
    "category": "Liquid fuel"
  },
  {
    "year": "1954",
    "value": 1116,
    "category": "Solid fuel"
  },
  {
    "year": "1954",
    "value": 138,
    "category": "Gas fuel"
  },
  {
    "year": "1954",
    "value": 27,
    "category": "Cement production"
  },
  {
    "year": "1954",
    "value": 27,
    "category": "Gas flarinl"
  },
  {
    "year": "1955",
    "value": 625,
    "category": "Liquid fuel"
  },
  {
    "year": "1955",
    "value": 1208,
    "category": "Solid fuel"
  },
  {
    "year": "1955",
    "value": 150,
    "category": "Gas fuel"
  },
  {
    "year": "1955",
    "value": 30,
    "category": "Cement production"
  },
  {
    "year": "1955",
    "value": 31,
    "category": "Gas flarinl"
  },
  {
    "year": "1956",
    "value": 679,
    "category": "Liquid fuel"
  },
  {
    "year": "1956",
    "value": 1273,
    "category": "Solid fuel"
  },
  {
    "year": "1956",
    "value": 161,
    "category": "Gas fuel"
  },
  {
    "year": "1956",
    "value": 32,
    "category": "Cement production"
  },
  {
    "year": "1956",
    "value": 32,
    "category": "Gas flarinl"
  },
  {
    "year": "1957",
    "value": 714,
    "category": "Liquid fuel"
  },
  {
    "year": "1957",
    "value": 1309,
    "category": "Solid fuel"
  },
  {
    "year": "1957",
    "value": 178,
    "category": "Gas fuel"
  },
  {
    "year": "1957",
    "value": 34,
    "category": "Cement production"
  },
  {
    "year": "1957",
    "value": 35,
    "category": "Gas flarinl"
  },
  {
    "year": "1958",
    "value": 731,
    "category": "Liquid fuel"
  },
  {
    "year": "1958",
    "value": 1336,
    "category": "Solid fuel"
  },
  {
    "year": "1958",
    "value": 192,
    "category": "Gas fuel"
  },
  {
    "year": "1958",
    "value": 36,
    "category": "Cement production"
  },
  {
    "year": "1958",
    "value": 35,
    "category": "Gas flarinl"
  },
  {
    "year": "1959",
    "value": 789,
    "category": "Liquid fuel"
  },
  {
    "year": "1959",
    "value": 1382,
    "category": "Solid fuel"
  },
  {
    "year": "1959",
    "value": 206,
    "category": "Gas fuel"
  },
  {
    "year": "1959",
    "value": 40,
    "category": "Cement production"
  },
  {
    "year": "1959",
    "value": 36,
    "category": "Gas flarinl"
  },
  {
    "year": "1960",
    "value": 849,
    "category": "Liquid fuel"
  },
  {
    "year": "1960",
    "value": 1410,
    "category": "Solid fuel"
  },
  {
    "year": "1960",
    "value": 227,
    "category": "Gas fuel"
  },
  {
    "year": "1960",
    "value": 43,
    "category": "Cement production"
  },
  {
    "year": "1960",
    "value": 39,
    "category": "Gas flarinl"
  },
  {
    "year": "1961",
    "value": 904,
    "category": "Liquid fuel"
  },
  {
    "year": "1961",
    "value": 1349,
    "category": "Solid fuel"
  },
  {
    "year": "1961",
    "value": 240,
    "category": "Gas fuel"
  },
  {
    "year": "1961",
    "value": 45,
    "category": "Cement production"
  },
  {
    "year": "1961",
    "value": 42,
    "category": "Gas flarinl"
  },
  {
    "year": "1962",
    "value": 980,
    "category": "Liquid fuel"
  },
  {
    "year": "1962",
    "value": 1351,
    "category": "Solid fuel"
  },
  {
    "year": "1962",
    "value": 263,
    "category": "Gas fuel"
  },
  {
    "year": "1962",
    "value": 49,
    "category": "Cement production"
  },
  {
    "year": "1962",
    "value": 44,
    "category": "Gas flarinl"
  },
  {
    "year": "1963",
    "value": 1052,
    "category": "Liquid fuel"
  },
  {
    "year": "1963",
    "value": 1396,
    "category": "Solid fuel"
  },
  {
    "year": "1963",
    "value": 286,
    "category": "Gas fuel"
  },
  {
    "year": "1963",
    "value": 51,
    "category": "Cement production"
  },
  {
    "year": "1963",
    "value": 47,
    "category": "Gas flarinl"
  },
  {
    "year": "1964",
    "value": 1137,
    "category": "Liquid fuel"
  },
  {
    "year": "1964",
    "value": 1435,
    "category": "Solid fuel"
  },
  {
    "year": "1964",
    "value": 316,
    "category": "Gas fuel"
  },
  {
    "year": "1964",
    "value": 57,
    "category": "Cement production"
  },
  {
    "year": "1964",
    "value": 51,
    "category": "Gas flarinl"
  },
  {
    "year": "1965",
    "value": 1219,
    "category": "Liquid fuel"
  },
  {
    "year": "1965",
    "value": 1460,
    "category": "Solid fuel"
  },
  {
    "year": "1965",
    "value": 337,
    "category": "Gas fuel"
  },
  {
    "year": "1965",
    "value": 59,
    "category": "Cement production"
  },
  {
    "year": "1965",
    "value": 55,
    "category": "Gas flarinl"
  },
  {
    "year": "1966",
    "value": 1323,
    "category": "Liquid fuel"
  },
  {
    "year": "1966",
    "value": 1478,
    "category": "Solid fuel"
  },
  {
    "year": "1966",
    "value": 364,
    "category": "Gas fuel"
  },
  {
    "year": "1966",
    "value": 63,
    "category": "Cement production"
  },
  {
    "year": "1966",
    "value": 60,
    "category": "Gas flarinl"
  },
  {
    "year": "1967",
    "value": 1423,
    "category": "Liquid fuel"
  },
  {
    "year": "1967",
    "value": 1448,
    "category": "Solid fuel"
  },
  {
    "year": "1967",
    "value": 392,
    "category": "Gas fuel"
  },
  {
    "year": "1967",
    "value": 65,
    "category": "Cement production"
  },
  {
    "year": "1967",
    "value": 66,
    "category": "Gas flarinl"
  },
  {
    "year": "1968",
    "value": 1551,
    "category": "Liquid fuel"
  },
  {
    "year": "1968",
    "value": 1448,
    "category": "Solid fuel"
  },
  {
    "year": "1968",
    "value": 424,
    "category": "Gas fuel"
  },
  {
    "year": "1968",
    "value": 70,
    "category": "Cement production"
  },
  {
    "year": "1968",
    "value": 73,
    "category": "Gas flarinl"
  },
  {
    "year": "1969",
    "value": 1673,
    "category": "Liquid fuel"
  },
  {
    "year": "1969",
    "value": 1486,
    "category": "Solid fuel"
  },
  {
    "year": "1969",
    "value": 467,
    "category": "Gas fuel"
  },
  {
    "year": "1969",
    "value": 74,
    "category": "Cement production"
  },
  {
    "year": "1969",
    "value": 80,
    "category": "Gas flarinl"
  },
  {
    "year": "1970",
    "value": 1839,
    "category": "Liquid fuel"
  },
  {
    "year": "1970",
    "value": 1556,
    "category": "Solid fuel"
  },
  {
    "year": "1970",
    "value": 493,
    "category": "Gas fuel"
  },
  {
    "year": "1970",
    "value": 78,
    "category": "Cement production"
  },
  {
    "year": "1970",
    "value": 87,
    "category": "Gas flarinl"
  },
  {
    "year": "1971",
    "value": 1947,
    "category": "Liquid fuel"
  },
  {
    "year": "1971",
    "value": 1559,
    "category": "Solid fuel"
  },
  {
    "year": "1971",
    "value": 530,
    "category": "Gas fuel"
  },
  {
    "year": "1971",
    "value": 84,
    "category": "Cement production"
  },
  {
    "year": "1971",
    "value": 88,
    "category": "Gas flarinl"
  },
  {
    "year": "1972",
    "value": 2057,
    "category": "Liquid fuel"
  },
  {
    "year": "1972",
    "value": 1576,
    "category": "Solid fuel"
  },
  {
    "year": "1972",
    "value": 560,
    "category": "Gas fuel"
  },
  {
    "year": "1972",
    "value": 89,
    "category": "Cement production"
  },
  {
    "year": "1972",
    "value": 95,
    "category": "Gas flarinl"
  },
  {
    "year": "1973",
    "value": 2241,
    "category": "Liquid fuel"
  },
  {
    "year": "1973",
    "value": 1581,
    "category": "Solid fuel"
  },
  {
    "year": "1973",
    "value": 588,
    "category": "Gas fuel"
  },
  {
    "year": "1973",
    "value": 95,
    "category": "Cement production"
  },
  {
    "year": "1973",
    "value": 110,
    "category": "Gas flarinl"
  },
  {
    "year": "1974",
    "value": 2245,
    "category": "Liquid fuel"
  },
  {
    "year": "1974",
    "value": 1579,
    "category": "Solid fuel"
  },
  {
    "year": "1974",
    "value": 597,
    "category": "Gas fuel"
  },
  {
    "year": "1974",
    "value": 96,
    "category": "Cement production"
  },
  {
    "year": "1974",
    "value": 107,
    "category": "Gas flarinl"
  },
  {
    "year": "1975",
    "value": 2132,
    "category": "Liquid fuel"
  },
  {
    "year": "1975",
    "value": 1673,
    "category": "Solid fuel"
  },
  {
    "year": "1975",
    "value": 604,
    "category": "Gas fuel"
  },
  {
    "year": "1975",
    "value": 95,
    "category": "Cement production"
  },
  {
    "year": "1975",
    "value": 92,
    "category": "Gas flarinl"
  },
  {
    "year": "1976",
    "value": 2314,
    "category": "Liquid fuel"
  },
  {
    "year": "1976",
    "value": 1710,
    "category": "Solid fuel"
  },
  {
    "year": "1976",
    "value": 630,
    "category": "Gas fuel"
  },
  {
    "year": "1976",
    "value": 103,
    "category": "Cement production"
  },
  {
    "year": "1976",
    "value": 108,
    "category": "Gas flarinl"
  },
  {
    "year": "1977",
    "value": 2398,
    "category": "Liquid fuel"
  },
  {
    "year": "1977",
    "value": 1756,
    "category": "Solid fuel"
  },
  {
    "year": "1977",
    "value": 650,
    "category": "Gas fuel"
  },
  {
    "year": "1977",
    "value": 108,
    "category": "Cement production"
  },
  {
    "year": "1977",
    "value": 104,
    "category": "Gas flarinl"
  },
  {
    "year": "1978",
    "value": 2392,
    "category": "Liquid fuel"
  },
  {
    "year": "1978",
    "value": 1780,
    "category": "Solid fuel"
  },
  {
    "year": "1978",
    "value": 680,
    "category": "Gas fuel"
  },
  {
    "year": "1978",
    "value": 116,
    "category": "Cement production"
  },
  {
    "year": "1978",
    "value": 106,
    "category": "Gas flarinl"
  },
  {
    "year": "1979",
    "value": 2544,
    "category": "Liquid fuel"
  },
  {
    "year": "1979",
    "value": 1875,
    "category": "Solid fuel"
  },
  {
    "year": "1979",
    "value": 721,
    "category": "Gas fuel"
  },
  {
    "year": "1979",
    "value": 119,
    "category": "Cement production"
  },
  {
    "year": "1979",
    "value": 98,
    "category": "Gas flarinl"
  },
  {
    "year": "1980",
    "value": 2422,
    "category": "Liquid fuel"
  },
  {
    "year": "1980",
    "value": 1935,
    "category": "Solid fuel"
  },
  {
    "year": "1980",
    "value": 737,
    "category": "Gas fuel"
  },
  {
    "year": "1980",
    "value": 120,
    "category": "Cement production"
  },
  {
    "year": "1980",
    "value": 86,
    "category": "Gas flarinl"
  },
  {
    "year": "1981",
    "value": 2289,
    "category": "Liquid fuel"
  },
  {
    "year": "1981",
    "value": 1908,
    "category": "Solid fuel"
  },
  {
    "year": "1981",
    "value": 755,
    "category": "Gas fuel"
  },
  {
    "year": "1981",
    "value": 121,
    "category": "Cement production"
  },
  {
    "year": "1981",
    "value": 65,
    "category": "Gas flarinl"
  },
  {
    "year": "1982",
    "value": 2196,
    "category": "Liquid fuel"
  },
  {
    "year": "1982",
    "value": 1976,
    "category": "Solid fuel"
  },
  {
    "year": "1982",
    "value": 738,
    "category": "Gas fuel"
  },
  {
    "year": "1982",
    "value": 121,
    "category": "Cement production"
  },
  {
    "year": "1982",
    "value": 64,
    "category": "Gas flarinl"
  },
  {
    "year": "1983",
    "value": 2176,
    "category": "Liquid fuel"
  },
  {
    "year": "1983",
    "value": 1977,
    "category": "Solid fuel"
  },
  {
    "year": "1983",
    "value": 739,
    "category": "Gas fuel"
  },
  {
    "year": "1983",
    "value": 125,
    "category": "Cement production"
  },
  {
    "year": "1983",
    "value": 58,
    "category": "Gas flarinl"
  },
  {
    "year": "1984",
    "value": 2199,
    "category": "Liquid fuel"
  },
  {
    "year": "1984",
    "value": 2074,
    "category": "Solid fuel"
  },
  {
    "year": "1984",
    "value": 807,
    "category": "Gas fuel"
  },
  {
    "year": "1984",
    "value": 128,
    "category": "Cement production"
  },
  {
    "year": "1984",
    "value": 51,
    "category": "Gas flarinl"
  },
  {
    "year": "1985",
    "value": 2186,
    "category": "Liquid fuel"
  },
  {
    "year": "1985",
    "value": 2216,
    "category": "Solid fuel"
  },
  {
    "year": "1985",
    "value": 835,
    "category": "Gas fuel"
  },
  {
    "year": "1985",
    "value": 131,
    "category": "Cement production"
  },
  {
    "year": "1985",
    "value": 49,
    "category": "Gas flarinl"
  },
  {
    "year": "1986",
    "value": 2293,
    "category": "Liquid fuel"
  },
  {
    "year": "1986",
    "value": 2277,
    "category": "Solid fuel"
  },
  {
    "year": "1986",
    "value": 830,
    "category": "Gas fuel"
  },
  {
    "year": "1986",
    "value": 137,
    "category": "Cement production"
  },
  {
    "year": "1986",
    "value": 46,
    "category": "Gas flarinl"
  },
  {
    "year": "1987",
    "value": 2306,
    "category": "Liquid fuel"
  },
  {
    "year": "1987",
    "value": 2339,
    "category": "Solid fuel"
  },
  {
    "year": "1987",
    "value": 892,
    "category": "Gas fuel"
  },
  {
    "year": "1987",
    "value": 143,
    "category": "Cement production"
  },
  {
    "year": "1987",
    "value": 44,
    "category": "Gas flarinl"
  },
  {
    "year": "1988",
    "value": 2412,
    "category": "Liquid fuel"
  },
  {
    "year": "1988",
    "value": 2387,
    "category": "Solid fuel"
  },
  {
    "year": "1988",
    "value": 935,
    "category": "Gas fuel"
  },
  {
    "year": "1988",
    "value": 152,
    "category": "Cement production"
  },
  {
    "year": "1988",
    "value": 50,
    "category": "Gas flarinl"
  },
  {
    "year": "1989",
    "value": 2459,
    "category": "Liquid fuel"
  },
  {
    "year": "1989",
    "value": 2428,
    "category": "Solid fuel"
  },
  {
    "year": "1989",
    "value": 982,
    "category": "Gas fuel"
  },
  {
    "year": "1989",
    "value": 156,
    "category": "Cement production"
  },
  {
    "year": "1989",
    "value": 41,
    "category": "Gas flarinl"
  },
  {
    "year": "1990",
    "value": 2492,
    "category": "Liquid fuel"
  },
  {
    "year": "1990",
    "value": 2359,
    "category": "Solid fuel"
  },
  {
    "year": "1990",
    "value": 1026,
    "category": "Gas fuel"
  },
  {
    "year": "1990",
    "value": 157,
    "category": "Cement production"
  },
  {
    "year": "1990",
    "value": 40,
    "category": "Gas flarinl"
  },
  {
    "year": "1991",
    "value": 2601,
    "category": "Liquid fuel"
  },
  {
    "year": "1991",
    "value": 2284,
    "category": "Solid fuel"
  },
  {
    "year": "1991",
    "value": 1051,
    "category": "Gas fuel"
  },
  {
    "year": "1991",
    "value": 161,
    "category": "Cement production"
  },
  {
    "year": "1991",
    "value": 45,
    "category": "Gas flarinl"
  },
  {
    "year": "1992",
    "value": 2499,
    "category": "Liquid fuel"
  },
  {
    "year": "1992",
    "value": 2290,
    "category": "Solid fuel"
  },
  {
    "year": "1992",
    "value": 1085,
    "category": "Gas fuel"
  },
  {
    "year": "1992",
    "value": 167,
    "category": "Cement production"
  },
  {
    "year": "1992",
    "value": 36,
    "category": "Gas flarinl"
  },
  {
    "year": "1993",
    "value": 2515,
    "category": "Liquid fuel"
  },
  {
    "year": "1993",
    "value": 2225,
    "category": "Solid fuel"
  },
  {
    "year": "1993",
    "value": 1117,
    "category": "Gas fuel"
  },
  {
    "year": "1993",
    "value": 176,
    "category": "Cement production"
  },
  {
    "year": "1993",
    "value": 37,
    "category": "Gas flarinl"
  },
  {
    "year": "1994",
    "value": 2539,
    "category": "Liquid fuel"
  },
  {
    "year": "1994",
    "value": 2278,
    "category": "Solid fuel"
  },
  {
    "year": "1994",
    "value": 1133,
    "category": "Gas fuel"
  },
  {
    "year": "1994",
    "value": 186,
    "category": "Cement production"
  },
  {
    "year": "1994",
    "value": 39,
    "category": "Gas flarinl"
  },
  {
    "year": "1995",
    "value": 2560,
    "category": "Liquid fuel"
  },
  {
    "year": "1995",
    "value": 2359,
    "category": "Solid fuel"
  },
  {
    "year": "1995",
    "value": 1151,
    "category": "Gas fuel"
  },
  {
    "year": "1995",
    "value": 197,
    "category": "Cement production"
  },
  {
    "year": "1995",
    "value": 39,
    "category": "Gas flarinl"
  },
  {
    "year": "1996",
    "value": 2626,
    "category": "Liquid fuel"
  },
  {
    "year": "1996",
    "value": 2382,
    "category": "Solid fuel"
  },
  {
    "year": "1996",
    "value": 1198,
    "category": "Gas fuel"
  },
  {
    "year": "1996",
    "value": 203,
    "category": "Cement production"
  },
  {
    "year": "1996",
    "value": 40,
    "category": "Gas flarinl"
  },
  {
    "year": "1997",
    "value": 2701,
    "category": "Liquid fuel"
  },
  {
    "year": "1997",
    "value": 2409,
    "category": "Solid fuel"
  },
  {
    "year": "1997",
    "value": 1197,
    "category": "Gas fuel"
  },
  {
    "year": "1997",
    "value": 209,
    "category": "Cement production"
  },
  {
    "year": "1997",
    "value": 40,
    "category": "Gas flarinl"
  },
  {
    "year": "1998",
    "value": 2763,
    "category": "Liquid fuel"
  },
  {
    "year": "1998",
    "value": 2343,
    "category": "Solid fuel"
  },
  {
    "year": "1998",
    "value": 1224,
    "category": "Gas fuel"
  },
  {
    "year": "1998",
    "value": 209,
    "category": "Cement production"
  },
  {
    "year": "1998",
    "value": 36,
    "category": "Gas flarinl"
  },
  {
    "year": "1999",
    "value": 2741,
    "category": "Liquid fuel"
  },
  {
    "year": "1999",
    "value": 2310,
    "category": "Solid fuel"
  },
  {
    "year": "1999",
    "value": 1258,
    "category": "Gas fuel"
  },
  {
    "year": "1999",
    "value": 217,
    "category": "Cement production"
  },
  {
    "year": "1999",
    "value": 35,
    "category": "Gas flarinl"
  },
  {
    "year": "2000",
    "value": 2845,
    "category": "Liquid fuel"
  },
  {
    "year": "2000",
    "value": 2327,
    "category": "Solid fuel"
  },
  {
    "year": "2000",
    "value": 1289,
    "category": "Gas fuel"
  },
  {
    "year": "2000",
    "value": 226,
    "category": "Cement production"
  },
  {
    "year": "2000",
    "value": 46,
    "category": "Gas flarinl"
  },
  {
    "year": "2001",
    "value": 2848,
    "category": "Liquid fuel"
  },
  {
    "year": "2001",
    "value": 2445,
    "category": "Solid fuel"
  },
  {
    "year": "2001",
    "value": 1316,
    "category": "Gas fuel"
  },
  {
    "year": "2001",
    "value": 237,
    "category": "Cement production"
  },
  {
    "year": "2001",
    "value": 47,
    "category": "Gas flarinl"
  },
  {
    "year": "2002",
    "value": 2832,
    "category": "Liquid fuel"
  },
  {
    "year": "2002",
    "value": 2518,
    "category": "Solid fuel"
  },
  {
    "year": "2002",
    "value": 1342,
    "category": "Gas fuel"
  },
  {
    "year": "2002",
    "value": 252,
    "category": "Cement production"
  },
  {
    "year": "2002",
    "value": 49,
    "category": "Gas flarinl"
  },
  {
    "year": "2003",
    "value": 2958,
    "category": "Liquid fuel"
  },
  {
    "year": "2003",
    "value": 2695,
    "category": "Solid fuel"
  },
  {
    "year": "2003",
    "value": 1397,
    "category": "Gas fuel"
  },
  {
    "year": "2003",
    "value": 276,
    "category": "Cement production"
  },
  {
    "year": "2003",
    "value": 48,
    "category": "Gas flarinl"
  },
  {
    "year": "2004",
    "value": 3043,
    "category": "Liquid fuel"
  },
  {
    "year": "2004",
    "value": 2906,
    "category": "Solid fuel"
  },
  {
    "year": "2004",
    "value": 1443,
    "category": "Gas fuel"
  },
  {
    "year": "2004",
    "value": 298,
    "category": "Cement production"
  },
  {
    "year": "2004",
    "value": 54,
    "category": "Gas flarinl"
  },
  {
    "year": "2005",
    "value": 3068,
    "category": "Liquid fuel"
  },
  {
    "year": "2005",
    "value": 3108,
    "category": "Solid fuel"
  },
  {
    "year": "2005",
    "value": 1485,
    "category": "Gas fuel"
  },
  {
    "year": "2005",
    "value": 320,
    "category": "Cement production"
  },
  {
    "year": "2005",
    "value": 60,
    "category": "Gas flarinl"
  },
  {
    "year": "2006",
    "value": 3091,
    "category": "Liquid fuel"
  },
  {
    "year": "2006",
    "value": 3293,
    "category": "Solid fuel"
  },
  {
    "year": "2006",
    "value": 1534,
    "category": "Gas fuel"
  },
  {
    "year": "2006",
    "value": 356,
    "category": "Cement production"
  },
  {
    "year": "2006",
    "value": 62,
    "category": "Gas flarinl"
  },
  {
    "year": "2007",
    "value": 3071,
    "category": "Liquid fuel"
  },
  {
    "year": "2007",
    "value": 3422,
    "category": "Solid fuel"
  },
  {
    "year": "2007",
    "value": 1562,
    "category": "Gas fuel"
  },
  {
    "year": "2007",
    "value": 382,
    "category": "Cement production"
  },
  {
    "year": "2007",
    "value": 66,
    "category": "Gas flarinl"
  },
  {
    "year": "2008",
    "value": 3103,
    "category": "Liquid fuel"
  },
  {
    "year": "2008",
    "value": 3587,
    "category": "Solid fuel"
  },
  {
    "year": "2008",
    "value": 1630,
    "category": "Gas fuel"
  },
  {
    "year": "2008",
    "value": 388,
    "category": "Cement production"
  },
  {
    "year": "2008",
    "value": 69,
    "category": "Gas flarinl"
  },
  {
    "year": "2009",
    "value": 3042,
    "category": "Liquid fuel"
  },
  {
    "year": "2009",
    "value": 3590,
    "category": "Solid fuel"
  },
  {
    "year": "2009",
    "value": 1584,
    "category": "Gas fuel"
  },
  {
    "year": "2009",
    "value": 415,
    "category": "Cement production"
  },
  {
    "year": "2009",
    "value": 66,
    "category": "Gas flarinl"
  },
  {
    "year": "2010",
    "value": 3107,
    "category": "Liquid fuel"
  },
  {
    "year": "2010",
    "value": 3812,
    "category": "Solid fuel"
  },
  {
    "year": "2010",
    "value": 1696,
    "category": "Gas fuel"
  },
  {
    "year": "2010",
    "value": 446,
    "category": "Cement production"
  },
  {
    "year": "2010",
    "value": 67,
    "category": "Gas flarinl"
  },
  {
    "year": "2011",
    "value": 3134,
    "category": "Liquid fuel"
  },
  {
    "year": "2011",
    "value": 4055,
    "category": "Solid fuel"
  },
  {
    "year": "2011",
    "value": 1756,
    "category": "Gas fuel"
  },
  {
    "year": "2011",
    "value": 494,
    "category": "Cement production"
  },
  {
    "year": "2011",
    "value": 64,
    "category": "Gas flarinl"
  },
  {
    "year": "2012",
    "value": 3200,
    "category": "Liquid fuel"
  },
  {
    "year": "2012",
    "value": 4106,
    "category": "Solid fuel"
  },
  {
    "year": "2012",
    "value": 1783,
    "category": "Gas fuel"
  },
  {
    "year": "2012",
    "value": 519,
    "category": "Cement production"
  },
  {
    "year": "2012",
    "value": 65,
    "category": "Gas flarinl"
  },
  {
    "year": "2013",
    "value": 3220,
    "category": "Liquid fuel"
  },
  {
    "year": "2013",
    "value": 4126,
    "category": "Solid fuel"
  },
  {
    "year": "2013",
    "value": 1806,
    "category": "Gas fuel"
  },
  {
    "year": "2013",
    "value": 554,
    "category": "Cement production"
  },
  {
    "year": "2013",
    "value": 68,
    "category": "Gas flarinl"
  },
  {
    "year": "2014",
    "value": 3280,
    "category": "Liquid fuel"
  },
  {
    "year": "2014",
    "value": 4117,
    "category": "Solid fuel"
  },
  {
    "year": "2014",
    "value": 1823,
    "category": "Gas fuel"
  },
  {
    "year": "2014",
    "value": 568,
    "category": "Cement production"
  },
  {
    "year": "2014",
    "value": 68,
    "category": "Gas flarinl"
  }
]



// offlineChartData.push({
//   x: new Date().getTime() + 1000 * 60 * 30 * 1,
//   y1: 39.23,
//   y2: 40.97,
// });
// offlineChartData.push({
//   x: new Date().getTime() + 1000 * 60 * 30 * 2,
//   y1: 44.24,
//   y2: 43.60,
// });
// offlineChartData.push({
//   x: new Date().getTime() + 1000 * 60 * 30 * 3,
//   y1: 46.41,
//   y2: 42.52,
// });
// offlineChartData.push({
//   x: new Date().getTime() + 1000 * 60 * 30 * 4,
//   y1: 48.97,
//   y2: 45.21,
// });
// offlineChartData.push({
//   x: new Date().getTime() + 1000 * 60 * 30 * 5,
//   y1: 51.80,
//   y2: 44.03,
// });
// offlineChartData.push({
//   x: new Date().getTime() + 1000 * 60 * 30 * 6,
//   y1: 53.71,
//   y2: 43.06,
// });
// offlineChartData.push({
//   x: new Date().getTime() + 1000 * 60 * 30 * 7,
//   y1: 60.06,
//   y2: 42.87,
// });
// offlineChartData.push({
//   x: new Date().getTime() + 1000 * 60 * 30 * 8,
//   y1: 65.92,
//   y2: 42.58,
// });
// offlineChartData.push({
//   x: new Date().getTime() + 1000 * 60 * 30 * 9,
//   y1: 69.55,
//   y2: 44.11,
// });





const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const getNotice = [
  {
    id: 'xxx1',
    title: titles[0],
    logo: avatars[0],
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    updatedAt: new Date(),
    member: '科学搬砖组',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx2',
    title: titles[1],
    logo: avatars[1],
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    updatedAt: new Date('2017-07-24'),
    member: '全组都是吴彦祖',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx3',
    title: titles[2],
    logo: avatars[2],
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    updatedAt: new Date(),
    member: '中二少女团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx4',
    title: titles[3],
    logo: avatars[3],
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    updatedAt: new Date('2017-07-23'),
    member: '程序员日常',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx5',
    title: titles[4],
    logo: avatars[4],
    description: '凛冬将至',
    updatedAt: new Date('2017-07-23'),
    member: '高逼格设计天团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[5],
    logo: avatars[5],
    description: '生命就像一盒巧克力，结果往往出人意料',
    updatedAt: new Date('2017-07-23'),
    member: '骗你来学计算机',
    href: '',
    memberLink: '',
  },
];

const getActivities = [
  {
    id: 'trend-1',
    updatedAt: new Date(),
    user: {
      name: '曲丽丽',
      avatar: avatars2[0],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-2',
    updatedAt: new Date(),
    user: {
      name: '付小小',
      avatar: avatars2[1],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-3',
    updatedAt: new Date(),
    user: {
      name: '林东东',
      avatar: avatars2[2],
    },
    group: {
      name: '中二少女团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-4',
    updatedAt: new Date(),
    user: {
      name: '周星星',
      avatar: avatars2[4],
    },
    project: {
      name: '5 月日常迭代',
      link: 'http://github.com/',
    },
    template: '将 @{project} 更新至已发布状态',
  },
  {
    id: 'trend-5',
    updatedAt: new Date(),
    user: {
      name: '朱偏右',
      avatar: avatars2[3],
    },
    project: {
      name: '工程效能',
      link: 'http://github.com/',
    },
    comment: {
      name: '留言',
      link: 'http://github.com/',
    },
    template: '在 @{project} 发布了 @{comment}',
  },
  {
    id: 'trend-6',
    updatedAt: new Date(),
    user: {
      name: '乐哥',
      avatar: avatars2[5],
    },
    group: {
      name: '程序员日常',
      link: 'http://github.com/',
    },
    project: {
      name: '品牌迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
];

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

const radarData: any[] = [];
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

export default {
  'GET  /api/project/notice': getNotice,
  'GET  /api/activities': getActivities,
  'GET  /api/fake_chart_data': {
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
  },

  'GET  /api/currentUser': {
    name: 'renjiamin',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    // group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  },
};
