import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/main-layout";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={ <MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/auth">
                </Route>
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
