import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareIncomeBarChartData } from "../../utils/helper";
import CustomBarChart from '../Charts/CustomBarChart';

const IncomeOverview = ({ transactions, onAddIncome, onDelete, onDownload }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareIncomeBarChartData(transactions);
        setChartData(result);

        return () => { }
    }, [transactions]);

    const totalIncome = transactions.reduce((sum, t) => sum + t.amount, 0);

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="">Income Overview</h5>
                <p className="text-xs text-gray-400 mt-0.5">
                    Track your earnings over time and analyze your income trends.</p>
            </div>

            <button className="" onClick={onAddIncome}>
                <LuPlus className="text-lg" />
                Add Income
            </button>

            <div className="mt-10"></div>

        </div>

    );
};

export default IncomeOverview;