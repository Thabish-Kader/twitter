import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Maintweet } from "../components/Maintweet";
import { RightSidebar } from "../components/RightSidebar";
import { Sidebar } from "../components/Sidebar";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import { Toaster } from "react-hot-toast";
interface Props {
	tweets: Tweet[];
}

const Home: NextPage<Props> = ({ tweets }) => {
	console.log(`${process.env.NEXTAUTH_URL}/api/getComments?tweetId=`);
	return (
		<div className="">
			<Toaster />
			<Head>
				<title>Twitter</title>
			</Head>

			<div className="grid grid-cols-9 max-w-6xl mx-auto ">
				{/* Left side */}
				<Sidebar />

				{/* Middle  */}
				<Maintweet tweets={tweets} />

				{/* RightSidebar  */}
				<RightSidebar />
			</div>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetchTweets();
	const tweets = res;
	return {
		props: { tweets },
	};
};
