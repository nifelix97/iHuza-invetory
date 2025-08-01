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
        productImage: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111901_mbp16-gray.png", // Example image URL
        stockquantity: 50, // Example stock quantity
    },
    {
      id: 2,
      productTitle: "Dell XPS 13",
      productName: "Laptops",
      createdAt: "2023-01-02",
      stock: "Out of Stock",
      productImage: "https://www.pcworld.com/wp-content/uploads/2025/04/XPS-13-Graphite-4-large-1.jpg?quality=50&strip=all", // Example image URL
      stockquantity: 0, // Example stock quantity
    },
    {
      id: 3,
      productTitle: "iPhone 15 Pro",
      productName: "Mobile",
      createdAt: "2023-01-03",
      stock: "Low Stock",
      lastLogin: "20 minutes ago",
      productImage: "https://ringke.co.in/cdn/shop/files/61PwDleaLKL._SL1500.jpg?v=1695232349", // Example image URL
      stockquantity: 30, // Example stock quantity
    },
    {
      id: 4,
        productTitle: "iPad Air",
        productName: "Tablets",
      createdAt: "2023-01-04",
      stock: "In Stock",
      productImage: "https://www.tech21.com/cdn/shop/products/7082380a-d063-4355-b2b0-599c60e16582.jpg?v=1688382818&width=2880", // Example image URL
      stockquantity: 20, // Example stock quantity
    },
    {
      id: 5,
      productTitle: "Surface Pro 9",
      productName: "Tablets",
      createdAt: "2023-01-05",
      stock: "Out of Stock",
      productImage: "https://shop.winpro.com.my/cdn/shop/files/MSFT-View-Surface-Pro-9-Sapphire-Surface-Type-Cover-attached_4851daef-9713-4c5f-b40d-bd38d74361c9.png?v=1687943136", // Example image URL
      stockquantity: 0, // Example stock quantity
    },
    
  ]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
