import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Login from "modules/modal/Login";
import SignUp from "modules/modal/SignUp";

const Wrapper = () => {
	// Component for layout divide
	return (
		<div className="grid grid-cols-[auto_1fr] h-[100vh]">
			<Nav></Nav>
      <Main>
        <Header></Header>
        <Outlet></Outlet>
      </Main>
			<>
				<Login></Login>
				<SignUp></SignUp>
			</>
		</div>
	);
};

export default Wrapper;
