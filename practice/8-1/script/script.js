const imageThumbnail = Vue.component('image-thumbnail', {
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  template: `<div class="img-box" :style="{ backgroundImage: 'url(' + path + ')' }" @click="$emit('clickimage')"></div>`
});