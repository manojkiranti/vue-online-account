<template>
  <div class="nepali-date-picker">
    <div class="form-group">
      <label for="nepali-datepicker" :class="labelClass">{{ label }}</label>
      <input
        type="text"
        class="form-control"
        id="nepali-datepicker"
        :placeholder="placeholder"
        @change="dateInput"
        v-model="datePicked"
      />
    </div>
  </div>
</template>
<script>

export default {
  name: "NepaliDatePicker",
  props: {
    label: {
      default: "Nepali Date",
    },
    placeholder: {
      default: "Select date BS",
    },
    minDate: {
      default: "",
    },
    maxDate: {
      default: "",
    },
    minMonth: {
      default: "",
    },
    maxMonth: {
      default: "",
    },
    inputClass: {
      default: "date-picker-np",
    },
    inputMargin: {
      default: 0,
    },
    labelClass: {
      default: ""
    },
    disableDaysAfter: {
      default: 0
    }
  },
  data() {
    return {
      datePicked: "",
    };
  },
  mounted() {
    var mainInput = document.getElementById("nepali-datepicker");
    mainInput.nepaliDatePicker({
      onChange: () => {
        this.dateInput();
      },
      disableDaysAfter: this.disableDaysAfter,
      ndpYear: true,
      ndpMonth: true

    });
  },
  methods: {
    dateInput() {
      this.datePicked = document.getElementById("nepali-datepicker").value;
      this.$emit("datePicked", this.datePicked);
      let fomattedDate = NepaliFunctions.ParseDate(this.datePicked);
      console.log(NepaliFunctions.BS2AD(fomattedDate.parsedDate));
      let adDate = NepaliFunctions.BS2AD(fomattedDate.parsedDate);
      let formattedAdDate = NepaliFunctions.ConvertDateFormat(adDate, "YYYY-MM-DD")
      console.log('formattedAdDate', formattedAdDate)
      this.$emit("getAdDate", formattedAdDate )
    },
    setDate(date) {
      var mainInput = document.getElementById("nepali-datepicker");
      mainInput.value = date;
    }
  },
};
</script>