import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Maintweet } from "../components/Maintweet";
import { RightSidebar } from "../components/RightSidebar";
import { Sidebar } from "../components/Sidebar";

const Home: NextPage = () => {
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
