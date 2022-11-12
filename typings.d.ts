import { StaticImageData } from "next/image";

export interface Tweet extends TweetBody {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	_type: "tweet";
	blockTweet: boolean;
}

export type TweetBody = {
	text: string;
	username: string;
	profileImg: string | StaticImageData;
	image?: string;
};

export interface Comment extends UserComment {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: "comment";
	_updatedAt: string;
	tweet: {
		_ref: string;
		_type: "reference";
	};
}

export type UserComment = {
	comment: string;
	username: string;
	profileImg: string;
	tweetId: string;
};
