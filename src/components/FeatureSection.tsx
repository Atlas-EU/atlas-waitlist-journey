import React, { useState } from "react";

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

	return (
		<section id="features" className="py-20 min-h-[80vh] flex flex-col items-center justify-center" style={{ backgroundColor: "#1F2024" }}>
			<div className="w-full flex flex-col items-center justify-center mb-0">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
					Everything You Need For Your Fitness Goals
				</h2>
				<p className="text-center mb-0 max-w-xl" style={{ color: '#CBCBD7' }}>
					Atlas provides all the tools you need to create, follow, and track
					your fitness journey with precision and simplicity.
				</p>
			</div>
			<div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-center gap-6">
				<div className="w-full md:w-1/2 flex flex-col items-center justify-center">
					<div className="w-full flex flex-col gap-6">
						{features.map((feature, idx) => (
							<button
								key={feature.title}
								onClick={() => setSelectedIdx(idx)}
								className={`w-full rounded-2xl px-6 py-5 border transition-shadow cursor-pointer flex flex-col items-start focus:outline-none ${
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
								<h3 className="font-inter text-[20px] leading-[32px] tracking-[0px] font-semibold mb-2 text-white">
									{feature.title}
								</h3>
								<p className="font-inter text-[14px] leading-[20px] tracking-[0px] text-atlas-gray-light">
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
		</section>
	);
};

export default FeatureSection;
