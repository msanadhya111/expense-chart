import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartPoints = [
        {label: 'Jan', val: 0},
        {label: 'Feb', val: 0},
        {label: 'Mar', val: 0},
        {label: 'Apr', val: 0},
        {label: 'May', val: 0},
        {label: 'Jun', val: 0},
        {label: 'July', val: 0},
        {label: 'Aug', val: 0},
        {label: 'Sep', val: 0},
        {label: 'Oct', val: 0},
        {label: 'Nov', val: 0},
        {label: 'Dec', val: 0},
    ]

    for (const dataPoint of props.dataPoints) {
        const month = dataPoint.date.getMonth();
        chartPoints[month] += dataPoint.amount;
    }

    return (
        <Chart dataPoints={chartPoints} />
    )
}

export default ExpensesChart;