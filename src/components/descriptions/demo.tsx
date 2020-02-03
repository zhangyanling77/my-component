import React from 'react';
import { Card, Descriptions } from 'dantd';
import { Row, Col } from 'antd';
import { data1, data2 } from './mock';

const demo = () => {
  return (
    <div>
      <h3>组件名称：信息（Descriptions）</h3>
      <p>自定义组件，用于展示一个简单的信息列表</p>
      <Row gutter={24}>
        <Col span={12}>
          <Card antdProps={{title: '蕃剧'}}>
            <Descriptions title='蕃剧推荐' dataSource={data1} />
          </Card>
        </Col>
        <Col span={12}>
          <Card antdProps={{title: '电影'}}>
            <Descriptions dataSource={data2} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default demo;