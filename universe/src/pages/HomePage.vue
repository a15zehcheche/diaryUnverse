<template>
    <base-layout page-title="主页">
        <div class="home-header">
            <div class="profiles-box">
                <div class="user-name">
                    <span>阡陌</span>
                </div>
                <img class="user-img" src="https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp"
                    alt="profilesImg">
            </div>
        </div>
        <div class="body">
            <div class="diary" v-for="(diary, count) in diarys" :key="diary.id">
                <div class="diary-date">

                    <span class="date-month">
                        <span class="date-day">{{ convertToTwoDigit(diary.day) }}</span>
                        {{ diary.month }}月
                    </span>
                </div>
                <div class="diary-img"><img :src="diary.imgs[0]" alt="img"></div>
                <p class="diary-content">{{ diary.content }}</p>
            </div>
        </div>
    </base-layout>
</template>
  
<script>

export default {
    components: {
    },
    methods: {
        saveMemory(memoryData) {
            this.$store.dispatch('addMemory', memoryData);
            this.$router.back()
        }
    },
    computed: {
        diarys() {
            return this.$store.getters.diarys;
        },
    },
    methods: {
        convertToTwoDigit(number) {
            return number < 10 ? '0' + number.toString() : number.toString();
        },
    },
};
</script>

<style>
.home-header {
    height: 300px;
    width: 100%;
    background-image: url('https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg.webp');
    position: relative;
}

.profiles-box {
    display: flex;
    position: absolute;
    bottom: -20px;
    right: 15px;
}

.profiles-box .user-name {
    color: aliceblue;
    padding-right: 10px;
    font-size: 20px;
    height: 45px;
    display: flex;
    align-self: center;
}

.profiles-box .user-img {
    height: 75px;
    width: 75px;
    border-radius: 5px;
}

.body {
    margin-top: 50px;
}

.diary {
    display: grid;
    grid-template-columns: 75px 75px auto;

}

.diary .diary-date {
    display: flex;
    justify-content: start;
    align-items: start;
    width: 75px;
    margin-left: 3px;
}

.diary-date .date-day {
    font-size: 25px;
    font-weight: 700;
}

.diary-date .date-month {
    font-size: 15px;
    font-weight: 700;
}

.diary .diary-img {
    width: 75px;
    height: auto;
}

.diary .diary-content {
    margin-left: 10px;
    height: 45px;
    margin: 0 10px 0 5px ;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.3em;
    font-size: 12px;
}</style>