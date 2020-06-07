import React from 'react'
import { Line } from 'react-chartjs-2';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { tsvToJSON } from '../../utils';

export default function Chart() {

    const [temperatureData, setData] = React.useState(null);
    const [days, setDays] = React.useState(1);
    const [dayToShow, setDay] = React.useState(0);

    const getTemperaturesFromDay = (day = 1, temperatureSet = 1) => {
        return temperatureData.filter(data => data.Sol === day.toString()).map(
            temp => ({x: temp['Local Time'], y: temp[`T${temperatureSet} celsius`]})
        )
    }

    React.useEffect( () => {
        if(temperatureData){
            setDays(Math.max(...[...new Set(temperatureData.map( temp => parseInt(temp.Sol, 10)))]));
        }
        else{
            getData();
        }
    }, temperatureData)

    const getData = () => {
        fetch('./data/pathfinder_temperatures.tsv', {mode: 'no-cors'})
        .then(response => response.text())
        .then(data=> setData(tsvToJSON(data)))
    }

    let data = null;
    if(temperatureData)
    data = {
        labels: temperatureData.filter(data => data.Sol === (dayToShow+1).toString()).map(temp => temp['Local Time']),
        datasets: [
            {
                label: 'T1',
                data: getTemperaturesFromDay(dayToShow+1, 1),
                borderColor: ['#ff6384'],
                backgroundColor: 'transparent',
                borderWidth: 1
            },
            {
                label: 'T2',
                data: getTemperaturesFromDay(dayToShow+1, 2),
                borderColor: ['#2babab'],
                backgroundColor: 'transparent',
                borderWidth: 1
            }, 
            {
                label: 'T3',
                data: getTemperaturesFromDay(dayToShow+1, 3),
                borderColor: ['#8c4d15'],
                backgroundColor: 'transparent',
                borderWidth: 1
            },
        ]
    }

    const renderTabs = () => {
        let tabs = [];
        for(let i = 1; i < days; i++){
            tabs = tabs.concat(<Tab key={i} label={`Day ${i}`} {...a11yProps(i)} />);
        }
        return tabs;
    }

    return (
        <div style={{
              flexGrow: 1,
                width: '100%',
        }}>
            <AppBar position="static" color="default">
                <Tabs
                  value={dayToShow}
                  onChange={(e, day) => setDay(day)}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                    { renderTabs().map(a => a) }
                </Tabs>
            </AppBar>
            {data ? <Line data={data} height={100} /> : null}
        </div>
    )

}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}