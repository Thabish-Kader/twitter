import React, { FC, SetStateAction, use, useRef, useState } from "react";
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
import { Tweet, TweetBody } from "../typings";
import { toNamespacedPath } from "node:path/win32";
import { toast } from "react-hot-toast";
import { fetchTweets } from "../utils/fetchTweets";

interface TweetBoxProps {
	setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
}

export const TweetBox: FC<TweetBoxProps> = ({ setTweets }) => {
	const [input, setInput] = useState<string>("");
	const [imageInputOpen, setImageInputOpen] = useState<boolean>(false);
	const imageUrlRef = useRef<HTMLInputElement>(null);
	const [imageUrl, setImageUrl] = useState<string>("");
	const { data: session } = useSession();

	// image url handler function
	const addImage = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!imageUrlRef.current?.value) return;
		setImageUrl(imageUrlRef.current?.value);
		imageUrlRef.current.value = "";
		setImageInputOpen(false);
	};

	const postTweet = async () => {
		const tweetCreate: TweetBody = {
			text: input,
			username: session?.user?.name as string,
			profileImg: session?.user?.image || userImage,
			image: imageUrl,
		};
		const result = await fetch(`/api/postTweet`, {
			body: JSON.stringify(tweetCreate),
			method: "POST",
		});
		const json = await result.json();
		const updatedFeed = await fetchTweets();
		setTweets(updatedFeed);
		toast("Tweet is posted!!");
		return json;
	};

	const handleSubmit = (
		e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => {
		e.preventDefault();
		postTweet();
		setInput("");
		setImageUrl("");
		setImageInputOpen(false);
	};

	return (
		<div className="flex space-x-2 p-5">
			<div className="relative h-14 w-14 ">
				<Image
					className="h-14 w-14 rounded-full  object-cover"
					src={session?.user?.image || userImage}
					alt="/"
					fill
				/>
			</div>
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
							<PhotoIcon
								onClick={() =>
									setImageInputOpen(!imageInputOpen)
								}
								className="h-5 w-5 cursor-pointer hover:transition-transform duration-150 hover:scale-150"
							/>
							<MagnifyingGlassCircleIcon className="h-5 w-5" />
							<FaceSmileIcon className="h-5 w-5" />
							<CalendarIcon className="h-5 w-5" />
							<MapPinIcon className="h-5 w-5" />
						</div>

						<button
							onClick={handleSubmit}
							disabled={!input || !session}
							className="bg-twitter disabled:opacity-40 rounded-full px-5 py-2 font-bold text-white"
						>
							Tweet
						</button>
					</div>
				</form>
				{imageInputOpen && (
					<form
						onSubmit={addImage}
						className="flex bg-twitter p-2 m-2 rounded-lg"
					>
						<input
							ref={imageUrlRef}
							className="flex-1 text-white outline-none bg-transparent placeholder:text-white"
							type="text"
							placeholder="Enter Image Link "
						/>
						<button className="p-2 text-white border rounded-lg ">
							Add Image
						</button>
					</form>
				)}
				{imageUrl && (
					<div className="relative h-40 w-full mt-2 ">
						<Image
							src={imageUrl}
							className="rounded-lg  object-contain"
							alt=""
							fill
						/>
					</div>
				)}
			</div>
		</div>
	);
};
