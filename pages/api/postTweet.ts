// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TweetBody } from "../../typings";

type Data = {
	tweet: TweetBody;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const tweet: TweetBody = req.body;
	const mutations = [
		{
			create: {
				username: tweet.username,
				text: tweet.text,
				profileImg: tweet.profileImg,
				blockTweet: false,
				image: tweet.image,
			},
		},
	];
	const commentApi = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
	const result = fetch(commentApi, {
		method: "post",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
		},
		body: JSON.stringify({ mutations }),
	});
	res.status(200).json({ tweet });
}
