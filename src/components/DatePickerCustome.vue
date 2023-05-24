<template>
  <div class="custome-datepicker">
    <div class="form-group">
      <label :class="labelClass">{{label}}</label>
      <date-picker type="date" v-model="selectedDate" @change="datePicked" :placeholder="placeholder"></date-picker>
    </div>
  </div>
</template>
<script>

import DatePicker from "vue2-datepicker";
export default {
  name: "DatePickerCustome",
  props: {
    placeholder: {
      default: 'Please select date'
    },
    label: {
      default: 'Please select date'
    },
    labelClass: {
      default: ""
    }
  },
  components: { DatePicker },
  data () {
    return {
      selectedDate: ""
    }
  },
  methods: {
    setDate(val) {
      this.selectedDate = new Date(val);      
    },
    datePicked() {
      let selectedDate = this.selectedDate.toISOString().split('T')[0];
      this.$emit('datePicked', selectedDate)
      let parsedDate = NepaliFunctions.ParseDate(selectedDate);
      let bsDate = NepaliFunctions.AD2BS(parsedDate.parsedDate);
      bsDate = `${bsDate.year}-${bsDate.month}-${bsDate.day}`;
      this.$emit('getBsDate', bsDate)
    }
  }
};
</script>