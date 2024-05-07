<script setup>
	import { members } from '@/configs/members.json';
	import { central_member } from '@/configs/members.json';

	const connections = [
		{
			name: 'distant',
			style: 'w-[116%] h-[116%]',
			line_length: 'h-[35%]',
		},
		{ name: 'far', style: 'w-[90%] h-[90%]', line_length: 'h-[32%]' },
		{ name: 'medium', style: 'w-[70%] h-[70%]', line_length: 'h-[32%]' },
		{ name: 'close', style: 'w-[50%] h-[50%]', line_length: 'h-[32%]' },
	];

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
		console.log(connectionGroup.value);
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

<style scoped>
	.distant {
		width: 116%;
		height: 116%;
	}

	.far {
		width: 90%;
		height: 90%;
	}

	.medium {
		width: 70%;
		height: 70%;
	}

	.close {
		width: 50%;
		height: 50%;
	}
</style>
