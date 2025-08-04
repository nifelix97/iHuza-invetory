import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { ProductProvider } from './context/ProductContext'
import { CategoryProvider } from './context/CategoryContext'
import AppRoutes from './routes/AppRoutes'
import { CheckLoggedInProvider } from './context/CheckLoggedInContext'

function App() {
  return (
    <ThemeProvider>
      <CheckLoggedInProvider>
      <UserProvider>
        <CategoryProvider>
          <ProductProvider>
            <AppRoutes />
          </ProductProvider>
        </CategoryProvider>
      </UserProvider>
      </CheckLoggedInProvider>
    </ThemeProvider>
  )
}

export default App;