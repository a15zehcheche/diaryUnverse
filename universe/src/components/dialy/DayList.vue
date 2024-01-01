<template>
    <div class="day" v-for="(day, count) in diarys" :key="count">
        <div class="day-date">
            <span class="date-month">
                <span class="date-day">{{ convertToTwoDigit(day.day) }}</span>
                {{ day.month }}月
            </span>
        </div>
        <div class="item-box">
            <div class="item" v-for="(item, count) in day.items" :key="count">
                <DaylistItem :item="item"></DaylistItem>
            </div>
        </div>
    </div>
</template>
  
<script>
import DaylistItem from './DaylistItem.vue';

export default {
    props: ["diarys"],
    components: {
        DaylistItem
    },
    methods: {
        convertToTwoDigit(number) {
            return number < 10 ? '0' + number.toString() : number.toString();
        },
    },
};

</script>

<style scoped>
.day {
    display: grid;
    grid-template-columns: 75px auto;
    margin: 25px 0 25px 0;

}

.day .day-date {
    display: flex;
    justify-content: start;
    align-items: start;
    width: 75px;
    margin-left: 3px;
}

.day-date .date-day {
    font-size: 25px;
    font-weight: 700;
}

.day-date .date-month {
    font-size: 15px;
    font-weight: 700;
}

.item {
    display: grid;
    grid-template-columns: 75px auto;
}

</style>
