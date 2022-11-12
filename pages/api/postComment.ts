// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import { UserComment } from "../../typings";

type Data = {
	comment: UserComment;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const comment: UserComment = JSON.parse(req.body);
	const mutations = {
		mutations: [
			{
				create: {
					_type: "comment",
					username: comment.username,
					comment: comment.comment,
					profileImg: comment.profileImg,
					tweet: {
						_type: "reference",
						_ref: comment.tweetId,
					},
				},
			},
		],
	};
	const commentApi = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
	const result = fetch(commentApi, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
		},
		body: JSON.stringify(mutations),
	});
	res.status(200).json({ comment });
}
