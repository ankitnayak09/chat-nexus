import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Chat-Nexus | A Discord Clone",
	description:
		"A Web Application that is built replicating the major features of the Discord Application. ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	);
}
