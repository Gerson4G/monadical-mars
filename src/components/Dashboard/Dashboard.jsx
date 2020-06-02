import React from 'react';
import * as Styled from './components';
import Chart from '../Chart/Chart';

function Dashboard() {
  return (
    <Styled.Container className="App">
      <Chart />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Styled.Container>
  );
}

export default Dashboard;
