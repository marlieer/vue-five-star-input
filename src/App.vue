<template>
  <div id="app">
    <p>Please rate your experience</p> 
    <five-star-input name="test"/>
  </div>
</template>

<script>
import FiveStarInput from './component.vue'

export default {
  components: {
    FiveStarInput
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.star {
  color: goldenrod;
  height: 30px;
}
</style>
