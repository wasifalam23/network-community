<script setup>
	const { line_style, members } = defineProps(['line_style', 'members']);
</script>

<template>
	<div
		class="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded-full">
		<!-- Lines -->
		<div
			v-for="member in members"
			class="absolute left-1/2 bottom-1/2 w-1 bg-blue-950 -translate-x-1/2 origin-bottom rounded-full"
			:class="`${line_style} ${getAngleStyle(member.angle).positive}`"></div>

		<!-- Members -->
		<div
			v-for="member in members"
			class="absolute h-full w-full flex justify-center bg-center"
			:class="getAngleStyle(member.angle).positive">
			<div
				class="flex flex-col items-center gap-0.5"
				:class="getMemberStyle(member.size, member.angle)">
				<img class="rounded-full border-2" :src="member.image" alt="" />
				<p
					class="text-xs whitespace-nowrap bg-slate-500 px-1.5 py-0.5 text-gray-50 rounded-md">
					{{ member.name }}
				</p>
			</div>
		</div>
	</div>
</template>
