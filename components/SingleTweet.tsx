import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Comments, Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {
	HeartIcon,
	ChatBubbleLeftIcon,
	ArrowUpTrayIcon,
	EllipsisHorizontalCircleIcon,
	EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { fetchComments } from "../utils/fetchComments";

interface SingleTweetProps {
	tweet: Tweet;
}

export const SingleTweet: FC<SingleTweetProps> = ({ tweet }) => {
	const [comments, setComments] = useState<Comments[]>([]);

	const getComments = async () => {
		const tweetComments: Comments[] = await fetchComments(tweet._id);
		setComments(tweetComments);
	};
	console.log(comments);
	useEffect(() => {
		getComments();
	}, []);

	return (
		<div className="p-4 border-t-gray-100 border-y">
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
				<div className="flex justify-between mt-2 ">
					<div className="flex items-center">
						<ChatBubbleLeftIcon className="h-5 w-5 cursor-pointer" />
						<p className="ml-2">{comments.length}</p>
					</div>
					<EllipsisHorizontalIcon className="h-5 w-5 cursor-pointer" />
					<HeartIcon className="h-5 w-5 cursor-pointer" />
					<ArrowUpTrayIcon className="h-5 w-5 cursor-pointer" />
				</div>
				{comments?.length > 0 && (
					<div>
						{comments.map((comment) => (
							<div
								key={comment._id}
								className="flex flex-col justify-center"
							>
								<div className="flex items-center space-x-2 relative">
									<hr className="absolute left-7 top-10 h-8 border-x border-twitter/30" />
									<div className="relative  h-10 w-10">
										<Image
											src={comment.profileImg}
											alt="/img"
											className="rounded-full object-cover"
											fill
										/>
									</div>
									<p className="font-bold text:sm">
										{comment.username}
									</p>
									<p className="text-gray-500 text:sm">
										@{comment.username.replace(/\s+/g, "")}
									</p>
									<TimeAgo
										className="text-gray-500 text:sm hidden md:inline"
										date={comment._updatedAt}
									/>
								</div>
								<p className="pt-7 pl-5">{comment.comment}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
