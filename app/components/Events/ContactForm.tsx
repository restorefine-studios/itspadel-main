"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	club: string;
	date: string;
	guests: number;
	message?: string;
}

const ContactForm = () => {
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = async (data: FormData) => {
		setStatus("loading");
		try {
			const res = await fetch("/api/events", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			const json = await res.json();
			if (json.success) {
				setStatus("success");
				reset();
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	};

	return (
		<section className="py-12 md:py-20 px-0 md:px-16 lg:px-32">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-12 items-center">
					{/* Left Column */}
					<div className="px-8 md:px-0">
						<h2 className="font-bison text-5xl md:text-6xl lg:text-7xl mb-2 md:mb-6">
							START YOUR NEXT EVENT
							<br />
							WITH IT&apos;S PADEL TODAY!
						</h2>
						<p className="font-inter text-base md:text-lg text-black/50">
							We love events! Whether it&apos;s Christmas, birthdays, corporate,
							private, or going big with a full venue hire, we create bespoke
							experiences that are different.
						</p>
					</div>

					{/* Right Column - Form */}
					<div className="p-8">
						{status === "success" ? (
							<div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
								<div className="w-14 h-14 rounded-full bg-[#009FF3] flex items-center justify-center mb-2">
									<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</div>
								<h3 className="font-bison text-3xl">Enquiry Sent!</h3>
								<p className="font-inter text-black/50 text-sm max-w-xs">
									Thanks for reaching out. We&apos;ll be in touch shortly to discuss your event.
								</p>
								<button
									onClick={() => setStatus("idle")}
									className="mt-4 font-inter text-sm font-medium text-[#009FF3] underline underline-offset-4">
									Send another enquiry
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="tracking-tighter block font-inter text-sm font-medium text-black/50 mb-2">
											Firstname
										</label>
										<input
											{...register("firstname", { required: true })}
											className="w-full px-4 py-3 bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#009FF3]"
											type="text"
										/>
										{errors.firstname && (
											<span className="text-red-500 text-sm">This field is required</span>
										)}
									</div>
									<div>
										<label className="tracking-tighter block font-inter text-sm font-medium text-black/50 mb-2">
											Lastname
										</label>
										<input
											{...register("lastname", { required: true })}
											className="w-full px-4 py-3 bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#009FF3]"
											type="text"
										/>
										{errors.lastname && (
											<span className="text-red-500 text-sm">This field is required</span>
										)}
									</div>
								</div>

								<div>
									<label className="tracking-tighter block font-inter text-sm font-medium text-black/50 mb-2">
										Email
									</label>
									<input
										{...register("email", {
											required: true,
											pattern: /^\S+@\S+$/i,
										})}
										className="w-full px-4 py-3 bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#009FF3]"
										type="email"
									/>
									{errors.email && (
										<span className="text-red-500 text-sm">Valid email is required</span>
									)}
								</div>

								<div>
									<label className="tracking-tighter block font-inter text-sm font-medium text-black/50 mb-2">
										Phone Number
									</label>
									<input
										{...register("phone", { required: true })}
										className="w-full px-4 py-3 bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#009FF3]"
										type="tel"
									/>
									{errors.phone && (
										<span className="text-red-500 text-sm">This field is required</span>
									)}
								</div>

								<div>
									<label className="tracking-tighter block font-inter text-sm font-medium text-black/50 mb-2">
										Select Club
									</label>
									<select
										{...register("club", { required: true })}
										className="w-full px-4 py-3 bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#009FF3]">
										<option value="">Select a club</option>
										<option value="eastkilbride">East Kilbride</option>
									</select>
									{errors.club && (
										<span className="text-red-500 text-sm">Please select a club</span>
									)}
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="tracking-tighter block font-inter text-sm font-medium text-black/50 mb-2">
											Desired Date
										</label>
										<input
											{...register("date", { required: true })}
											className="w-full px-4 py-3 bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#009FF3]"
											type="date"
										/>
										{errors.date && (
											<span className="text-red-500 text-sm">This field is required</span>
										)}
									</div>
									<div>
										<label className="tracking-tighter block font-inter text-sm font-medium text-black/50 mb-2">
											Number of guests
										</label>
										<input
											{...register("guests", { required: true, min: 1 })}
											className="w-full px-4 py-3 bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#009FF3]"
											type="number"
											min="1"
										/>
										{errors.guests && (
											<span className="text-red-500 text-sm">At least 1 guest required</span>
										)}
									</div>
								</div>

								<div>
									<label className="tracking-tighter block font-inter text-sm font-medium text-black/50 mb-2">
										Add a message
									</label>
									<textarea
										{...register("message")}
										className="w-full px-4 py-3 bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#009FF3] h-32 resize-none"
										placeholder="Tell us more about your event..."
									/>
								</div>

								{status === "error" && (
									<p className="font-inter text-sm text-red-500">
										Something went wrong. Please try again or email us directly.
									</p>
								)}

								<button
									type="submit"
									disabled={status === "loading"}
									className="w-full rounded-none bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase disabled:opacity-60 disabled:cursor-not-allowed">
									{status === "loading" ? "Sending..." : "Enquire Now"}
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
