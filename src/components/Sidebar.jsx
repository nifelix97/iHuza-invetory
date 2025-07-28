import React, { useState } from "react";
import { FiPackage, FiMenu, FiX, FiUsers } from "react-icons/fi";
import { GrPersonalComputer } from "react-icons/gr";
import { SlLayers } from "react-icons/sl";
import { CgMenuRightAlt } from "react-icons/cg";
import { useTheme } from "../hooks/useTheme";
import { LuLogOut } from "react-icons/lu";

export default function Sidebar() {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary-800 text-white rounded-md"
      >
        {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`
                fixed top-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
                ${
                  isSidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"
                }
                flex flex-col gap-2 h-screen w-64 p-4 shadow-lg
                bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
            `}
      >
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded">
            <FiPackage className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              iHUZA
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              INVENTORY
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <ul className="flex flex-col gap-2 flex-1">
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-white cursor-pointer text-gray-700 dark:text-gray-200 transition-colors">
              <GrPersonalComputer />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center justify-between gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-white cursor-pointer text-gray-700 dark:text-gray-200 transition-colors">
              <div className="flex items-center gap-2">
                <FiUsers />
                <span>Users</span>
              </div>
              <span className="bg-gray-400 text-white rounded-full text-xs px-2 py-0.5 font-semibold">
                116
              </span>
            </li>
            <li className="flex items-center justify-between gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-white cursor-pointer text-gray-700 dark:text-gray-200 transition-colors">
              <div className="flex items-center gap-2">
                <FiPackage />
                <span>Products</span>
              </div>
              <span className="bg-gray-400 text-white rounded-full text-xs px-2 py-0.5 font-semibold">
                100
              </span>
            </li>
            <li className="flex items-center justify-between gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-white cursor-pointer text-gray-700 dark:text-gray-200 transition-colors">
              <div className="flex items-center gap-2">
                <CgMenuRightAlt />
                <span>Assignments</span>
              </div>
              <span className="bg-gray-400 text-white rounded-full text-xs px-2 py-0.5 font-semibold">
                10
              </span>
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-white cursor-pointer text-gray-700 dark:text-gray-200 transition-colors">
              <SlLayers />
              <span>Categories</span>
            </li>
          </ul>
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-600">
            <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 cursor-pointer text-gray-700 dark:text-gray-200 transition-colors w-full">
              <LuLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
