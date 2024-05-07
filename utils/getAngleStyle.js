const angles = [
	{
		name: '0deg',
		style: { positive: 'rotate-[0deg]', negative: '-rotate-[0deg]' },
	},
	{
		name: '15deg',
		style: { positive: 'rotate-[15deg]', negative: '-rotate-[15deg]' },
	},
	{
		name: '30deg',
		style: { positive: 'rotate-[30deg]', negative: '-rotate-[30deg]' },
	},
	{
		name: '45deg',
		style: { positive: 'rotate-[45deg]', negative: '-rotate-[45deg]' },
	},
	{
		name: '60deg',
		style: { positive: 'rotate-[60deg]', negative: '-rotate-[60deg]' },
	},
	{
		name: '75deg',
		style: { positive: 'rotate-[75deg]', negative: '-rotate-[75deg]' },
	},
	{
		name: '90deg',
		style: { positive: 'rotate-[90deg]', negative: '-rotate-[90deg]' },
	},
	{
		name: '105deg',
		style: { positive: 'rotate-[105deg]', negative: '-rotate-[105deg]' },
	},
	{
		name: '120deg',
		style: { positive: 'rotate-[120deg]', negative: '-rotate-[120deg]' },
	},
	{
		name: '135deg',
		style: { positive: 'rotate-[135deg]', negative: '-rotate-[135deg]' },
	},
	{
		name: '150deg',
		style: { positive: 'rotate-[150deg]', negative: '-rotate-[150deg]' },
	},
	{
		name: '165deg',
		style: { positive: 'rotate-[165deg]', negative: '-rotate-[165deg]' },
	},
	{
		name: '180deg',
		style: { positive: 'rotate-[180deg]', negative: '-rotate-[180deg]' },
	},
	{
		name: '195deg',
		style: { positive: 'rotate-[195deg]', negative: '-rotate-[195deg]' },
	},
	{
		name: '210deg',
		style: { positive: 'rotate-[210deg]', negative: '-rotate-[210deg]' },
	},
	{
		name: '225deg',
		style: { positive: 'rotate-[225deg]', negative: '-rotate-[225deg]' },
	},
	{
		name: '240deg',
		style: { positive: 'rotate-[240deg]', negative: '-rotate-[240deg]' },
	},
	{
		name: '255deg',
		style: { positive: 'rotate-[255deg]', negative: '-rotate-[255deg]' },
	},
	{
		name: '270deg',
		style: { positive: 'rotate-[270deg]', negative: '-rotate-[270deg]' },
	},
	{
		name: '285deg',
		style: { positive: 'rotate-[285deg]', negative: '-rotate-[285deg]' },
	},
	{
		name: '300deg',
		style: { positive: 'rotate-[300deg]', negative: '-rotate-[300deg]' },
	},
	{
		name: '315deg',
		style: { positive: 'rotate-[315deg]', negative: '-rotate-[315deg]' },
	},
	{
		name: '330deg',
		style: { positive: 'rotate-[330deg]', negative: '-rotate-[330deg]' },
	},
	{
		name: '345deg',
		style: { positive: 'rotate-[345deg]', negative: '-rotate-[345deg]' },
	},
	{
		name: '360deg',
		style: { positive: 'rotate-[360deg]', negative: '-rotate-[360deg]' },
	},
];

const getAngleStyle = (angleName) => {
	const angleStyle = angles.find((angle) => angle.name === angleName).style;
	return angleStyle;
};

export default getAngleStyle;
