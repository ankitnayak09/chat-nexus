import { ModeToggle } from "@/components/toggle-theme";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<p className="text-3xl font-bold text-indigo-500">
			<UserButton afterSignOutUrl="/" />
			<ModeToggle />
		</p>
	);
}
