import React from 'react';
import * as Styled from './components';
import Chart from '../Chart/Chart';
import Slideshow from '../Slideshow/Slideshow';

function Dashboard() {
  return (
    <Styled.Container className="App">
      <Chart />
      <Slideshow />
      <div></div>
      <div></div>
      <div></div>
    </Styled.Container>
  );
}

export default Dashboard;
