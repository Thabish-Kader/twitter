import Image from "next/image";
import React, { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import userImage from "../public/assets/userbackground.jpg";
import { TweetBox } from "./TweetBox";

export const Maintweet = () => {
	return (
		<div className="col-span-7 lg:col-span-5 border-x">
			<div className="flex items-center justify-between ">
				<h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
				<ArrowPathIcon className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
			</div>
			{/* Input field icons and button */}
			<TweetBox />
		</div>
	);
};
