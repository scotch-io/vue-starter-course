const GifGrid = {
  props: ['gifs'],
  components: {
    'gif-box': GifBox
  },
  template: `
    <div class="columns is-multiline" v-if="gifs">
      <div class="column is-one-third" v-for="gif in gifs">

        <gif-box :gif="gif"></gif-box>

      </div>
    </div>
  `
};