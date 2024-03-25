import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import { ModalProvider } from "contexts/modal-context";
import { AuthProvider } from "contexts/auth-context";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
				<AuthProvider>
					<ModalProvider>
						<App />
						<ToastContainer autoClose={2000} hideProgressBar theme="dark" position="top-right" />
					</ModalProvider>
				</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
reportWebVitals();
