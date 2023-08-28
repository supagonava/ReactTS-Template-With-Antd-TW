import React, { createContext, useState } from "react";
import Router from "@/router/Router";

interface AuthenticateInterface {
    authenticated: {
        username?: string | null;
        role_id?: number | null;
    };
    setAuthenticated: React.Dispatch<React.SetStateAction<AuthenticateInterface["authenticated"]>>;
}

export const AuthContext = createContext<AuthenticateInterface>({
    authenticated: { username: null, role_id: null },
    setAuthenticated: () => {},
});

const App = () => {
    const [authenticated, setAuthenticated] = useState<AuthenticateInterface["authenticated"]>({ username: null, role_id: null });
    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
            <Router />
        </AuthContext.Provider>
    );
};

export default App;
