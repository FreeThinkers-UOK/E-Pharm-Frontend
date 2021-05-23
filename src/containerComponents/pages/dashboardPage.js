import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { CardBarChart2, OverviewSalesCard, SalesTargetWrap } from '../dashboard/style';
import { Main } from '../common/styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import AverageSalesRevenue from '../dashboard/AverageSalesRevenue';
import RecentOrder from '../dashboard/RecentOrder';
import TopSellingProduct from '../dashboard/TopSellingProduct';

const DashboardPage = () => {
  return (
    <>
      <Main className="grid-boxed page-body">
        <Row gutter={25}>
          <Col lg={8} xs={24}>
            <Cards headless>
              <OverviewSalesCard>
                <div className="icon-box box-warning">
                  <img src={require('../../static/img/icon/New Customer.svg')} alt="" />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>7,461</h2>
                    <span>New Customer</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
              </OverviewSalesCard>
            </Cards>

            <Cards headless>
              <OverviewSalesCard>
                <div className="icon-box box-primary">
                  <img src={require('../../static/img/icon/SalesRevenue.svg')} alt="" />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>$28,947</h2>
                    <span>Sales Revenue</span>
                    <p>
                      <span className="growth-downward">
                        <FeatherIcon icon="arrow-down" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
              </OverviewSalesCard>
            </Cards>

            <Cards headless>
              <OverviewSalesCard>
                <div className="icon-box box-success">
                  <img src={require('../../static/img/icon/Profit.svg')} alt="" />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>$3,241</h2>
                    <span>Profit</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
              </OverviewSalesCard>
            </Cards>
          </Col>
          <Col lg={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AverageSalesRevenue />
            </Suspense>
          </Col>
          <Col lg={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SalesTargetWrap />
            </Suspense>
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              {/* <SalesGrowth /> */}
            </Suspense>
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              {/* <TopCountriesRevenue /> */}
            </Suspense>
          </Col>
          <Col md={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TopSellingProduct />
            </Suspense>
          </Col>
          <Col md={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <RecentOrder />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default DashboardPage;
