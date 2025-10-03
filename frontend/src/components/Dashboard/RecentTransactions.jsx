import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const RecentTransactions = ({ transactions = [], onSeeMore, onDelete }) => {
    return (
        <div className="card">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-medium">Recent Transactions</h5>

                <button className="card-btn" onClick={onSeeMore}>
                    See All <LuArrowRight className="text-base" />
                </button>
            </div>

            {/* Transactions List */}
            <div className="mt-6    ">
                {transactions.length > 0 ? (
                    transactions.slice(0, 5).map((item) => (
                        <TransactionInfoCard
                            key={item._id}
                            title={item.type === 'expense' ? item.category : item.source}
                            icon={item.icon}
                            date={moment(item.date).format("Do MMM YYYY")}
                            amount={item.amount}
                            type={item.type}
                            hideDeleteBtn={!onDelete}
                            onDelete={() => { onDelete?.(item._id) }}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">No recent transactions</p>
                )}
            </div>
        </div>
    );
};

export default RecentTransactions;
