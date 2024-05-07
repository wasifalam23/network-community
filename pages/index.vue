<script setup>
	import { members } from '@/configs/members.json';
	import { connections } from '@/configs/connections.json';
	import { central_member } from '@/configs/members.json';

	const connectionGroup = ref([]);

	onMounted(() => {
		// Group members by connection type
		const groupedByConnection = connections.map((conn) => {
			const matchingMembers = members.filter(
				(member) => member.connection === conn.name
			);

			return {
				style: conn.style,
				line_style: conn.line_length,
				members: matchingMembers,
			};
		});

		// Remove any objects without members
		const result = groupedByConnection.filter(
			(group) => group.members.length > 0
		);

		connectionGroup.value = result;
	});
</script>

<template>
	<main
		class="w-[600px] h-[600px] rounded-full my-24 mx-auto relative border-[3px]">
		<div
			class="w-[94%] h-[94%] absolute left-1/2 bottom-1/2 rounded-full bg-gray-100 -translate-x-1/2 translate-y-1/2">
			<CmtyCircle
				v-for="group in connectionGroup"
				:class="group.style"
				:line_style="group.line_style"
				:members="group.members" />

			<!-- Center Member -->
			<div
				class="w-24 h-w-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[6px] border-gray-100 bg-center rounded-full">
				<div>
					<img
						class="border-[3px] border-gray-500 rounded-full"
						:src="central_member.image"
						:alt="central_member.name" />
				</div>
			</div>
		</div>
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
