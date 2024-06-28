import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Products, { loader as productLoader } from "../views/Products";
import NewProduct, { action as newProductAction } from "../views/NewProduct";
import EditProduct, { loader as editProductLoader, action as editProductAction } from "../views/EditProduct";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Products />,
                    loader: productLoader
                },
                {
                    path: "productos/nuevo",
                    element: <NewProduct />,
                    action: newProductAction
                },
                {
                    path: "productos/:id/editar",
                    element: <EditProduct />,
                    loader: editProductLoader,
                    action: editProductAction
                }
            ]
        },

]
)