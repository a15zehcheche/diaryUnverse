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
            <day-list :diarys="diarys"></day-list>
        </div>
    </base-layout>
</template>
  
<script>
import DayList from "../components/dialy/DayList.vue";

export default {
    components: {
        DayList
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
</style>