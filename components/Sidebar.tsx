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
import SidebarButtons from "./SidebarButtons";
export const Sidebar = () => {
	return (
		<div className="flex flex-col col-span-2 px-4 items-center sm:items-start">
			<Image className="h-20 w-20" src={twitterLogo} alt="/twitter" />
			{/* Component for icons and title */}
			<SidebarButtons Icon={HomeIcon} title={"Home"} />
			<SidebarButtons Icon={HashtagIcon} title={"Explore"} />
			<SidebarButtons Icon={BellIcon} title={"Notifications"} />
			<SidebarButtons Icon={EnvelopeIcon} title={"Messages"} />
			<SidebarButtons Icon={BookmarkIcon} title={"Bookmarks"} />
			<SidebarButtons Icon={CircleStackIcon} title={"Lists"} />
			<SidebarButtons Icon={UserIcon} title={"SignIn"} />
			<SidebarButtons Icon={AdjustmentsHorizontalIcon} title={"More"} />
		</div>
	);
};
