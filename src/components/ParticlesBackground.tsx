import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, RecursivePartial, IOptions } from "tsparticles-engine";
import particlesConfig from "../../public/particleConfig.json";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine);
	}, []);

	return (
		<div className='particles-wrapper'>
			<Particles
				id='tsparticles'
				init={particlesInit}
				options={particlesConfig as RecursivePartial<IOptions>}
			/>
		</div>
	);
};

export default ParticlesBackground;
