import { UseFormRegister } from "react-hook-form";

type InputProps = {
	valueName: string;
	register: UseFormRegister<any>;
	type?: string;
	placeholder?: string;
	className?: string;
};

const Input = ({
	valueName = "",
	register,
	type = "text",
	placeholder = "Placehoder",
	className = "mb-4",
}: InputProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`w-full p-3 border rounded-md shrink-0 border-slate-300 ${className}`}
			{...register(valueName)}
		/>
	);
};

export default Input;
