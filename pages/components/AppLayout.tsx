import React from "react";

interface ISignup {
    children: React.ReactNode;
}

const AppLayout: React.FC<ISignup> = ({ children }) => {
    return (
        <div>
            <div>공통메뉴</div>
            {children}
        </div>
    );
};

export default AppLayout;
