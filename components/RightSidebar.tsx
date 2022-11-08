import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const RightSidebar = () => {
	return (
		<div className="w-full hidden lg:inline col-span-2 px-2 mt-2">
			<div className="bg-gray-100 flex items-center p-3 space-x-2 rounded-full">
				<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
				<input
					className=" bg-transparent flex-1 outline-none "
					type="text"
					placeholder="Search"
				/>
			</div>
			<div className="">
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="elonmusk"
					options={{ height: 1000 }}
				/>
			</div>
		</div>
		//
		// <div className="px-2 mt-2 col-span-2 hidden lg:inline">
		// 	{/* Search  */}
		// 	<div className="flex items-center p-3 space-x-2 mt-2 rounded-full bg-gray-100">
		// 		<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
		// 		<input
		// 			className="bg-transparent flex-1 outline-none"
		// 			type="text"
		// 			placeholder="Search Twitter"
		// 		/>
		// 	</div>
		// 	<TwitterTimelineEmbed
		// 		sourceType="profile"
		// 		screenName="elonmusk"
		// 		options={{ height: 1000 }}
		// 	/>
		// </div>
	);
};
