import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Comment, Tweet, UserComment } from "../typings";
import TimeAgo from "react-timeago";
import {
	HeartIcon,
	ChatBubbleLeftIcon,
	ArrowUpTrayIcon,
	EllipsisHorizontalCircleIcon,
	EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { fetchComments } from "../utils/fetchComments";
import { useQuery } from "react-query";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

interface SingleTweetProps {
	tweet: Tweet;
}

export const SingleTweet: FC<SingleTweetProps> = ({ tweet }) => {
	const [comments, setComments] = useState<Comment[]>([]);
	const [chatOpen, setChatOpen] = useState<boolean>(true);
	const [userComment, setUserComment] = useState<string>("");
	const { data: session } = useSession();
	const getComments = async () => {
		const tweetComments: Comment[] = await fetchComments(tweet._id);
		setComments(tweetComments);
	};

	useEffect(() => {
		getComments();
	}, []);

	// Calling comment api endpoint
	const postComment = async () => {
		const commentdata: UserComment = {
			comment: userComment,
			username: session?.user?.name as string,
			profileImg: session?.user?.image as string,
			tweetId: tweet._id,
		};
		const result = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/postComment`,
			{
				method: "POST",
				body: JSON.stringify(commentdata),
			}
		).catch((error) => console.log(error));
		const json = await getComments();
		const updatedComments = await fetchComments(tweet._id);
		setComments(updatedComments);
		toast("Comment Posted");
		return json;
	};

	const handleSubmit = (
		e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => {
		e.preventDefault();
		postComment();
		setUserComment("");
		setChatOpen(false);
	};

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
				{tweet.image && (
					<div className="relative h-60 ">
						<Image
							src={tweet.image}
							alt="/tweetImg"
							className="object-cover rounded-lg"
							fill
						/>
					</div>
				)}
				<div className="flex justify-between mt-2 ">
					<div className="flex items-center">
						<ChatBubbleLeftIcon
							onClick={() => setChatOpen(!chatOpen)}
							className="h-5 w-5 cursor-pointer"
						/>
						<p className="ml-2">{comments.length}</p>
					</div>
					<EllipsisHorizontalIcon className="h-5 w-5 cursor-pointer" />
					<HeartIcon className="h-5 w-5 cursor-pointer" />
					<ArrowUpTrayIcon className="h-5 w-5 cursor-pointer" />
				</div>
				{chatOpen ||
					(session && (
						<form className="flex space-x-2">
							<input
								value={userComment}
								onChange={(e) => setUserComment(e.target.value)}
								className="bg-gray-400 px-2  flex-1 outline-none rounded-lg  placeholder:text-white text-white"
								placeholder="Add Comment"
							/>
							<button
								onClick={handleSubmit}
								disabled={userComment === ""}
								className="p-2  rounded-lg border border-twitter text-twitter disabled:opacity-40"
							>
								Post
							</button>
						</form>
					))}

				{/* Comment Section logic */}

				{comments && (
					<div>
						{comments?.map((comment) => (
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
