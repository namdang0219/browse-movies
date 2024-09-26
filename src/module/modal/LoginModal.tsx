import { Input } from "components/input";
import { FormTitle } from "components/title";
import { useForm } from "react-hook-form";
import SignupModal from "./SignupModal";
import { useModal } from "context/modal-context";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import { loginUser } from "store/user/userSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

interface IUserLogin {
	email: string;
	password: string;
}

const LoginSchema = Yup.object({
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
	} = useForm<IUserLogin>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(LoginSchema),
		mode: "onChange",
	});
	const { setModalContent, setModalShow } = useModal();
	const { loading } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch<AppDispatch>();

	const handleSignupModal = () => {
		setModalContent(<SignupModal />);
	};

	const handleLogin = async (values: IUserLogin) => {
		if (!isValid) {
			return;
		}
		try {
			await dispatch(
				loginUser({ email: values.email, password: values.password })
			);
			setModalShow(false);
			toast.success("Login successful");
		} catch (error) {
			toast.error("Login failed, please try again");
		}
	};

	return (
		<div className="text-center w-[400px]">
			<FormTitle>Login</FormTitle>
			<p className="mt-4 text-slate-400">Glad to see you back 🎉</p>
			{/* form inputs */}
			<form
				className="flex flex-col flex-1 gap-5 mt-6"
				onSubmit={handleSubmit(handleLogin)}
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
				<Button loading={loading} type="submit">
					Login
				</Button>
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
