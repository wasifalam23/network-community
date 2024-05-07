const sizes = [
	{ name: 'xl', style: 'w-20 h-20' },
	{ name: 'lg', style: 'w-16 h-16' },
];

const getMemberStyle = (sizeName, angleName) => {
	const sizeStyle = sizes.find((size) => size.name === sizeName).style;
	const angleStyle = getAngleStyle(angleName).negative;

	return `${sizeStyle} ${angleStyle}`;
};

export default getMemberStyle;
