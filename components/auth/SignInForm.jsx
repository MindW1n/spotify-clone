"use client"
import {useForm} from "react-hook-form"
import Joi from "joi"
import toast from "react-hot-toast"
const validationSchema = Joi.object({
	login: Joi.string().max(50).required(),
	password: Joi.string().max(100).required()
})
export default function SignInForm() {
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
		<form onSubmit={handleSubmit(() => toast.success("Zaebis"))} className="flex flex-col p-5 space-y-5">
			<input {...register("login")} type="text" placeholder="Email or name" className="bg-neutral-400 rounded-2xl text-black h-10 placeholder:text-black placeholder:font-bold placeholder:text-lg font-bold text-lg px-3 border-0" />
			{errors.login && <span>{errors.login.message}</span>}
			<input {...register("password")} type="password" placeholder="Password" className="bg-neutral-400 rounded-2xl text-black h-10 placeholder:text-black placeholder:font-bold placeholder:text-lg font-bold text-lg px-3 border-0" />
			{errors.password && <span>{errors.password.message}</span>}
			<button type="submit" className="bg-[#00ff5c] h-10 rounded-2xl text-black font-extrabold text-2xl">
				Sign in
			</button>
		</form>
	)
}