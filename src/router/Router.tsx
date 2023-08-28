import { Spin } from "antd";
import { AuthContext } from "@/App";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate, useLocation, Outlet } from "react-router-dom";

const Router = () => {
    let { authenticated, setAuthenticated } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const initialFunc = async () => {
            setLoading(false);
        };
        initialFunc();
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-screen flex-col flex justify-center items-center gap-2">
                <Spin size="large"></Spin>
                <label>Loading Assets...</label>
            </div>
        );
    }

    const Layout = () => (
        <div className="flex flex-col">
            <p>Layout</p>
            <Outlet></Outlet>
        </div>
    );

    return (
        <Routes>
            <Route path="/login" index element={<>Log in</>} />
            <Route path="/" element={<Layout></Layout>}>
                <Route path="/" element={<>HOME</>} />
            </Route>
        </Routes>
    );
};

export default Router;
