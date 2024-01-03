import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<div>
				<Image src="/logo.png" height={500} width={500} alt="slp-benchmark-logo" />
			</div>
			<div className="text-5xl">SLP Benchmark Coming Soon!</div>
		</main>
	);
}
