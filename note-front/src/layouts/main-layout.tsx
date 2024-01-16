import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <main className="flex flex-col items-center min-h-screen bg-gray-950 h-full w-full">
            <Outlet />
        </main>
    );
};

export default MainLayout;
