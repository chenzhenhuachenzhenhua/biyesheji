import { ConsoleSqlOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card,Col, Dropdown, Menu, Row } from 'antd';
import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import type { RadioChangeEvent } from 'antd/es/radio';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type moment from 'moment';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import IntroduceRow from './components/IntroduceRow';
import SalesCard from './components/SalesCard';
import TopSearch from './components/TopSearch';
import ProportionSales from './components/ProportionSales';
import OfflineData from './components/OfflineData';
import { Line } from '@ant-design/charts';
import { getTimeDistance } from './utils/utils';
import type { AnalysisData } from './data.d';
import styles from './style.less';

type RangePickerValue = RangePickerProps<moment.Moment>['value'];

type DashboardIndustryProps = {
  dashoboardjobAndDashboardIndustry: AnalysisData;
  dispatch: Dispatch;
  loading: boolean;
};

type DashboardIndustryState = {
  salesType: 'all' | 'online' | 'stores';
  currentTabKey: string;
  rangePickerValue: RangePickerValue;
};

class DashboardIndustry extends Component<
  DashboardIndustryProps,
  DashboardIndustryState
> {
  state: DashboardIndustryState = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };

  reqRef: number = 0;

  timeoutId: number = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'dashoboardjobAndDashboardIndustry/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashoboardjobAndDashboardIndustry/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = (e: RadioChangeEvent) => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = (key: string) => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = (rangePickerValue: RangePickerValue) => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });

    dispatch({
      type: 'dashoboardjobAndDashboardIndustry/fetchSalesData',
    });
  };

  selectDate = (type: 'today' | 'week' | 'month' | 'year') => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    dispatch({
      type: 'dashoboardjobAndDashboardIndustry/fetchSalesData',
    });
  };

  isActive = (type: 'today' | 'week' | 'month' | 'year') => {
    const { rangePickerValue } = this.state;
    if (!rangePickerValue) {
      return '';
    }
    const value = getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0] as moment.Moment, 'day') &&
      rangePickerValue[1].isSame(value[1] as moment.Moment, 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };
 
  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    const { dashoboardjobAndDashboardIndustry, loading } = this.props;
    const {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = dashoboardjobAndDashboardIndustry;
    let salesPieData;
    if (salesType === 'all') {
      salesPieData = salesTypeData;
    } else {
      salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
    }
    const menu = (
      <Menu>
        <Menu.Item>操作一</Menu.Item>
        <Menu.Item>操作二</Menu.Item>
      </Menu>
    );

    const dropdownGroup = (
      <span className={styles.iconGroup}>
        <Dropdown overlay={menu} placement="bottomRight">
          <EllipsisOutlined />
        </Dropdown>
      </span>
    );

    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);
    const config = {
      data: offlineChartData,
      xField: 'year',
      yField: 'value',
      seriesField: 'category',
      xAxis: { type: 'time' },
      // yAxis: {
      //   label: {
      //     formatter: function formatter(v) {
      //       return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
      //         return ''.concat(s, ',');
      //       });
      //     },
      //   },
      // },
    };
    return (
      <GridContent>
        <React.Fragment>
          {/* <IntroduceRow loading={loading} visitData={visitData} />
          <SalesCard
            rangePickerValue={rangePickerValue}
            salesData={salesData}
            isActive={this.isActive}
            handleRangePickerChange={this.handleRangePickerChange}
            loading={loading}
            selectDate={this.selectDate}
          />
          <Row
            gutter={24}
            style={{
              marginTop: 24,
            }}
          >
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <TopSearch
                loading={loading}
                visitData2={visitData2}
                searchData={searchData}
                dropdownGroup={dropdownGroup}
              />
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <ProportionSales
                dropdownGroup={dropdownGroup}
                salesType={salesType}
                loading={loading}
                salesPieData={salesPieData}
                handleChangeSalesType={this.handleChangeSalesType}
              />
            </Col>
          </Row> */}
          {/* <OfflineData
            activeKey={activeKey}
            loading={loading}
            offlineData={offlineData}
            offlineChartData={offlineChartData}
            handleTabChange={this.handleTabChange}
          /> */}
           <Card  title="各行业就业率（%）" bordered={true} style={{ marginTop: 24 }}>
          <Line {...config} />
          </Card>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default connect(
  ({
    dashoboardjobAndDashboardIndustry,
    loading,
  }: {
    dashoboardjobAndDashboardIndustry: any;
    loading: {
      effects: Record<string, boolean>;
    };
  }) => ({
    dashoboardjobAndDashboardIndustry,
    loading: loading.effects['dashoboardjobAndDashboardIndustry/fetch'],
  }),
)(DashboardIndustry);
