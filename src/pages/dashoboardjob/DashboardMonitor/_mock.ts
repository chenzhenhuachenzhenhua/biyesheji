import mockjs from 'mockjs';
const hotData = 
{"list":[{"name":"体育","value":83,"type":2},
{"name":"材料科学与工程","value":83,"type":2},
{"name":"英语","value":81,"type":1},
{"name":"安全与应急管理工程","value":81,"type":0},
{"name":"土木工程","value":80,"type":0},
{"name":"环境科学与工程","value":76,"type":0},
{"name":"机械与运载工程","value":78,"type":2},
{"name":"化学化工","value":95,"type":1},
{"name":"信息与计算机","value":76,"type":0},
{"name":"水利科学与工程","value":76,"type":2},
{"name":"电气与动力工程","value":75,"type":1},
{"name":"大数据工程","value":74,"type":0},
{"name":"物理与光电工程","value":73,"type":2},
{"name":"生物医学工程","value":73,"type":1},
{"name":"建筑","value":72,"type":0},
{"name":"矿业工程","value":70,"type":2},
{"name":"马克思","value":69,"type":2},
{"name":"数学","value":66,"type":2},
{"name":"轻纺工程","value":66,"type":0},
{"name":"软件工程","value":65,"type":1},
{"name":"经济管理","value":63,"type":0},
{"name":"文法","value":50,"type":2},
{"name":"艺术","value":46,"type":1}]};
export default {
  'GET  /api/tags_hot_industry': hotData,
};
