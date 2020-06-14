import React from 'react'
import { Line } from 'react-chartjs-2';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {FormattedMessage} from 'react-intl';
import TextField from '@material-ui/core/TextField';
import { OptionsContainer } from './components';
import { tsvOrCsvToJSON } from '../../utils';

export default function Chart() {

    const [temperatureData, setData] = React.useState(null);
    const [days, setDays] = React.useState(1);
    const [dayToShow, setDay] = React.useState(0);
    const [query, setQuery] = React.useState('');

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
        .then(data=> setData(tsvOrCsvToJSON(data, 'tsv')))
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

    const optionsWidth = 200;
    const containerRef = React.useRef();

    const tabsSearch = ({target: {value}}) => {
        const [min] = value.match(/[0-9]*/) ?? '';
        setQuery(min);
        if(value){            
            const option = document.getElementById(`scrollable-auto-vertical-tab-${min}`);
            if(option){
                option.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
        }
    }

    return (
        <div
        ref={containerRef}
        style={{display: 'flex', width: "100%"}}>
            <div>
                <OptionsContainer width={optionsWidth}>
                    <AppBar position="static" color="default">
                        <TextField value={query} onChange={tabsSearch} label={<FormattedMessage id='chart.searchinput' default='' />} variant="filled" />
                        <Tabs
                            value={dayToShow}
                            onChange={(e, day) => setDay(day)}
                            indicatorColor="primary"
                            textColor="primary"
                            orientation="vertical"  
                          aria-label="scrollable auto tabs"
                        >
                            { renderTabs().map(a => a) }
                        </Tabs>
                    </AppBar>
                </OptionsContainer>
            </div>
            <div>
                {data ? <Line data={data} width={containerRef.current ? (containerRef.current.clientWidth - optionsWidth - 10) : 0} options={{
  responsive: true,
  maintainAspectRatio: false,
                }}/> : null}
            </div>
        </div>
    )

}

function a11yProps(index) {
  return {
    id: `scrollable-auto-vertical-tab-${index}`,
    'aria-controls': `scrollable-auto-vertical-tabpanel-${index}`,
  };
}