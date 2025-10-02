import React from 'react'
import { LuUtensils, LuTrendingUp, LuTrendingDown, LuTrash2 } from 'react-icons/lu'

const TransactionInfoCard = ({ title, icon, date, amount, type, hideDeleteBtn, onDelete }) => {
    const getAmountStyles = () => {
        return type === "income"
            ? "bg-green-50 text-green-500"
            : "bg-red-50 text-red-500";
    }

    return (
        <div className='group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60'>
            {/* Icon */}
            <div className='w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full'>
                {icon ? (
                    <img src={icon} alt={title} className='w-6 h-6' />
                ) : type === 'income' ? (
                    <LuTrendingUp />
                ) : type === 'expense' ? (
                    <LuTrendingDown />
                ) : (
                    <LuUtensils />
                )}
            </div>

            {/* Content */}
            <div className='flex-1 flex items-center justify-between'>
                <div className='text-sm text-gray-700 font-medium'>{title}</div>
                <div className='text-xs text-gray-500 mt-1'>{date}</div>
            </div>

            {/* Amount */}
            <div className={`font-medium ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                {amount}
            </div>

            {/* Delete Button */}
            {!hideDeleteBtn && (
                <button className='ml-2 text-gray-400 hover:text-red-500'
                    onClick={onDelete}>
                    <LuTrash2 size={18} />
                </button>
            )}

            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
                <h6 className='text-xs font-medium'>
                    {type === "income" ? "+" : "-"} ${amount}
                </h6>
                {type === 'income' ? <LuTrendingUp /> : <LuTrendingDown />}
            </div>
        </div>
    )
}

export default TransactionInfoCard
