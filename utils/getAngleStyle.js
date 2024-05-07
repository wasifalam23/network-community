import { angles } from '@/configs/styles.json';

const getAngleStyle = (angleName) => {
	const angleStyle = angles.find((angle) => angle.name === angleName).style;
	return angleStyle;
};

export default getAngleStyle;
