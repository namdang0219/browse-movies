import { Input } from "components/input";
import { FormTitle } from "components/title";
import { useModal } from "context/modal-context";
import React from "react";
import { useForm } from "react-hook-form";
import LoginModal from "./LoginModal";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { createUser } from "store/user/userSlice";
import { AppDispatch } from "store/store";

export interface IUserValue {
	nickname: string;
	email: string;
	password: string;
}

const SignupSchema = Yup.object({
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

const SignupModal = () => {
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
		resolver: yupResolver(SignupSchema),
		mode: "onChange",
	});
	const { setModalContent } = useModal();
	const dispatch = useDispatch<AppDispatch>();

	const handleLoginModal = () => {
		setModalContent(<LoginModal />);
	};

	const handleSignup = (values: IUserValue) => {
		if (!isValid) {
			return;
		}
		dispatch(
			createUser({ email: values.email, password: values.password })
		);
	};

	return (
		<div className="text-center w-[400px]">
			<FormTitle>Sign Up</FormTitle>
			<p className="mt-4 text-slate-400">Welcome to MyMovie 🎉</p>
			{/* form inputs */}
			<form
				onSubmit={handleSubmit(handleSignup)}
				className="flex flex-col flex-1 gap-5 mt-6"
			>
				<Input
					valueName="nickname"
					placeholder="Nickname"
					register={register}
					errorMessage={errors?.nickname?.message}
				/>
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
					Sign Up
				</button>
				<p className="mt-4 select-none text-slate-400">
					Already have an account?{" "}
					<span
						className="cursor-pointer text-slate-600 hover:text"
						onClick={handleLoginModal}
					>
						Login
					</span>
				</p>
			</form>
		</div>
	);
};

export default SignupModal;
