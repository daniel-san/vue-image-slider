Vue.component('image-slider', {
  template: '<div>\
  <p>\
    <a @click="prev">Previous</a> || <a @click="next">Next</a>\
  </p>\
  <transition-group name="fade" tag="div">\
  <div\
    v-for="number in [currentNumber]"\
    :key="number"\
    >\
    <img \
      :src="currentImage" \
      @mouseover="stopRotation" \
      @mouseout="startRotation"/>\
  </div>\
  </transition-group>\
</div>',

  data() {
    return { 
      images: ['http://i.imgur.com/vYdoAKu.jpg', 'http://i.imgur.com/PUD9HQL.jpg', 'http://i.imgur.com/Lfv18Sb.jpg', 'http://i.imgur.com/tmVJtna.jpg', 'http://i.imgur.com/ZfFAkWZ.jpg'],
      currentNumber: 0,
      timer: null
    }
  },

  computed: {
    currentImage() {
      return this.images[Math.abs(this.currentNumber) % this.images.length];
    }
  },

  mounted() {
    this.startRotation();
  },

  methods: {
    startRotation() {
      this.timer = setInterval(this.next,3000);
    },
    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next() {
      this.currentNumber += 1;
    },
    prev() {
      this.currentNumber -= 1;
    },
  }
});

new Vue({
  el: '#app',
});
