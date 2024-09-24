import React, {
	createContext,
	PropsWithChildren,
	ReactNode,
	useContext,
	useState,
} from "react";

const ModalContext = createContext<any>(null);

const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [modalShow, setModalShow] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<ReactNode>(<></>);

	const values = { modalShow, setModalShow, modalContent, setModalContent };
	return (
		<ModalContext.Provider value={values}>{children}</ModalContext.Provider>
	);
};

const useModal = () => {
	const context = useContext(ModalContext);
	if (typeof context === "undefined") {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

export { ModalProvider, useModal };
