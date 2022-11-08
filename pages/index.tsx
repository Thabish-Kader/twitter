import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Sidebar } from "../components/Sidebar";

const Home: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>Twitter</title>
			</Head>
			<div>
				<Sidebar />

				{/* MainTweet  */}

				{/* RightSidebar  */}
			</div>
		</div>
	);
};

export default Home;
