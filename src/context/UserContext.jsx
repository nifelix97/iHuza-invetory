import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(
   [
    {
      id: 1,
      name: "Jesca Aimee",
      email: "jesca@ihuza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      name: "Paccy Irakoze",
      email: "paccy@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1 day ago",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@ihuza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "20 minutes ago",
    },
  ]);
    const [users, setUsers] = useState(user);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};