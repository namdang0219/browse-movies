import { Input } from "components/input";
import { FormTitle } from "components/title";
import React from "react";
import { useForm } from "react-hook-form";
import SignupModal, { IUserValue } from "./SignupModal";
import { useModal } from "context/modal-context";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginSchema = Yup.object({
	nickname: Yup.string()
		.required("Nickname is required")
		.min(3, "Your nickname is at least 3 characters long")
		.max(10, "Your password is at least 10 characters long"),
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters long")
		.max(15, "Password must be at least 15 characters long")
		.required("Password is required"),
});

const LoginModal = () => {
	const {
		handleSubmit,
		register,
		formState: { isValid, errors },
	} = useForm<IUserValue>({
		defaultValues: {
			nickname: "",
			email: "",
			password: "",
		},
		resolver: yupResolver(LoginSchema),
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
		<div className="text-center w-[400px]">
			<FormTitle>Login</FormTitle>
			<p className="mt-4 text-slate-400">Glad to see you back 🎉</p>
			{/* form inputs */}
			<form
				onSubmit={handleSubmit(handleLogin)}
				className="flex flex-col flex-1 gap-5 mt-6"
			>
				<Input
					valueName="email"
					type="email"
					placeholder="Email"
					register={register}
					errorMessage={errors?.email?.message}
				/>
				<Input
					valueName="password"
					type="password"
					placeholder="Password"
					register={register}
					errorMessage={errors?.password?.message}
				/>
				<button
					type="submit"
					className="w-full p-3 mt-2 text-white rounded-md select-none bg-primary hover:bg-primary-hover"
				>
					Login
				</button>
				<p className="mt-4 select-none text-slate-400">
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
