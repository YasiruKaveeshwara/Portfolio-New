import { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
	const [particlesConfig, setParticlesConfig] = useState<Record<string, unknown> | null>(null);

	useEffect(() => {
		fetch("/particleConfig.json")
			.then((response) => response.json())
			.then((data) => setParticlesConfig(data))
			.catch((error) => console.error("Error loading particles configuration:", error));
	}, []);

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine);
	}, []);

	return (
		<div className='particles-wrapper'>
			{particlesConfig && <Particles id='tsparticles' init={particlesInit} options={particlesConfig as any} />}
		</div>
	);
};

export default ParticlesBackground;
