import React from 'react'
import { Line } from 'react-chartjs-2';
import { tsvToJSON } from '../../utils';

export default function Chart() {

    const [temperatureData, setData] = React.useState(null);

    React.useEffect( () => {
        getData();
    }, [])

    const getData = () => {
        fetch('./data/pathfinder_temperatures.tsv', {mode: 'no-cors'})
        .then(response => response.text())
        .then(data=> setData(tsvToJSON(data)))
    }

    let data = null;
    if(temperatureData)
    data = {
        labels: temperatureData.filter(data => data.Sol === '1').map(temp => temp['Local Time']),
        datasets: [
            {
                label: 'T1',
                data: temperatureData.filter(data => data.Sol === '1').map(
                    temp => ({x: temp['Local Time'], y: temp['T1 celsius']})
                ),
                borderColor: ['#ff6384'],
                backgroundColor: 'transparent',
                borderWidth: 1
            },
            {
                label: 'T2',
                data: temperatureData.filter(data => data.Sol === '1').map(
                    temp => ({x: temp['Local Time'], y: temp['T2 celsius']})
                ),
                borderColor: ['#2babab'],
                backgroundColor: 'transparent',
                borderWidth: 1
            }, 
            {
                label: 'T3',
                data: temperatureData.filter(data => data.Sol === '1').map(
                    temp => ({x: temp['Local Time'], y: temp['T3 celsius']})
                ),
                borderColor: ['#8c4d15'],
                backgroundColor: 'transparent',
                borderWidth: 1
            },
        ]
    }

    return (
        <div style={{
            //width: "100%", overflow: "auto hidden"
        }}>
            <div style={{
              //  height: "auto", width: "4500px"
            }}>
                    {data ? <Line data={data} height={100}/> : null}
            </div>
        </div>
    )

}
