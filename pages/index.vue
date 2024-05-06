<script setup>
	import img from "@/assets/default.jpg";
</script>

<template>
	<main class="cmty">
		<div class="cmty-sc">
			<div class="line line-1"></div>
			<div class="line line-2"></div>
			<div class="line line-3"></div>
			<div class="line line-4"></div>
			<div class="line line-5"></div>
			<div class="line line-6"></div>
			<div class="line line-7"></div>
			<div class="line line-8"></div>
			<div class="line line-9"></div>
			<div class="line line-10"></div>
			<div class="line line-11"></div>
			<div class="line line-12"></div>

			<div class="center">
				<img class="center-img" :src="img" alt="" />
			</div>

			<div class="av av-1">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-2">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-3">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-4">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-5">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-6">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-7">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-8">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-9">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-10">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-11">
				<img class="av-img" :src="img" alt="" />
			</div>
			<div class="av av-12">
				<img class="av-img" :src="img" alt="" />
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
