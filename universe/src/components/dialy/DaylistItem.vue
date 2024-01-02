<template>
    <DayListItemImgFrame :imgs="item.imgs" />
    <div class="day-content-box">
        <p class="day-content">{{ item.content }}</p>
        <p v-if="item.imgs.length > 2" class="img-count-text">共{{ item.imgs.length }}张</p>
    </div>
</template>
  
<script>
import DayListItemImgFrame from './DayListItemImgFrame.vue';
export default {
    props: ["item"],
    components: {
        DayListItemImgFrame
    },
}

</script>

<style scoped>


.day-content-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.img-count-text {
    margin-left: 10px;
    margin: 0 10px 0 5px;
    font-size: 12px;
    color: var(--ion-color-step-400);
}
.day-content {
    margin-left: 10px;
    height: 45px;
    margin: 0 10px 0 5px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.3em;
    font-size: 12px;
}
</style>
