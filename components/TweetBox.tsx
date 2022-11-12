import React, { useState } from "react";
import {
	CalendarIcon,
	FaceSmileIcon,
	MapPinIcon,
	PhotoIcon,
	MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import userImage from "../public/assets/userbackground.jpg";
import { useSession } from "next-auth/react";

export const TweetBox = () => {
	const [input, setInput] = useState<string>("");
	const { data: session } = useSession();
	return (
		<div className="flex space-x-2 p-5">
			<Image
				className="h-14 w-14 rounded-full  object-cover"
				src={userImage}
				alt="/"
			/>
			<div className="flex flex-1 pl-2 flex-col">
				<form action="flex flex-1 flex-col">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="h-24 w-full text-xl outline-none placeholder-xl"
						type="text"
						placeholder="What's happening?"
					/>
					<div className="flex items-center">
						<div className="flex flex-1  space-x-2 text-twitter">
							<PhotoIcon className="h-5 w-5 cursor-pointer hover:transition-transform duration-150 hover:scale-150" />
							<MagnifyingGlassCircleIcon className="h-5 w-5" />
							<FaceSmileIcon className="h-5 w-5" />
							<CalendarIcon className="h-5 w-5" />
							<MapPinIcon className="h-5 w-5" />
						</div>

						<button
							className={
								input === ""
									? "bg-twitter/40 disabled: rounded-full px-5 py-2 font-bold text-white"
									: "bg-twitter rounded-full px-5 py-2 font-bold text-white"
							}
						>
							Tweet
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
