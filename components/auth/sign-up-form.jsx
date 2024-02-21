"use client"
import {useForm} from "react-hook-form"
import Joi from "joi"
const validationSchema = Joi.object({
	name: Joi.string().max(50).required(),
	email: Joi.string().max(50).required(),
	password: Joi.string().max(100).required()
})
export default function SignUpForm() {
	const {register, handleSubmit, formState: {errors}} = useForm({
		resolver: data => {
			const {error, value} = validationSchema.validate(data, {abortEarly: false})
			if(error) {
				return {values: {}, errors: error.details.reduce(
					(errors, cur) => ({...errors, [cur.path]: {message: cur.message.replaceAll("\"", "")}}), {}
				)}
			}
			return {values: value, errors: {}}
		}
	})
	return (
		<form
			onSubmit={handleSubmit(() => console.log("Zaebis"))}
			className="flex flex-col p-5 space-y-5"
		>
			<input
				{...register("name")}
				type="text"
				placeholder="Name"
				className="bg-neutral-400 rounded-2xl text-black h-10 placeholder:text-black placeholder:font-bold placeholder:text-lg font-bold text-lg px-3 border-0"
			/>
			{errors.name && <span>{errors.name.message}</span>}
			<input
				{...register("email")}
				type="text"
				placeholder="Email"
				className="bg-neutral-400 rounded-2xl text-black h-10 placeholder:text-black placeholder:font-bold placeholder:text-lg font-bold text-lg px-3 border-0"
			/>
			{errors.email && <span>{errors.email.message}</span>}
			<input
				{...register("password")}
				type="password"
				placeholder="Password"
				className="bg-neutral-400 rounded-2xl text-black h-10 placeholder:text-black placeholder:font-bold placeholder:text-lg font-bold text-lg px-3 border-0"
			/>
			{errors.password && <span>{errors.password.message}</span>}
			<button
				type="submit"
				className="bg-[#00ff5c] h-10 rounded-2xl text-black font-extrabold text-2xl"
			>
				Sign in
			</button>
		</form>
	)
}