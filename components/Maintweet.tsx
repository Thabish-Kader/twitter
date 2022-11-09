import Image from "next/image";
import React, { useState } from "react";
import user from "../public/assets/userbackground.jpg";
import {
	CalendarIcon,
	FaceSmileIcon,
	MapPinIcon,
	PhotoIcon,
	MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import userImage from "../public/assets/userbackground.jpg";

export const Maintweet = () => {
	return (
		<div className="text-2xl font-bold col-span-7 lg:col-span-5">
			<div className="flex justify-between">
				Home
				<ArrowPathIcon className="h-10 w-10 text-twitter hover:rotate-180 hover:scale-110 ease-out transition duration-150" />
			</div>
			<div>
				<Image
					src={userImage}
					alt="/userimg"
					className="h-14 w-14 rounded-full"
				/>
			</div>
		</div>
	);
};
