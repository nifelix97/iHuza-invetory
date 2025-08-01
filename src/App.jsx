import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { ProductProvider } from './context/ProductContext'
import { CategoryProvider } from './context/CategoryContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CategoryProvider>
          <ProductProvider>
            <AppRoutes />
          </ProductProvider>
        </CategoryProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App;