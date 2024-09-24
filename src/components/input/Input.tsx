import { EyeIcon, EyeSlashIcon } from "components/icon/input";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
	valueName: string;
	register: UseFormRegister<any>;
	type?: "text" | "password" | "email";
	placeholder?: string;
	className?: string;
	errorMessage?: string;
};

const Input = ({
	valueName = "",
	register,
	type = "text",
	placeholder = "Placehoder",
	className = "",
	errorMessage = "",
}: InputProps) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<div className="relative">
			<input
				type={
					type === "password"
						? showPassword
							? "text"
							: "password"
						: type
				}
				placeholder={placeholder}
				autoComplete="off"
				autoCorrect="off"
				className={`p-3 border rounded-md w-full border-slate-300 ${className}`}
				{...register(valueName)}
			/>
			{type === "password" && (
				<span
					className="absolute top-[14px] text-slate-300 right-4 cursor-pointer"
					onClick={() => setShowPassword(!showPassword)}
				>
					{showPassword ? <EyeIcon /> : <EyeSlashIcon />}
				</span>
			)}
			{errorMessage && (
				<span className="absolute left-2 text-xs -bottom-[18px] text-red-500">
					{errorMessage}
				</span>
			)}
		</div>
	);
};

export default Input;
