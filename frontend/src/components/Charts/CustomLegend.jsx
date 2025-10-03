import React from 'react'

const CustomLegend = ({ payload }) => {
    return (
        <div className="flex flex-wrap justify-center p-2 mt-4 text-sm">
            {payload.map((entry, index) => (
                <div
                    key={`legend-${index}`}
                    className="flex items-center mx-3 my-1 cursor-pointer hover:opacity-75 transition-opacity"
                >
                    {/* Color Indicator */}
                    <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: entry.color }}
                    ></div>

                    {/* Legend Label */}
                    <span className="text-gray-600 font-medium">
                        {entry.value}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default CustomLegend