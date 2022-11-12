import Image from "next/image";
import React, { FC, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import userImage from "../public/assets/userbackground.jpg";
import { TweetBox } from "./TweetBox";
import { Tweet } from "../typings";
import { SingleTweet } from "./SingleTweet";
import { toast } from "react-hot-toast";
import { fetchTweets } from "../utils/fetchTweets";

interface MaintweetProps {
	tweets: Tweet[];
}

export const Maintweet: FC<MaintweetProps> = ({ tweets: tweetsProps }) => {
	const [tweets, setTweets] = useState<Tweet[]>(tweetsProps);

	const refreshTweets = async () => {
		const refresh = toast.loading("One Moment...");

		const tweets = await fetchTweets();
		setTweets(tweets);

		toast.success("Tweets Updated !!", {
			id: refresh,
		});
	};

	return (
		<div className="col-span-7 lg:col-span-5 border-x overflow-x-scroll h-screen scrollbar-hide">
			<div className="flex items-center justify-between ">
				<h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
				<ArrowPathIcon className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
			</div>
			{/* Input field icons and button */}
			<TweetBox setTweets={setTweets} />

			{/* Tweet component */}

			{tweets.map((tweet) => (
				<SingleTweet key={tweet._id} tweet={tweet} />
			))}
		</div>
	);
};
