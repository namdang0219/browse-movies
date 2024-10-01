import { Input } from "components/input";
import { FormTitle } from "components/title";
import { useModal } from "context/modal-context";
import { useForm } from "react-hook-form";
import LoginModal from "./LoginModal";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { createUser } from "store/user/userSlice";
import { AppDispatch, RootState } from "store/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "components/button";

export interface IAuthentication {
	email: string;
	password: string;
	[key: string]: string;
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
	} = useForm<IAuthentication & { nickname: string }>({
		defaultValues: {
			email: "",
			password: "",
			nickname: "",
		},
		resolver: yupResolver(SignupSchema),
		mode: "onChange",
	});
	const { setModalContent, setModalShow } = useModal();
	const dispatch = useDispatch<AppDispatch>();
	const { loading, error: userError } = useSelector(
		(state: RootState) => state.user
	);

	const handleLoginModal = () => {
		setModalContent(<LoginModal />);
	};

	const handleSignup = async (values: IAuthentication) => {
		if (!isValid) {
			return;
		}
		try {
			await dispatch(
				createUser({
					email: values.email,
					password: values.password,
					displayName: values.nickname,
				})
			);
			if (userError === "Firebase: Error (auth/email-already-in-use).") {
				toast.error("Email already in use");
				return;
			} else if (!userError) {
				setModalShow(false);
				toast.success("Create user successfully!");
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong, please try again");
		}
	};

	return (
		<div className="text-center w-[400px]">
			<FormTitle>Sign Up</FormTitle>
			<p className="mt-4 text-slate-400">Welcome to MyMovie 🎉</p>
			{/* form inputs */}
			<form
				className="flex flex-col flex-1 gap-5 mt-6"
				onSubmit={handleSubmit(handleSignup)}
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
				<Button loading={loading} type="submit">
					Sign Up
				</Button>
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
