"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/experiences", label: "Experiences" },
	{ href: "/favorites", label: "Favorites" },
	{ href: "/profile", label: "Profile" },
];

export function Navbar() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<Link href="/" className="font-[family-name:var(--font-display)] text-xl text-slate-900">
					Wanderlust Explorer
				</Link>

				<nav className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 p-1">
					{navItems.map((item) => {
						const isActive =
							item.href === "/"
								? pathname === "/"
								: pathname === item.href || pathname.startsWith(`${item.href}/`);

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
									isActive
										? "bg-slate-900 text-white"
										: "text-slate-700 hover:bg-white"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
