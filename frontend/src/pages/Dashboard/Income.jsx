import React, { useState, useEffect } from "react";
import DashboardLayout from '../../components/layouts/DashboardLayout';
import IncomeOverview from '../../components/Income/IncomeOverview';
import axiosInstance from "../../utils/axiosInstance";
import { API_PATH } from "../../utils/apiPath";
import Modal from "../../components/Modal";
import AddIncomeForm from "../../components/Income/AddIncomeForm";


const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(() => {
    return localStorage.getItem("openAddIncomeModal") === "true";
  });

  // Get all the income details
  const fetchIncomeDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(`${API_PATH.INCOME.GET_ALL_INCOME}`);

      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchIncomeDetails();
    return () => { }
  }, []);

  const handleAddIncome = async (income) => {
  }

  const deleteIncome = async (id) => {
  }

  // handle download income details (Placeholder Logic)
  const handleDownloadIncomeDetails = async () => {
    // Implement API call to download income data here
    console.log("Downloading income details...");
  }


  return (
    <DashboardLayout activeMenu="Income">
      <div className='my-5 mx-auto'>
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={openAddIncomeModal}
        onClose={() => { setOpenAddIncomeModal(false) }}
        title="Add Income"
      >
        <AddIncomeForm onAddIncome={handleAddIncome} />
      </Modal>
    </DashboardLayout>
  );
};

export default Income;