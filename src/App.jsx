import { FiAlertTriangle, FiPackage, FiUsers } from 'react-icons/fi'
import { SiTicktick } from "react-icons/si"
import Cards from './components/Cards'
import Container from './components/Container'
import NavBar from './components/NavBar'
import Product from './components/Product'
import Sidebar from './components/Sidebar'
import Table from './components/Table'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { ProductProvider } from './context/ProductContext';


function App() {
  return (
    <ThemeProvider>
    <UserProvider>
      <div className='flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
        <Sidebar />
        
        <div className='flex-1 ml-0 lg:ml-64'>
          <NavBar />
          
          <main className='p-4 lg:p-6'>
            <Container />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
              <Cards 
                number={116}
                content="Total Users"
                variant="primary"
                className="w-full"
                width="w-full"
                icon={<FiUsers className='text-2xl text-primary-600' />}
              />
              <Cards 
                number={100}
                content="Total Products"
                variant="secondary"
                icon={<FiPackage className='text-2xl text-primary-600' />}
                className="w-full"
                width="w-full"
              />
              <Cards 
                number={10}
                content="Assigned Products"
                variant="success"
                className="w-full bg-secondary-100"
                width="w-full"
                iconBgColor="bg-secondary-100"
                icon={<SiTicktick  className='text-2xl text-green-500' />}
              />
              <Cards 
                number={90}
                content="Unassigned Products"
                variant="danger"
                className="w-full"
                width="w-full"
                iconBgColor="bg-secondary-200"
                icon={<FiAlertTriangle className='text-2xl text-orange-500' />}
              />
            </div>
            <div className='mt-6'>
              <ProductProvider>
                <Product />
              </ProductProvider>
            </div>
            <div className='mt-6'>
              <Table />
            </div>
          </main>
        </div>
      </div>
    </UserProvider>
    </ThemeProvider>
  )
}

export default App;