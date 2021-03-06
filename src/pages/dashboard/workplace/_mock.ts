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
const averageWageData = [
  {
    x: '采矿业111',
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
    x: '交通运输1、仓储和邮政业',
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
    keyword: `大同市`,
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
    x: '民间组织',
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
    x: '民间组织',
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
  name: `吕梁市`,
  cvr: 0.079,
});

const offlineChartData = [
  {
    "year": "2020",
    "value": 44.1,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2019",
    "value": 42.6,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2018",
    "value": 42.9,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2017",
    "value": 43.1,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2016",
    "value": 44.0,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2015",
    "value": 45.2,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2014",
    "value": 46.4,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2013",
    "value": 43.6,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2012",
    "value": 41.0,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2011",
    "value": 39.4,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2010",
    "value": 25.0,
    "category": "城镇单位就业人员数（十万人）"
  },
  {
    "year": "2020",
    "value": 24.6,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2019",
    "value": 21.3,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2018",
    "value": 26.5,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2017",
    "value": 26.1,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2016",
    "value": 25.6,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2015",
    "value": 24.5,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2014",
    "value": 21.1,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2013",
    "value": 21.0,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2012",
    "value": 21.1,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2011",
    "value": 20.4,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2010",
    "value": 21.6,
    "category": "城镇失业人员数（万人）"
  },
  {
    "year": "2020",
    "value": 65.9,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2019",
    "value": 60.1,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2018",
    "value": 53.7,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2017",
    "value": 51.8,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2016",
    "value": 49.0,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2015",
    "value": 46.4,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2014",
    "value": 44.2,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2013",
    "value": 39.2,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2012",
    "value": 33.1,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2011",
    "value": 28.1,
    "category": "城镇就业人员平均工资（千元）"
  },
  {
    "year": "2010",
    "value": 25.5,
    "category": "城镇就业人员平均工资（千元）"
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
