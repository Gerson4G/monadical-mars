import React from 'react';
import * as Styled from './components';
import Chart from '../Chart/Chart';
import Slideshow from '../Slideshow/Slideshow';
import VideoFeed from '../VideoFeed/VideoFeed';
import TableData from '../TableData/TableData';
import CurrentData from '../CurrentData/CurrentData';

const Dashboard = (props) => {
	const { screen } = props;
	if(!screen || screen === 'dashboard'){
	  	return (
		    <Styled.Container className="App">
		      <Chart />
		      <Slideshow />
		      <VideoFeed />
		      <TableData />
		      <CurrentData />
		    </Styled.Container>
	  	);
	}
	else{
		return(
			<>
				{ screen === 'chart' && <Chart />}
				{ screen === 'slideshow' && <Slideshow />}
				{ screen === 'videofeed' && <VideoFeed />}
				{ screen === 'tabledata' && <TableData />}
				{ screen === 'currentdata' && <CurrentData />}
			</>
		);
	}

}

export default Dashboard;
