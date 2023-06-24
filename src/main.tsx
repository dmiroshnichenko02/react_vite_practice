import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/screens/home/Home";
import "./assets/styles/global.css";
import Router from "./components/ui/Router";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
