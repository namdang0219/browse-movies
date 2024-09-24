import { Input } from "components/input";
import { FormTitle } from "components/title";
import React from "react";
import { useForm } from "react-hook-form";

export interface IUserValue {
	nickname: string;
	email: string;
	password: string;
}

const SignupModal = () => {
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

	const handleSignup = (values: IUserValue) => {
		if (!isValid) {
			return;
		}
		console.log(values);
	};

	return (
		<div className="text-center  w-full max-w-[400px]">
			<FormTitle>Sign Up</FormTitle>
			<p className="mt-4 text-slate-400">Welcome to MyMovie 🎉</p>
			{/* form inputs */}
			<form onSubmit={handleSubmit(handleSignup)} className="mt-6">
				<Input
					valueName="nickname"
					placeholder="Nickname"
					register={register}
				/>
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
					Sign Up
				</button>
				<p className="mt-4 text-slate-400">
					Already have an account?{" "}
					<span className="text-slate-600 hover:text">Login</span>
				</p>
			</form>
		</div>
	);
};

export default SignupModal;
  