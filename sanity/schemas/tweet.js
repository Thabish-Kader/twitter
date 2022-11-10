export default {
	name: "tweet",
	title: "Tweet",
	type: "document",
	fields: [
		{
			name: "text",
			title: "Tweet text",
			type: "string",
		},
		{
			name: "blockTweet",
			title: "Block Tweet",
			type: "boolean",
			description: "Admin Controls : Block Tweet",
		},
		{
			name: "username",
			title: "Username",
			type: "string",
		},
		{
			name: "profileImg",
			title: "Profile Image",
			type: "string",
		},
		{
			name: "image",
			title: "Tweet Image",
			type: "string",
		},
	],
};
