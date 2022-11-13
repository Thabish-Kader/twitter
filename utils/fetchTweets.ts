import { Tweet } from "../typings";

export const fetchTweets = async () => {
	const res = await fetch(`${process.env.NEXTAUTH_URL}api/getTweets`);
	const data = await res.json();
	const tweets: Tweet[] = data.tweets;

	return tweets;
};
