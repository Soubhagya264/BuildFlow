import AuthProvider from "@/providers/AuthProvider";
import React from "react";


const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <div>{children}</div>;
};

export default MainLayout;
