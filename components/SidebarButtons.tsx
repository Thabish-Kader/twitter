import Image from "next/image";
import React, { SVGProps } from "react";

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
}

export default function SidebarButtons({ Icon, title }: Props) {
	return (
		<div className="flex rounded-lg px-3 max-w-fit items-center py-3 pl-2 group cursor-pointer hover:bg-gray-200">
			<Icon className="h-10 w-10 items-center group-hover:text-twitter" />
			<p className="text-xl font-medium group-hover:text-twitter">
				{title}
			</p>
		</div>
	);
}
