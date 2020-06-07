import React from 'react';
import * as Styled from './components';
import Chart from '../Chart/Chart';
import Slideshow from '../Slideshow/Slideshow';
import VideoFeed from '../VideoFeed/VideoFeed';
import TableData from '../TableData/TableData';

function Dashboard() {
  return (
    <Styled.Container className="App">
      <Chart />
      <Slideshow />
      <VideoFeed />
      <TableData />
      <div></div>
    </Styled.Container>
  );
}

export default Dashboard;
