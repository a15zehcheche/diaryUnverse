<template>
    
    <div class="day-img"><img :src="item.imgs[0]" alt="img"></div>
    <p class="day-content">{{ item.content }}</p>
</template>
  
<script>
export default {
    props: ["item"],
    components: {

    },
}

</script>

<style scoped>


.day-img {
    width: 75px;
    height: auto;
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
