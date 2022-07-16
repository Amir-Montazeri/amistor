import Link from "next/link";
import { useRouter } from "next/router";
import { footerItems } from "utils/static-data/footer";

type renderedItemsType = (
	items: { title: string; icon: JSX.Element }[]
) => JSX.Element[];

function Footer() {
	const router = useRouter();

	const renderedItems: renderedItemsType = items =>
		footerItems.map(({ title, linkTo, icon }) => {
			const activeIconClasses: string =
				router.asPath === linkTo ? "text-[#ee204e]" : "text-[#444]";

			return (
				<Link key={title} href={linkTo}>
					<a
						className={`flex flex-col justify-center items-center text-[22px] cursor-pointer ${activeIconClasses}`}>
						{icon}
						<p className="text-[14px] capitalize">{title}</p>
					</a>
				</Link>
			);
		});

	return (
		<div className="flex h-full justify-evenly bg-[#fff]">
			{renderedItems(footerItems)}
		</div>
	);
}

export default Footer;
