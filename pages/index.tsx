import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Maintweet } from "../components/Maintweet";
import { RightSidebar } from "../components/RightSidebar";
import { Sidebar } from "../components/Sidebar";
import { Tweet } from "../typings";

interface Props {
	tweets: Tweet[];
}

const Home: NextPage<Props> = ({ tweets }) => {
	console.log(tweets);
	return (
		<div className="">
			<Head>
				<title>Twitter</title>
			</Head>

			<div className="grid grid-cols-9 max-w-6xl mx-auto ">
				{/* Left side */}
				<Sidebar />

				{/* Middle  */}
				<Maintweet />

				{/* RightSidebar  */}
				<RightSidebar />
			</div>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`
	);
	const data = await res.json();
	const tweets: Tweet[] = data.tweets;

	return {
		props: { tweets },
	};
};
