import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell // Used for custom bar colors
} from 'recharts';

const CustomBarChart = ({ data }) => {

    const getBarColor = (index) => {
        return index % 2 === 0 ? '#875cf5' : '#cfbefb';
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white shadow-md rounded-lg p-2 border border-gray-200">
                    <p className="text-xs font-semibold text-purple-800 mb-1">
                        {payload[0].name}
                    </p>
                    <p className="text-sm text-gray-600">
                        Amount:
                        <span className="text-sm font-medium text-gray-900 ml-1">
                            {/* Assuming the value is an amount, often formatted here */}
                            ${payload[0].value}
                        </span>
                    </p>
                </div>
            )
        }
        return null;
    };

    return (
        <div className="bg-white mt-6">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>

                    {/* Grid Lines */}
                    <CartesianGrid stroke="none" />

                    {/* X-Axis (e.g., Months or Categories) */}
                    <XAxis
                        dataKey="month" // Assuming the data has a 'month' key for the x-axis
                        tick={{ fontSize: 12, fill: "#555" }}
                        stroke="none"
                    />

                    {/* Y-Axis (e.g., Amounts) */}
                    <YAxis
                        tick={{ fontSize: 12, fill: "#555" }}
                        stroke="none"
                    />

                    {/* Tooltip on Hover */}
                    <Tooltip content={<CustomTooltip />} />

                    {/* The main bar visualization */}
                    <Bar
                        dataKey="amount"
                        fill="#FF8042" // Default fill color
                        radius={[10, 10, 0, 0]} // Rounded corners on the top
                        activeDot={{ r: 8, fill: "yellow" }}
                        activeStyle={{ fill: "green" }}
                    >
                        {/* Custom coloring for each bar using Cell component */}
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={getBarColor(index)}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomBarChart;