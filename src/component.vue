<template>
<div class="stars">
    <input :value="rating" :name="name" type="hidden" :required="required"/>
    <span v-for="value in values" :key="value"
        @click="rating=value">
        <font-awesome-icon class="star" :icon="['fas', 'star']" v-if="rating > value - 1"/>
        <font-awesome-icon class="star" :icon="['far', 'star']" v-else/>
    </span>
</div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as faStarFilled} from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: "FiveStarInput",
    components: {
        FontAwesomeIcon
    },
    props: [
        'name', 'value', 'required'
    ],
    data() {
        return {
            rating: this.value ?? null,
            filledStar: '',
            emptyStar: '',
            values: [1,2,3,4,5]
        }
    },
    created() {
        library.add(faStar, faStarFilled)
    }
}
</script>
<style scoped>
    div.radio-buttons, div.labels {
        display: flex;
        justify-content: space-around;
    }
    .star {
        margin: 0 0.3rem;
        width: unset;
    }
    .star:hover {
        cursor: pointer;
    }
</style>
