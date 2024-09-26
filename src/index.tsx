import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "store/store";
import "swiper/css";
import { ModalProvider } from "context/modal-context";
import { Modal } from "components/modal";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<BrowserRouter>
			<ModalProvider>
				<Modal />
				<App />
				<ToastContainer
					hideProgressBar
					position="top-center"
					pauseOnHover={false}
					closeOnClick={false}
					transition={Slide}
				/>
			</ModalProvider>
		</BrowserRouter>
	</Provider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
