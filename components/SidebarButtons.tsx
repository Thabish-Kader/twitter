import React, { SVGProps } from "react";

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
	onClick?: () => {};
}

export const SidebarButtons = ({ Icon, title, onClick }: Props) => {
	return (
		<div
			onClick={() => onClick?.()}
			className="flex rounded-lg space-x-2 max-w-fit px-2 items-center py-3 pl-2 group cursor-pointer hover:bg-gray-200"
		>
			<Icon className="h-6 w-6 items-center group-hover:text-twitter" />
			<p className="text-lg group-hover:text-twitter hidden md:block ">
				{title}
			</p>
		</div>
	);
};
