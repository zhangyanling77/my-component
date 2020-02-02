import React from 'react';
import { Card, Avatar, Statistic, Icon, Row, Col } from 'antd';
// import { EmptyLine } from 'dantd';
import { routeCfg } from '../../config';
import './style.less';
import img1 from './pic1.png';
import img2 from './pic2.png';

const { Meta } = Card;

const Home = () => {
  const ndate = new Date();
  const hr = ndate.getHours();
  let hello = 'good morning';
  if (hr >= 12 && hr <= 17) {
    hello = 'good afternoon'
  }

  if (hr >= 17 && hr <= 24) {
    hello = 'good evening'
  }

  return (
    <div className='p-home'>
      <h3> 组件平台 </h3>
      {/* <EmptyLine /> */}
      <Row>
        <Col span={20}>
            <Meta
              avatar={<Avatar style={{ marginTop: 5 }} size="large" src={img1}/>}
              title={`${hello}，best wish for you !`}
              description="fighting !"
            />
        </Col>
        <Col style={{ marginTop: -13 }} span={4}>
          <Statistic
            title="当前组件总数"
            value={routeCfg[1].routes?.length}
            prefix={<Icon type="like" />}
          />
        </Col>
      </Row>
      <div className='img-wrapper'>
        <img src={img2} alt="组件平台"/>
      </div>
    </div>
  )
}