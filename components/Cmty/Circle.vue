<script setup>
	import img from '@/assets/default.jpg';

	const { line_style, member_info } = defineProps([
		'line_style',
		'member_info',
	]);
</script>

<template>
	<div
		class="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded-full">
		<!-- Lines -->
		<div
			v-for="member in member_info"
			class="absolute left-1/2 bottom-1/2 w-1 bg-blue-950 -translate-x-1/2 origin-bottom rounded-full"
			:class="`${line_style} ${member.position}`"></div>

		<!-- Center Member -->
		<div
			class="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden border-[10px] border-white bg-center rounded-full">
			<img
				class="border-[3px] border-gray-500 rounded-full"
				src="https://mighty.tools/mockmind-api/content/human/41.jpg"
				alt="" />
		</div>

		<!-- Members -->
		<div
			v-for="member in member_info"
			class="absolute h-full w-full flex justify-center bg-center"
			:class="member.position">
			<img
				class="rounded-full border-2"
				:class="`h-${member.size.size} w-${member.size.size}`"
				:src="member.image"
				alt="" />
		</div>
	</div>
</template>
