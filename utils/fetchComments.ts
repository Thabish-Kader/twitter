import { Comment } from "../typings";

export const fetchComments = async (tweetId: string) => {
	const res = await fetch(`/api/getComments?tweetId=${tweetId}`);
	const data = await res.json();
	const comments: Comment[] = data.comments;

	return comments;
};
