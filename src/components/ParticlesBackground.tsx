import { useCallback, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import particlesConfig from "../../public/particleConfig.json";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: Parameters<typeof loadSlim>[0]) => {
		await loadSlim(engine);
	}, []);

	const options = useMemo(() => particlesConfig as unknown as ISourceOptions, []);

	return (
		<ParticlesProvider init={particlesInit}>
			<div className='particles-wrapper'>
				<Particles id='tsparticles' options={options} />
			</div>
		</ParticlesProvider>
	);
};

export default ParticlesBackground;
