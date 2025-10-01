import React, { useState, useRef } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

const features = [
	{
		title: "Your Daily Game Plan",
		description:
			"Stop second-guessing your training. Have your training week ready to go.",
		href: "#your-daily-game-plan",
	},
	{
		title: "Execute With Precision",
		description:
			"Beat your previous best. Track every rep, set, and weight with ease.",
		href: "#execute-with-precision",
	},
  {
		title: "Dynamic Routine Builder",
		description:
			"Your training is flexible, so is Atlas. Plan every detail, or just keep it simple.",
		href: "#custom-routines",
	},
  {
		title: "Progress Unlocked",
		description:
			"Visualize your personal records. See stats, spot trends, and stay locked in.",
		href: "#progress-unlocked",
	},
];

const featureImages = [
	"/images/feature_home.png",
	"/images/feature_play.png",
	"/images/feature_plan.png",
	"/images/feature_history.png",
];

const FeatureSection = () => {
	const [selectedIdx, setSelectedIdx] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);

	// On scroll, update selectedIdx to the feature box most in view
	const handleScroll = () => {
		if (!scrollRef.current) return;
		const children = Array.from(scrollRef.current.children);
		const scrollLeft = scrollRef.current.scrollLeft;
		let minDiff = Infinity;
		let newIdx = selectedIdx;
		children.forEach((child, idx) => {
			const el = child as HTMLElement;
			const left = el.offsetLeft;
			const diff = Math.abs(left - scrollLeft);
			if (diff < minDiff) {
				minDiff = diff;
				newIdx = idx;
			}
		});
		if (newIdx !== selectedIdx) setSelectedIdx(newIdx);
	};

	// Snap to the nearest feature on scroll end
	const handleScrollEnd = () => {
		if (!scrollRef.current) return;
		const children = Array.from(scrollRef.current.children);
		const scrollLeft = scrollRef.current.scrollLeft;
		let minDiff = Infinity;
		let snapIdx = selectedIdx;
		children.forEach((child, idx) => {
			const el = child as HTMLElement;
			const left = el.offsetLeft;
			const diff = Math.abs(left - scrollLeft);
			if (diff < minDiff) {
				minDiff = diff;
				snapIdx = idx;
			}
		});
		const el = children[snapIdx] as HTMLElement;
		if (el) {
			scrollRef.current.scrollTo({ left: el.offsetLeft, behavior: 'smooth' });
			setSelectedIdx(snapIdx);
		}
	};

	return (
		<section id="features" className="pt-32 md:pt-20 py-6 min-h-screen md:min-h-[80vh] flex flex-col items-center justify-between" style={{ backgroundColor: "#1F2024" }}>
			<div className="w-full flex flex-col items-center justify-center mb-4 lg:mb-0">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
					Everything You Need For Your Fitness Goals
				</h2>
				<p className="hidden lg:block text-center mb-0 max-w-xl" style={{ color: '#CBCBD7' }}>
					Atlas provides all the tools you need to create, follow, and track
					your fitness journey with precision and simplicity.
				</p>
			</div>
			<div className="container mx-auto px-2 md:px-16 flex flex-col md:flex-row items-center justify-center gap-6 flex-1 w-full">
				{/* Mobile feature carousel with side borders for prev/next */}
				<div className="w-full md:hidden flex flex-col flex-1 justify-start items-center">
					<div className="flex flex-row items-center w-full max-w-md mx-auto mb-2 px-0 gap-x-2">
						{/* Previous feature border */}
						<div
							className="flex-shrink-0 w-2 h-20 rounded-2xl border-[2px] border-solid border-[#47FF00] opacity-60 cursor-pointer"
							onClick={() => setSelectedIdx((selectedIdx - 1 + features.length) % features.length)}
						/>
						{/* Main feature */}
						<div className="flex-1">
							<div
								className={`rounded-2xl py-4 px-6 border transition-shadow flex flex-col items-center border-[1.5px] border-solid hover:shadow-lg bg-[#1F2024]`}
								style={{
									borderColor: '#47FF00',
									boxShadow: '0 0 24px 0 rgba(71,255,0,0.3)',
								}}
							>
								<h3 className="font-inter text-[20px] leading-[32px] tracking-[0px] font-semibold mb-2 text-white text-center">
									{features[selectedIdx].title}
								</h3>
								<p className="font-inter text-[14px] leading-[20px] tracking-[0px] text-atlas-gray-light text-center">
									{features[selectedIdx].description}
								</p>
							</div>
						</div>
						{/* Next feature border */}
						<div
							className="flex-shrink-0 w-2 h-20 rounded-2xl border-[2px] border-solid border-[#47FF00] opacity-60 cursor-pointer"
							onClick={() => setSelectedIdx((selectedIdx + 1) % features.length)}
						/>
					</div>
					<div className="w-full flex justify-center mt-4 flex-1">
						<img
							src={featureImages[selectedIdx]}
							alt={features[selectedIdx].title + " mockup"}
							className="w-full h-[45vh] object-contain"
						/>
					</div>
				</div>
				{/* Desktop layout remains unchanged */}
				<div className="hidden md:flex w-full md:flex-row items-center justify-center gap-6">
					<div className="w-full md:w-1/2 flex flex-col items-center justify-center">
						<div className="w-full flex flex-col gap-6">
							{features.map((feature, idx) => (
								<button
									key={feature.title}
									onClick={() => setSelectedIdx(idx)}
									className={`w-full rounded-2xl px-6 py-5 border transition-shadow cursor-pointer flex flex-col items-center md:items-start focus:outline-none ${
										selectedIdx === idx
											? "border-[1px] border-solid" // active
											: "border-[1px] border-solid" // inactive
									} hover:shadow-lg`}
									style={{
										borderColor: selectedIdx === idx ? '#47FF00' : '#38393C',
										backgroundColor: '#1F2024',
										boxShadow: selectedIdx === idx ? '0 0 24px 0 rgba(71,255,0,0.3)' : undefined,
									}}
								>
									<h3 className="font-inter text-[20px] leading-[32px] tracking-[0px] font-semibold mb-2 text-white text-center md:text-left">
										{feature.title}
									</h3>
									<p className="font-inter text-[14px] leading-[20px] tracking-[0px] text-atlas-gray-light text-center md:text-left">
										{feature.description}
									</p>
								</button>
							))}
						</div>
					</div>
					<div className="w-full md:w-1/2 flex items-center justify-center mt-8">
						<img
							src={featureImages[selectedIdx]}
							alt={features[selectedIdx].title + " mockup"}
							className="w-full h-full object-contain"
						/>
					</div>
				</div>
			</div>
			{/* Back to top button */}
			<div className="w-full flex justify-center mt-2 mb-4">
				<button
					type="button"
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					className="inline-flex items-center gap-2 text-atlas-gray-light hover:text-atlas-green-strong transition-colors text-base font-medium"
				>
					<span>Back to top</span>
					<ArrowDown className="w-5 h-5 rotate-180" />
				</button>
			</div>
		</section>
	);
};

export default FeatureSection;
