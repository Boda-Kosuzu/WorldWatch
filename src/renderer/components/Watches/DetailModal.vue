<template>
  <div class="detail-modal">
    <ul class="detail-items">
      <watch-detail
         v-for="(detail, index) in watches"
         :key="index"
         :detail="detail"
         :index="index"
      />
    </ul>
    <button
      class="add-button"
      @click="addWatch"
    >
      追加
    </button>
  </div>
</template>

<script>
import watchDetail from './WatchDetail'
import { mapActions } from 'vuex'

export default {
  components: {
    watchDetail
  },
  props: {
    watches: {
      type: Array,
      require: true
    }
  },
  methods: {
    ...mapActions({
      addWatch: 'Watch/addWatch'
    })
  }
}
</script>

<style scoped>
  .detail-modal {
    width: 80vw;
    padding: 20px;
    box-sizing: border-box;
    background: #fafafa;
    border-radius: 10px;
    position: absolute;
    z-index: 2;
    top: 10vh;
    left: 10vw;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
  .add-button {
    -webkit-app-region: no-drag;
  }
  .detail-items {
    list-style: none;
    width: 100%;
    height: 90%;
    padding: 0;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    overflow: auto;
  }
  .detail-items > li + li {
    border-top: 2px solid #ccc;
  }
</style>
