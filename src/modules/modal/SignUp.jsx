import { Modal } from "@mui/material";
import { useModal } from "contexts/modal-context";
import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "firebaseConfig";
import { toast } from "react-toastify";
import { Input } from "components/input";
import { Button } from "components/button";
import { Link } from "react-router-dom";

const SignUp = () => {
	const { openSignUp, handleCloseSignUp, handleOpenLogin } = useModal();
	const { handleSubmit, register, reset } = useForm({ mode: "onChange" });
	const [loading, setLoading] = useState(false);

	const handleCreateUser = async (values) => {
		try {
			setLoading(true);
			await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password
			);
			await updateProfile(auth.currentUser, { displayName: values.username });
			toast.success("Create account successfully!", {delay: 400});
			setLoading(false);
			handleCloseSignUp();
			reset()
		} catch (error) {
			toast.error("Failed, please try again!");
			console.log(error);
		}
	};
	return (
		<Modal
			open={openSignUp}
			onClose={handleCloseSignUp}
		>
			<div className="fixed -translate-x-1/2 overflow-hidden -translate-y-1/2 bg-white top-1/2 left-1/2 rounded-xl w-[50%] h-[70%]">
			<div className="grid grid-cols-[2fr_3fr] xl:grid-cols-1 w-full h-full relative">
				<img
					src="https://compote.slate.com/images/721112a8-1fa9-4a48-8eeb-0c4f29e0d8f6.jpeg?crop=1554%2C1036%2Cx2%2Cy0"
					alt=""
					className="object-cover w-full h-full xl:hidden"
				/>
				<div className="text-black">
					<span
						onClick={handleCloseSignUp}
						className="absolute cursor-pointer top-5 right-5 opacity-60 hover:opacity-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					</span>
					<h2 className="text-[32px] font-semibold text-center mt-10">
						Sign Up
					</h2>
					<form
						className="px-16 mt-6"
						onSubmit={handleSubmit(handleCreateUser)}
					>
						<Input
							placeholder="Enter your username..."
							label="username"
							register={register}
						></Input>
						<Input
							placeholder="Enter your email..."
							label="email"
							register={register}
						></Input>
						<Input
							placeholder="Enter your password..."
							label="password"
							type="password"
							register={register}
						></Input>
						<div className="flex items-center mb-4 gap-x-2">
							<input
								type="checkbox"
								id="acceptTerm"
								name="acceptTerm"
							></input>
							<label htmlFor={"acceptTerm"}>
								Accept all terms of Us
							</label>
						</div>

						<Button
							loading={loading}
							className={"text-white rounded-md w-full h-[48px]"}
							type="submit"
						>
							Sign Up
						</Button>
						<div className="mx-auto mt-4 text-center text-gray-500">
							Already have an account?{" "}
							<Link onClick={() => {handleCloseSignUp();handleOpenLogin()}} to={"/"} className="text-blue-500">
								Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
		</Modal>
	);
};

export default SignUp;
