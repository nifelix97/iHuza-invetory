import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { FiUser } from "react-icons/fi";

export default function Table() {
  const { users } = useUser();
  const UserDatas = users || [];

  const statusClasses = {
    Active: "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900",
    Inactive: "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900",
  };

  const role = {
    Admin:
      "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900",
    Staff: "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700",
    Manager:
      "text-primary-600 bg-primary-100 dark:text-primary-400 dark:bg-primary-900",
  };

  return (
    <div className="p-3 md:p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg dark:border-gray-700 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
          Users
        </h1>
        <button className="px-3 py-2 md:px-4 bg-primary-600 dark:bg-primary-700 text-white rounded hover:bg-primary-700 dark:hover:bg-primary-800 transition-colors text-sm">
          Add User
        </button>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-secondary-500 dark:bg-secondary-50">
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Last Login
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {UserDatas.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-4 lg:px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-2xl bg-gray-300 flex items-center justify-center">
                    <FiUser className="text-secondary-50 dark:text-gray-500 size-4" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {user.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </div>
                  </div>
                </td>
                <td className="px-4 lg:px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      role[user.role] ||
                      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 lg:px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusClasses[user.status] ||
                      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 lg:px-6 py-4 text-sm text-gray-900 dark:text-white">
                  {user.lastLogin}
                </td>
                <td className="px-4 lg:px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {UserDatas.map((user) => (
          <div
            key={user.id}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
              <div className="flex gap-2 ml-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    role[user.role] ||
                    "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                  }`}
                >
                  {user.role}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusClasses[user.status] ||
                    "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Last Login:{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  {user.lastLogin}
                </span>
              </div>

              <div className="flex gap-3">
                <button className="text-blue-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-300 text-sm">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
