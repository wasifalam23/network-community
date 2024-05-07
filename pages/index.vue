<script setup>
	import img from "@/assets/default.jpg";
</script>

<template>
	<main
		class="w-[500px] h-[500px] rounded-full my-24 mx-auto relative border-[3px]">
		<div
			class="w-[550px] h-[550px] absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2">
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom rotate-[30deg]"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>
			<div
				class="absolute left-1/2 bottom-1/2 w-1 h-[35%] bg-blue-950 -translate-x-1/2 origin-bottom"></div>

			<div
				class="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden border-[10px] border-white bg-center rounded-full">
				<img class="border-2 border-black rounded-full" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[30deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[60deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[90deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[120deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[150deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[180deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[210deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[240deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[270deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[300deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[330deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>

			<div class="absolute h-full w-full flex justify-center rotate-[360deg]">
				<img class="w-16 h-16 rounded-full border-2" :src="img" alt="" />
			</div>
		</div>
	</main>
</template>

<style scoped>
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
</style>
