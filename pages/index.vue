<script setup>
	const positions = [
		'0deg',
		'30deg',
		'60deg',
		'90deg',
		'120deg',
		'150deg',
		'180deg',
		'210deg',
		'240deg',
		'270deg',
		'300deg',
		'330deg',
		'360deg',
	];

	const circle_config = ref([
		{
			style: 'w-[110%] h-[110%] z-[1000]',
			line_style: 'h-[35%]',
			max_member: 3,
			members: [
				{
					name: 'John Smith',
					image: 'https://mighty.tools/mockmind-api/content/human/65.jpg',
					size: 'lg',
					angle: '30deg',
				},
				{
					name: 'Emma Jones',
					image: 'https://mighty.tools/mockmind-api/content/human/44.jpg',
					size: 'lg',
					angle: '150deg',
				},
				{
					name: 'Ben Miller',
					image: 'https://mighty.tools/mockmind-api/content/human/57.jpg',
					size: 'xl',
					angle: '240deg',
				},
			],
		},
		// {
		// 	style: 'w-[90%] h-[90%]',
		// 	line_style: 'h-[32%]',
		// 	max_member: 2,
		// 	members: [
		// 		{
		// 			name: 'Zoe Taylor',
		// 			image: 'https://mighty.tools/mockmind-api/content/human/8.jpg',
		// 			size: 'lg',
		// 			angle: '90deg',
		// 		},
		// 		{
		// 			name: 'Alex Davis',
		// 			image: 'https://mighty.tools/mockmind-api/content/human/46.jpg',
		// 			size: 'lg',
		// 			angle: '300deg',
		// 		},
		// 	],
		// },
	]);
</script>

<template>
	<main
		class="w-[600px] h-[600px] rounded-full my-24 mx-auto relative border-[3px]">
		<CmtyCircle
			v-for="circle in circle_config"
			:class="circle.style"
			:line_style="circle.line_style"
			:members="circle.members" />
	</main>
</template>

<!-- <style scoped>
	.cmty {
		width: 500px;
		height: 500px;
		border-radius: 50%;
		border: 3px solid rgb(197, 197, 197);
		margin: 6rem auto;
		position: relative;
	}

	.cmty-sc {
		width: 550px;
		height: 550px;
		/* border: 1px solid blue; */
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.av {
		--rotation: 0;
		position: absolute;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		transform: rotate(var(--rotation));

		/* border: 1px solid green; */
	}

	.av-1 {
		--rotation: 30deg;
	}

	.av-2 {
		--rotation: 60deg;
	}

	.av-3 {
		--rotation: 90deg;
	}

	.av-4 {
		--rotation: 120deg;
	}

	.av-5 {
		--rotation: 150deg;
	}

	.av-6 {
		--rotation: 180deg;
	}

	.av-7 {
		--rotation: 210deg;
	}

	.av-8 {
		--rotation: 240deg;
	}

	.av-9 {
		--rotation: 270deg;
	}

	.av-10 {
		--rotation: 300deg;
	}

	.av-11 {
		--rotation: 330deg;
	}

	.av-12 {
		--rotation: 360deg;
	}

	.av-img {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		border: 2px solid black;
	}

	.center {
		width: 8rem;
		height: 8rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		/* overflow: hidden; */
		border: 10px solid white;
		background: center;
		object-fit: cover;
	}

	.center-img {
		border: 2px solid black;
		border-radius: 50%;
	}

	.line {
		position: absolute;
		left: 50%;
		bottom: 50%;
		width: 4px;
		height: 35%;
		border-radius: 10px;
		background-color: rgb(0, 0, 80);
		transform: translateX(-50%) rotate(0deg);
		transform-origin: bottom;
	}
</style> -->
