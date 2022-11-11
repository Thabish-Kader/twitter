import Image from "next/image";
import React, { FC } from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {
	HeartIcon,
	ChatBubbleLeftIcon,
	ArrowUpTrayIcon,
	EllipsisHorizontalCircleIcon,
	EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

interface SingleTweetProps {
	tweet: Tweet;
}

export const SingleTweet: FC<SingleTweetProps> = ({ tweet }) => {
	return (
		<div className="p-4 border-t-gray-100 border-t">
			<div className="flex items-center space-x-1">
				<div className="h-10 w-10 relative">
					<Image
						className="rounded-full"
						src={tweet.profileImg}
						alt="/userImg"
						fill
					/>
				</div>
				<div className="flex justify-center flex-col">
					<div className="flex items-center space-x-2">
						<p className="font-bold text:sm">{tweet.username}</p>
						<p className="text-gray-500 text:sm">
							@{tweet.username.replace(/\s+/g, "")}
						</p>
						<TimeAgo
							className="text-gray-500 text:sm hidden md:inline"
							date={tweet._updatedAt}
						/>
					</div>
				</div>
			</div>
			<div className="ml-11 space-y-3">
				<p className="">{tweet.text}</p>
				<img
					src={tweet.image}
					alt="/tweetImg"
					className="max-h-60 object-cover rounded-lg"
				/>
				<div className="flex justify-between mt-2 max-w-sm">
					<div className="flex items-center">
						<ChatBubbleLeftIcon className="h-5 w-5 cursor-pointer" />
						<p className="ml-2">5</p>
					</div>
					<EllipsisHorizontalIcon className="h-5 w-5 cursor-pointer" />
					<HeartIcon className="h-5 w-5 cursor-pointer" />
					<ArrowUpTrayIcon className="h-5 w-5 cursor-pointer" />
				</div>
			</div>
		</div>
	);
};
