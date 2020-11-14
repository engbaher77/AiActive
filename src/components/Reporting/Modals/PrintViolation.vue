<template>
	<q-card class="print-violation">
    
        <!-- <modal-header
          class="print-hide"
		  @print="print">
		  Violation Preview
		</modal-header> -->

        <modal-violation-content
			:doPrint="doPrint"
           :violationToPrint="violationToPrint"
		   :printPreview="printPreview" />


  </q-card>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		props: ["violationToPrint","printPreview"],
		data() {
			return {
				doPrint: false
			}
		},
		watch: {

		},
    components: {
        'modal-header': require('./Shared/ModalHeader').default,
        'modal-violation-content': require('./Shared/ModalViolationContent').default
    },
		methods: {
			print() {
				//console.log('printing', this.violationToPrint);
				this.doPrint = true;
				//window.print();
			}
		},
		mounted() {
		},
		computed: {
			// ...mapState('reporting', ['violationToPrint'])
		}
	}
</script>
<style scoped>
	.print-violation {
		justify-content: center;
		min-width: 21.5cm;
	}
</style>