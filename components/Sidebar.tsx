import React from "react";
import {
	BellIcon,
	HashtagIcon,
	BookmarkIcon,
	CircleStackIcon,
	AdjustmentsHorizontalIcon,
	EnvelopeIcon,
	UserIcon,
	HomeIcon,
} from "@heroicons/react/24/outline";
import twitterLogo from "../public/assets/twitter.png";
import Image from "next/image";
import { SidebarButtons } from "./SidebarButtons";
import { signIn, signOut, useSession } from "next-auth/react";

export const Sidebar = () => {
	const { data: session } = useSession();

	return (
		<div className="flex flex-col col-span-2 px-4 items-center md:items-start">
			<Image className="h-10 w-10 m-3" src={twitterLogo} alt="/twitter" />
			{/* Component for icons and title */}
			<SidebarButtons Icon={HomeIcon} title={"Home"} />
			<SidebarButtons Icon={HashtagIcon} title={"Explore"} />
			<SidebarButtons Icon={BellIcon} title={"Notifications"} />
			<SidebarButtons Icon={EnvelopeIcon} title={"Messages"} />
			<SidebarButtons Icon={BookmarkIcon} title={"Bookmarks"} />
			<SidebarButtons Icon={CircleStackIcon} title={"Lists"} />
			<SidebarButtons
				onClick={session ? signOut : signIn}
				Icon={UserIcon}
				title={session ? "Sign Out" : "Sign In"}
			/>
			<SidebarButtons Icon={AdjustmentsHorizontalIcon} title={"More"} />
		</div>
	);
};
