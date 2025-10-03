import React from 'react';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-2 bg-white border border-gray-300 rounded-md shadow-lg">
                <p className="font-semibold text-purple-800">{payload[0].name}</p>
                <p className="text-sm text-gray-600">
                    Amount: <span className="font-bold text-gray-800">${payload[0].value}</span>
                </p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;