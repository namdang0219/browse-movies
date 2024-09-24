import { Input } from "components/input";
import { FormTitle } from "components/title";
import React from "react";
import { useForm } from "react-hook-form";
import SignupModal, { IUserValue } from "./SignupModal";
import { useModal } from "context/modal-context";

const LoginModal = () => {
	const {
		handleSubmit,
		register,
		formState: { isValid },
	} = useForm<IUserValue>({
		defaultValues: {
			nickname: "",
			email: "",
			password: "",
		},
		mode: "onChange",
	});
	const { setModalContent } = useModal();

	const handleSignupModal = () => {
		setModalContent(<SignupModal />);
	};

	const handleLogin = (values: IUserValue) => {
		if (!isValid) {
			return;
		}
		console.log(values);
	};

	return (
		<div className="text-center  w-full max-w-[400px]">
			<FormTitle>Login</FormTitle>
			<p className="mt-4 text-slate-400">Glad to see you back 🎉</p>
			{/* form inputs */}
			<form onSubmit={handleSubmit(handleLogin)} className="mt-6">
				<Input
					valueName="email"
					type="email"
					placeholder="Email"
					register={register}
				/>
				<Input
					valueName="password"
					type="password"
					placeholder="Password"
					register={register}
				/>
				<button
					type="submit"
					className="w-full p-3 mt-2 text-white rounded-md bg-primary hover:bg-primary-hover"
				>
					Login
				</button>
				<p className="mt-4 text-slate-400">
					Haven't an account?{" "}
					<span
						className="cursor-pointer text-slate-600 hover:text"
						onClick={handleSignupModal}
					>
						Sign up
					</span>
				</p>
			</form>
		</div>
	);
};

export default LoginModal;
