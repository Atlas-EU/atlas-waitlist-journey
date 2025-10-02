import React, { useState, useRef } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Calendar, Target, Settings, Trophy } from 'lucide-react';

const features = [
	{
		title: "Your Daily Game Plan",
		description:
			"Stop second-guessing your training. Have your training week ready to go.",
		href: "#your-daily-game-plan",
		icon: Calendar,
	},
	{
		title: "Execute With Precision",
		description:
			"Beat your previous best. Track every rep, set, and weight with ease.",
		href: "#execute-with-precision",
		icon: Target,
	},
  {
		title: "Dynamic Routine Builder",
		description:
			"Your training is flexible, so is Atlas. Plan every detail, or just keep it simple.",
		href: "#custom-routines",
		icon: Settings,
	},
  {
		title: "Progress Unlocked",
		description:
			"Visualize your personal records. See stats, spot trends, and stay locked in.",
		href: "#progress-unlocked",
		icon: Trophy,
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
		<section id="features" className="py-16 md:py-16 min-h-screen flex flex-col items-center justify-around bg-[#1F2024]">
			<div className="w-full flex flex-col items-center justify-center gap-y-4 pt-8">
				<h2 className="text-3xl md:text-4xl font-bold text-center">
					<span className="text-[#47FF00]">Everything You Need</span> For Your Fitness Goals
				</h2>
				<p className="font-inter text-[18px] leading-[24px] font-normal mb-2 max-w-lg mx-auto text-center whitespace-normal md:whitespace-nowrap" style={{ color: 'rgb(143 144 152 / var(--tw-text-opacity, 1))' }}>
					The all-in-one tool to create, perform and track your workouts.
				</p>
			</div>
			<div className="container mx-auto max-w-5xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8 flex-1 w-full">
				{/* Mobile vertical features list, no image */}
				<div className="w-full md:hidden flex flex-col justify-start items-center">
					<div className="w-full max-w-lg mx-auto flex flex-col gap-4">
						{features.map((feature, idx) => (
							<button
								key={feature.title}
								onClick={() => setSelectedIdx(idx)}
								className={`w-full rounded-2xl px-6 py-3 border transition-shadow cursor-pointer flex flex-col items-center focus:outline-none ${
									selectedIdx === idx
										? "border-[1px] border-solid"
										: "border-[1px] border-solid"
								} hover:shadow-lg`}
								style={{
									borderColor: selectedIdx === idx ? '#47FF00' : '#38393C',
									backgroundColor: '#1F2024',
									boxShadow: selectedIdx === idx ? '0 0 24px 0 rgba(71,255,0,0.3)' : undefined,
								}}
							>
								<h3 className="font-inter text-[20px] leading-[32px] font-semibold mb-2 text-white text-center flex items-center justify-center">
									<feature.icon className="w-5 h-5 mr-2 flex-shrink-0 text-[#47FF00]" />
									{feature.title}
								</h3>
								<p className="font-inter text-[14px] leading-[20px] text-atlas-gray-light text-center">
									{feature.description}
								</p>
							</button>
						))}
					</div>
				</div>
				{/* Desktop layout remains unchanged */}
				<div className="hidden md:flex w-full md:flex-row items-center justify-center gap-8">
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
									<h3 className="font-inter text-[20px] leading-[32px] font-semibold mb-2 text-white text-center md:text-left flex items-center justify-center md:justify-start">
										<feature.icon className="w-5 h-5 mr-2 flex-shrink-0 text-[#47FF00]" />
										{feature.title}
									</h3>
									<p className="font-inter text-[14px] leading-[20px] text-atlas-gray-light text-center md:text-left">
										{feature.description}
									</p>
								</button>
							))}
						</div>
					</div>
					<div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
						<img
							src={featureImages[selectedIdx]}
							alt={features[selectedIdx].title + " mockup"}
							className="w-full h-full object-contain"
						/>
					</div>
				</div>
			</div>
			{/* Back to top button */}
			<div className="w-full flex justify-center mt-8">
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
