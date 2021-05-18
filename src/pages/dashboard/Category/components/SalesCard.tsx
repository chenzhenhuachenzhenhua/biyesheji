import { Card, Col, DatePicker, Row, Tabs } from 'antd';
import { FormattedMessage, formatMessage } from 'umi';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type moment from 'moment';

import React from 'react';
import numeral from 'numeral';
import type { VisitDataType } from '../data.d';
import { Bar } from './Charts';
import styles from '../style.less';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

const rankingListData: { title: string; total: number }[] = [];
// for (let i = 0; i < 7; i += 1) {
//   rankingListData.push({
//     title: formatMessage({ id: 'dashboardandcategory.analysis.test' }, { no: i }),
//     total: 323234,
//   });
// }
rankingListData.push({
  title: '采矿业' ,
  total: 81.5,
});
rankingListData.push({
title: '公共管理、社会保障和社会组织' ,
total: 65.8,
});
rankingListData.push({
title: '制造业' ,
total: 56.4,
});
rankingListData.push({
title: '教育' ,
total: 55.2,
});
rankingListData.push({
title: '金融业' ,
total: 30.0,
});
rankingListData.push({
title: '建筑业' ,
total: 29.0,
});
rankingListData.push({
title: '卫生和社会工作' ,
total: 24.7,
});
rankingListData.push({
title: '交通运输、仓储和邮政业' ,
total: 21.1,
});
rankingListData.push({
title: '电力、热力、燃气及水生产和供应' ,
total: 15.8,
});
rankingListData.push({
title: '批发和零售业' ,
total: 13.6,
});
rankingListData.push({
title: '租赁和商务服务业' ,
total: 11.8,
});
rankingListData.push({
title: '科学研究和技术服务业' ,
total: 7.7,
});


type RangePickerValue = RangePickerProps<moment.Moment>['value'];

const SalesCard = ({
  rangePickerValue,
  salesData,
  isActive,
  handleRangePickerChange,
  loading,
  selectDate,
}: {
  rangePickerValue: RangePickerValue;
  isActive: (key: 'today' | 'week' | 'month' | 'year') => string;
  salesData: VisitDataType[];
  loading: boolean;
  handleRangePickerChange: (dates: RangePickerValue, dateStrings: [string, string]) => void;
  selectDate: (key: 'today' | 'week' | 'month' | 'year') => void;
}) => (
  <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
    <div className={styles.salesCard}>
      <Tabs
        tabBarExtraContent={
          <div className={styles.salesExtraWrap}>
            {/* <div className={styles.salesExtra}>
              <a className={isActive('today')} onClick={() => selectDate('today')}>
                <FormattedMessage id="dashboardandcategory.analysis.all-day" defaultMessage="All Day" />
              </a>
              <a className={isActive('week')} onClick={() => selectDate('week')}>
                <FormattedMessage id="dashboardandcategory.analysis.all-week" defaultMessage="All Week" />
              </a>
              <a className={isActive('month')} onClick={() => selectDate('month')}>
                <FormattedMessage id="dashboardandcategory.analysis.all-month" defaultMessage="All Month" />
              </a>
              <a className={isActive('year')} onClick={() => selectDate('year')}>
                <FormattedMessage id="dashboardandcategory.analysis.all-year" defaultMessage="All Year" />
              </a>
            </div> */}
            <RangePicker
              value={rangePickerValue}
              onChange={handleRangePickerChange}
              style={{ width: 256 }}
            />
          </div>
        }
        size="large"
        tabBarStyle={{ marginBottom: 24 }}
      >
        <TabPane
          tab={<FormattedMessage id="dashboardandcategory.analysis.sales" defaultMessage="Sales" />}
          key="sales"
        >
          <Row>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className={styles.salesBar}>
                <Bar
                  height={295}
                  title={
                    <FormattedMessage
                      id="dashboardandcategory.analysis.sales-trend"
                      defaultMessage="Sales Trend"
                    />
                  }
                  data={salesData}
                />
              </div>
            </Col>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className={styles.salesRank}>
                <h4 className={styles.rankingTitle}>
                  <FormattedMessage
                    id="dashboardandcategory.analysis.sales-ranking"
                    defaultMessage="Sales Ranking"
                  />
                </h4>
                <ul className={styles.rankingList}>
                  {rankingListData.map((item, i) => (
                    <li key={item.title}>
                      <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
                        {i + 1}
                      </span>
                      <span className={styles.rankingItemTitle} title={item.title}>
                        {item.title}
                      </span>
                      <span className={styles.rankingItemValue}>
                        {numeral(item.total).format('0,0')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane>
        {/* <TabPane
          tab={<FormattedMessage id="dashboardandcategory.analysis.visits" defaultMessage="Visits" />}
          key="views"
        >
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesBar}>
                <Bar
                  height={292}
                  title={
                    <FormattedMessage
                      id="dashboardandcategory.analysis.visits-trend"
                      defaultMessage="Visits Trend"
                    />
                  }
                  data={salesData}
                />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesRank}>
                <h4 className={styles.rankingTitle}>
                  <FormattedMessage
                    id="dashboardandcategory.analysis.visits-ranking"
                    defaultMessage="Visits Ranking"
                  />
                </h4>
                <ul className={styles.rankingList}>
                  {rankingListData.map((item, i) => (
                    <li key={item.title}>
                      <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
                        {i + 1}
                      </span>
                      <span className={styles.rankingItemTitle} title={item.title}>
                        {item.title}
                      </span>
                      <span>{numeral(item.total).format('0,0')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane> */}
      </Tabs>
    </div>
  </Card>
);

export default SalesCard;
