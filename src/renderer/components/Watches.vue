<template>
  <div class="watches">
    <div
      v-show="isShowModal"
      class="wathces-detail"
    >
      <detail-modal :watches="watches" />
    </div>
    <div class="watches-main">
      <world-watch
        v-for="(data, index) in watches"
        :key="index"
        :data="data"
        :timer="timer"
      />
    </div>
  </div>
</template>

<script>
import worldWatch from './Watches/Watch'
import detailModal from './Watches/DetailModal'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    worldWatch,
    detailModal
  },
  data () {
    return {
      isShowModal: false,
      timer: false
    }
  },
  created () {
    this.$store.dispatch('Fonts/load')

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.isShowModal = !this.isShowModal
      }
    })

    setInterval(() => {
      this.timer = !this.timer
    }, 1000)
  },
  computed: {
    ...mapState('Watch', ['watches'])
  },
  methods: {
    ...mapActions({
      load: 'Fonts/load'
    })
  }
}
</script>

<style>
 body {
   overflow-x: hidden;
 }
</style>

<style scoped>
  .wathces-detail {
    position: relative;
  }
  .wathces-detail::before {
    content: '';
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, .5);
  }
  .watches-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 950px;
    padding: 20px 0;
    box-sizing: border-box;
  }
</style>