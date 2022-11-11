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
	profileImg: string;
	image?: string;
};

export interface Comments {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: Date;
	comment: string;
	id: null;
	profileImg: string;
	tweet: {
		_ref: string;
		_type: "reference";
	};
	username: string;
}
