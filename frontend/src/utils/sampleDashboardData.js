export const sampleDashboardData = {
    // --- 1. Info Cards Data ---
    totalBalance: 7850.50, // totalIncome - totalExpense
    totalIncome: 12500.00,
    totalExpense: 4649.50,

    // --- 2. Pie Chart Data (Implicitly used by FinanceOverview) ---
    // The FinanceOverview component will use the totals above to build its chart data.
    // The colors array for the Pie Chart (COLORS) should be defined elsewhere:
    // const COLORS = ['#8884d8', '#ffc658', '#ff7300']; // Example colors

    // --- 3. Recent Transactions (Used by RecentTransactions component) ---
    // Note: This includes both income and expense for the RecentTransactions component
    recentTransactions: [
        { _id: 't01', type: 'expense', category: 'Groceries', amount: 85.25, date: '2025-10-02T10:00:00Z', icon: '🛒' },
        { _id: 't02', type: 'income', source: 'Freelance Pmt', amount: 5000.00, date: '2025-09-30T15:30:00Z', icon: '💼' },
        { _id: 't03', type: 'expense', category: 'Rent', amount: 1500.00, date: '2025-09-28T09:00:00Z', icon: '🏠' },
        { _id: 't04', type: 'expense', category: 'Utilities', amount: 125.00, date: '2025-09-27T11:45:00Z', icon: '💡' },
        { _id: 't05', type: 'income', source: 'Salary', amount: 7500.00, date: '2025-09-25T08:15:00Z', icon: '🏦' },
    ],

    // --- 4. Last 30 Days Expenses (Used by Last30DaysExpense & ExpenseTransactions) ---
    last30DaysExpenses: {
        // This is the array used for the Bar Chart and the ExpenseTransactions list
        transactions: [
            // Data structured for the prepareExpenseBarChartData function
            // (which expects category/amount to process into chart data)
            { _id: 'e11', type: 'expense', category: 'Groceries', amount: 150.00, date: '2025-10-01', month: 'Oct' },
            { _id: 'e12', type: 'expense', category: 'Dining Out', amount: 55.50, date: '2025-09-29', month: 'Sep' },
            { _id: 'e13', type: 'expense', category: 'Transport', amount: 35.00, date: '2025-09-25', month: 'Sep' },
            { _id: 'e14', type: 'expense', category: 'Groceries', amount: 90.00, date: '2025-09-22', month: 'Sep' },
            { _id: 'e15', type: 'expense', category: 'Shopping', amount: 250.00, date: '2025-09-18', month: 'Sep' },
        ],
        // ...other properties
    }
};