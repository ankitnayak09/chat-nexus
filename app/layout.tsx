import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

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
		<html lang="en" suppressHydrationWarning>
			<body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
				<ClerkProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem={false}
						storageKey="chat-nexus-theme"
					>
						{children}
					</ThemeProvider>
				</ClerkProvider>
			</body>
		</html>
	);
}
