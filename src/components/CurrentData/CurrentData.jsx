import React, { useState, useEffect } from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, StyledCard } from './components';
import {FormattedMessage} from 'react-intl';
import { tsvOrCsvToJSON } from '../../utils';

const CurrentData = (props) => {

	const [data, setData] = useState({});

 	const getData = () => {
	    fetch('./data/viking_lander_data.csv', {mode: 'no-cors'})
	    .then(response => response.text())
	    .then(data=> setData(tsvOrCsvToJSON(data, 'csv').slice(-1)[0]))
	}

	useEffect( () => {
		if(!data?.Year){
			getData();
		}
	}, [data])


	return (
	    <div>
	    	<Container>
	    		<div>
			      	<StyledCard>
				      <CardContent>
				      	Mars time {`<something>`}
				      </CardContent>
				    </StyledCard>
			      	<StyledCard>
				      <CardContent>
				      	Local time {new Date().toLocaleString()}
				      </CardContent>
				    </StyledCard>
				</div>
				<div>
				    <StyledCard>
				      	<Content data={data.wind_m_sec} header='wind_speed'/>
				    </StyledCard>
			      	<StyledCard>
				      	<Content data={data['wind_deg.']} header='wind_degree'/>
				    </StyledCard>
			    	<StyledCard>
				      	<Content data={data.pressure_mb} header='pressure' />
				    </StyledCard>
			    	<StyledCard>
				      	<Content data={data.temp_C} header='temperature'/>
				    </StyledCard>
				</div>
	    	</Container>
	    </div>
  );
}

export default CurrentData;

const Content = ({data, children, header}) => (
	<CardContent>
		<h3>
			<FormattedMessage
	          id={`currentData.${header}`}
	          defaultMessage={header}
	        />
		</h3>
		{data ?? <CircularProgress />}
	</CardContent>
)