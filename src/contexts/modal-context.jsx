import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ ...props }) => {
  const [openSignUp, setOpenSignUp] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)

  const handleOpenSignUp = () => setOpenSignUp(true)
  const handleCloseSignUp = () => setOpenSignUp(false)

	const handleOpenLogin = () => setOpenLogin(true)
	const handleCloseLogin = () => setOpenLogin(false)

	const values = {openSignUp, handleOpenSignUp, handleCloseSignUp, openLogin, handleOpenLogin, handleCloseLogin};
	return (
		<ModalContext.Provider
			value={values}
			{...props}
		></ModalContext.Provider>
	);
};

const useModal = () => {
  const context = useContext(ModalContext)
  if(typeof context === 'undefined') throw new Error('useModal must be used in ModalProvider')
  return context
}

export {useModal, ModalProvider}
