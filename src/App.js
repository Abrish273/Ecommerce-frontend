import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetails";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// Protected Users Pages
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
//Components
import ProtectedRoutesComponent from "./component/ProtectedRoutesComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import RoutesWithUserChatComponent from "./component/user/RoutesWithUserChatComponent";

// Protected Admin Pages
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrdersDetailsPage from "./pages/admin/AdminOrdersDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <HeaderComponent />
        <Routes>
          <Route element={<RoutesWithUserChatComponent />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/product-details" element={<ProductDetailsPage />} />
            <Route
              path="/product-details/:id"
              element={<ProductDetailsPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* User Protected Routes */}
            <Route element={<ProtectedRoutesComponent admin={false} />}>
              <Route path="/user" element={<UserProfilePage />} />
              <Route path="/user/my-orders" element={<UserOrdersPage />} />
              <Route
                path="/user/cart-details"
                element={<UserCartDetailsPage />}
              />
              <Route
                path="/user/order-details"
                element={<UserOrderDetailsPage />}
              />
            </Route>
          </Route>
          <Route element={<ProtectedRoutesComponent admin={true} />}>
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
            <Route path="/admin/products" element={<AdminProductPage />} />
            <Route
              path="/admin/create-new-product"
              element={<AdminCreateProductPage />}
            />
            <Route
              path="/admin/edit-product"
              element={<AdminEditProductPage />}
            />
            <Route
              path="/admin/order-details"
              element={<AdminOrdersDetailsPage />}
            />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/admin/chats" element={<AdminChatsPage />} />
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          </Route>
          <Route path="*" element="Page Not Found 404" />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
