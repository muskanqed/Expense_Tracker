import React, { useContext } from 'react'
import { SIDE_MENU_DATA } from '../../utils/data'
import { UserContext } from '../../context/userContext'
import { useNavigate } from "react-router-dom"

const SideMenu = ({ activeMenu }) => {
    const { user, clearUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleClick = (route) => {
        if (route === "logout") {
            handleLogout()
            return;
        }

        navigate(route);
    }

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    }
    return (
        <div className="w-[220px] h-screen bg-white shadow-md p-5">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8">
                {user?.profileImageUrl ? (
                    <img
                        src={user?.profileImageUrl || ""}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover mb-3 border"
                    />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-3"></div>
                )}
                <h5 className="text-sm font-medium text-gray-800">
                    {user?.fullName || ""}
                </h5>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-2">
                {SIDE_MENU_DATA.map((item, index) => (
                    <button
                        key={`menu_${index}`}
                        className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
              ${activeMenu === item.label
                                ? "bg-purple-500 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                        onClick={() => handleClick(item.path)}
                    >
                        <item.icon
                            className={`w-5 h-5 ${activeMenu === item.label ? "text-white" : "text-gray-600"
                                }`}
                        />
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SideMenu
