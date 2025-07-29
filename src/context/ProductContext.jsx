import { createContext, useState, useContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(
   [
    {
      id: 1,
        productTitle: "MacBook Pro 16",
        productName: "Laptops",
        createdAt: "2023-01-01",
        stock: "In Stock",
    },
    {
      id: 2,
      productTitle: "Dell XPS 13",
      productName: "Laptops",
      createdAt: "2023-01-02",
      stock: "Out of Stock",
    },
    {
      id: 3,
      productTitle: "iPhone 15 Pro",
      productName: "Mobile",
      createdAt: "2023-01-03",
      stock: "Low Stock",
      status: "Active",
      lastLogin: "20 minutes ago",
    },
    {
      id: 4,
        productTitle: "iPad Air",
        productName: "Tablets",
      createdAt: "2023-01-04",
      stock: "In Stock",
    },
    {
      id: 5,
      productTitle: "Surface Pro 9",
      productName: "Tablets",
      createdAt: "2023-01-05",
      stock: "Out of Stock",
    },
    
  ]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
