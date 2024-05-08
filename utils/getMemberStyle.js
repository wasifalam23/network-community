const sizes = [
	{ name: 'xl', style: 'w-16 h-16' },
	{ name: 'lg', style: 'w-14 h-14' },
	{ name: 'md', style: 'w-12 h-12' },
	{ name: 'sm', style: 'w-11 h-11' },
];

const getMemberStyle = (sizeName, angleName) => {
	const sizeStyle = sizes.find((size) => size.name === sizeName).style;
	const angleStyle = getAngleStyle(angleName).negative;

	return `${sizeStyle} ${angleStyle}`;
};

export default getMemberStyle;
