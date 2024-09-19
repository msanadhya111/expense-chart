import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const amountArray = props.dataPoints.map((dataPoint) => dataPoint.value);

    const maxValue = Math.max(...amountArray);
    return (
        <div className='chart'>
            { props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar 
                        key={dataPoint.label}
                        value={dataPoint.value}
                        label={dataPoint.label}
                        maxValue={maxValue}
                    />
                )
            })}
        </div>
    )
}

export default Chart;