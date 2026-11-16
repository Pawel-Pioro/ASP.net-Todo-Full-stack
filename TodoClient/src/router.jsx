import { createBrowserRouter } from "react-router"
import { getTodos } from "@/features/todos/api"

import Layout from "@/layouts/layout.jsx"
import TodoPage from "@/routes/TodoPage.jsx"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: TodoPage,
                loader: getTodos
            }
        ]
    }
])