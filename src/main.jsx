import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./main.css";
import Shop from "./Components/Shop.jsx";
import Cart from "./Components/Cart.jsx";
import Payment from "./Components/Payment.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import { CartProvider } from "./Context/cartContext.jsx";
import { ProductProvider } from "./Context/productContext.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/Shop",
        element: <Shop />,
    },
    {
        path: "/Cart",
        element: <Cart />,
    },
    { path: "/payment", element: <Payment /> },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProductProvider>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </ProductProvider>
    </StrictMode>
);
