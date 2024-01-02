<template>
    <div v-if="imgLen == 2" class="day-img-box imglen2">
        <div class="img-frame" v-for="(img, count) in imgs" :key="count">
            <img :src="img" alt="img">
        </div>
    </div>
    <div v-else-if="imgLen == 3" class="day-img-box imglen3">
        <div class="img-frame">
            <img :src="imgs[0]" alt="img">
        </div>
        <div class="img-frame">
            <div>
                <img :src="imgs[1]" alt="img">
            </div>
            <div>
                <img :src="imgs[2]" alt="img">
            </div>
        </div>
    </div>
    <div v-else-if="imgLen >= 4 " class="day-img-box imglen4">
        <div class="img-frame" v-for="(img, count) in imgs" :key="count">
            <img :src="img" alt="img">
        </div>
    </div>
    <div v-else class="day-img-box">
        <div class="img-frame-1">
            <img :src="imgs[0]" alt="img">
        </div>
    </div>
</template>
  
<script>
export default {
    props: ["imgs"],
    data() {
        return {

        }
    },
    computed: {
        imgLen() {
            return this.imgs.length
        }
    },
}

</script>

<style scoped>
.day-img-box {
    width: 75px;
    height: 75px;
    display: flex;
}

img {
    height: 100%;
    width: auto;
    object-fit: cover;
}

.img-frame-1 {
    height: 100%;
    width: 100%;

}
/* 2 picture */
.imglen2 .img-frame {
    height: 100%;
    width: 50%;

}

.imglen2 .img-frame:nth-child(1) {
    margin-right: 1px;
}


/* 3 picture */
.imglen3>.img-frame {
    height: 100%;
    width: 50%;
}

.imglen3>.img-frame:nth-child(1) {
    margin-right: 1px;
}

.imglen3>.img-frame:nth-child(2) div {
    display: block;
    height: 50%;
}

.imglen3>.img-frame:nth-child(2)>div:nth-child(1) img{
    width: 100%;
    padding-bottom: 1px;
}

/* 4 picture */
.imglen4{
    display: flex;
    flex-wrap: wrap;
}
.imglen4 .img-frame{
    height: 50%;
    width: 50%;
}
.imglen4 .img-frame img{
    padding: 0.5px;
}
</style>
