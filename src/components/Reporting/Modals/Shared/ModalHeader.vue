<template>
	<q-card-section class="row">
	  <div class="text-h6"><slot></slot></div>
	  <q-btn
	  	flat
	  	round
	  	dense
		label="print"
	  	icon="print"
		@click="$emit('print')"
		class="q-ml-lg" />
	  <q-space />
	  <q-btn
	   	v-close-popup
	  	flat
	  	round
	  	dense
	  	icon="close" />
	</q-card-section>
</template>

<script>
	export default {
	
	}
</script>