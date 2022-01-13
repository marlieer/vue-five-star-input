<template>
<div class="stars">
    <input :value="rating" :name="name" type="hidden"/>
    <img v-for="value in values" :key="value" 
        :src="rating > value - 1 ? filledStar : emptyStar" 
        height="28px" width="28px" 
        @click="rating=value" 
        class="star"/>
</div>
</template>
<script>
export default {
    name: "VueFiveStarInput",
    props: [
        'name', 'value'
    ],
    data() {
        return {
            rating: this.value ?? null,
            filledStar: '',
            emptyStar: '',
            values: [1,2,3,4,5]
        }
    }
}
</script>
<style lang="scss" scoped>
    div.radio-buttons, div.labels {
        display: flex;
        justify-content: space-around;
    }
    .star {
        margin: 0 0.3rem;
    }
    .star:hover {
        cursor: pointer;
    }
</style>
