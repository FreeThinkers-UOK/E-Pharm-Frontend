import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../../container/styled';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';

const WastagePage = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Wastage Page"
        buttons={[
          <div key="6" className="page-header-actions">
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col lg={24} xs={24}>
            <Cards headless>
              <div style={{ minHeight: 'calc(100vh - 320px)' }}>
                <h2>Wastage implementation</h2>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default WastagePage;
