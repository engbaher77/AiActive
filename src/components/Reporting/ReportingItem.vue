<template>
  <div class="q-mt-lg">
    <button @click="printViolation('all')">print all</button>
    <q-list
      bordered
      v-for="lpr in reportingData"
      :key="lpr.id"
      class="q-ma-md card-style"
    >
      <q-item class="card-style">
        <q-item-section avatar>
          <q-icon name="speed" color="teal" size="34px" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1" class="text-weight-bold">
            <span class="q-pa-lg">{{ lpr.id }}</span>
            <span class="q-pa-lg">{{ lpr.plate_number }}</span>
            <span class="q-pa-lg">{{ lpr.country }}</span>
            <span class="q-pa-lg">{{ lpr.date_time }}</span>
            <span class="q-pa-lg"> {{ lpr.speed / 100 }} KM/h </span>
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label lines="1" class="text-weight-bold text-teal">
            <span class="q-pa-lg">Speed Violation</span>
          </q-item-label>
        </q-item-section>

        <!-- Action Buttons -->
        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <!-- Print Button -->
            <q-btn
              class=""
              size="12px"
              flat
              dense
              round
              icon="print"
              @click="printViolation(lpr.id)"
            />
            <!-- Select Button -->
            <q-btn
              class=""
              size="12px"
              flat
              dense
              round
              icon="done"
              @click="select(lpr.id)"
            />

            <!-- :color="selectedData.includes(lpr.id) ? 'teal' : ''" -->
            <!-- Unconfirm Button -->
            <q-btn class="" size="12px" flat dense round icon="undo" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <!-- Print Violation Dialog -->
    <q-dialog v-model="printViolationDialog">
      <print-violation @close="printViolationDialog = false" />
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      //selected: [],
      //showPrintViolationDialog: false,
      reportingData: [
        {
          id: 249,
          device_name: "10417",
          plate_number: "‭١٤٩‬‭ص‌ر‌م‬",
          country: "EGY",
          date_time: "2019-07-30, 13:56:31",
          speed: "1192"
        },
        {
          id: 249,
          device_name: "10417",
          plate_number: "‭١٤٩‬‭ص‌ر‌م‬",
          country: "EGY",
          date_time: "2019-07-30, 13:56:31",
          speed: "1192"
        },
        {
          id: 249,
          device_name: "10417",
          plate_number: "‭١٤٩‬‭ص‌ر‌م‬",
          country: "EGY",
          date_time: "2019-07-30, 13:56:31",
          speed: "1192"
        }
      ]
    };
  },

  components: {
    "print-violation": require("components/Reporting/Modals/PrintViolation")
      .default
  },

  methods: {
    ...mapActions("reporting", [
      "setSelectedData",
      "setViolationToPrint",
      "setPrintViolationDialog"
    ]),

    select(reportId) {
      let action = "add";

      this.selectedData.includes(reportId) ? (action = "remove") : "add";

      this.setSelectedData({
        action: action,
        id: reportId
      });
    },

    printViolation(reportId) {
      this.printViolationDialog = true;
      this.setViolationToPrint(reportId);
    }
  },
  computed: {
    // ...mapState('reporting', ['selectedData', 'showPrintViolationDialog']),

    printViolationDialog: {
      get() {
        return this.showPrintViolationDialog;
      },
      set(value) {
        return this.setPrintViolationDialog(value);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.card-style {
  background-color: #adadad2b !important;
}
</style>
