# vue-five-star-input
Use this Five Star Input in your vue projects to easily get user input using stars. You can easily adjust the colour and height of the star icons to fit your project. Use the `name` prop to give your input field a name for the form you put it in. It uses a hidden input field with that name and the value of the stars selected.
## Project setup
```
npm install
```

## Usage
Import into your Vue project
```
import FiveStarInput from 'vue-five-star-input';
export default { 
    components: {
        FiveStarInput,
    }
}
```
Use in your project
```
<five-star-input name="customer-review" value="3" />
```

##  Props:
`name`: The name of the input field

`value`: (optional) Default value of the five stars (0-5)

`required`: (optional. default=false). Boolean whether the input field is required

## Styling:
Style the stars using the `.star` class. You can change the color and height of the icons.

## Example
![image of five star input asking for a review](https://github.com/marlieer/vue-five-star-input/blob/main/FivestarInput.png?raw=true)
```
<template>
  <div id="app">
    <p>Please rate your experience</p> 
    <five-star-input name="test" value="3" :required="true"/>
  </div>
</template>

<script>
import FiveStarInput from 'vue-five-star-input'
export default {
  components: {
    FiveStarInput
  }
}
</script>

<style>
...
.star {
  color: goldenrod;
  height: 30px;
}
</style>

```