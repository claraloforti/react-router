import { BrowserRouter, Routes, Route } from "react-router-dom"; // Componenti di React Router per gestire la navigazione
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}> {/* Wrapper comune per tutte le route figlie che contiene Navbar e Footer fissi e Outlet dinamico */}
          <Route index element={<HomePage />} />
          <Route path="/chisiamo" element={<AboutUs />} />
          <Route path="/prodotti" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
