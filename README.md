# vue-five-star-input

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
![image of five star input asking for a review](https://github.com/marlieer/vue-five-star-input/blob/[main]/FivestarInput.png?raw=true)