<template>
  <div
    class="ClickableRoot"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <slot/>
  </div>
</template>

<script>
import electron from 'electron'

export default ({
  data () {
    return {
      win: electron.remote.getCurrentWindow()
    }
  },
  methods: {
    onEnter (ev) {
      console.log('1')
      this.win.setIgnoreMouseEvents(false)
    },
    onLeave (ev) {
      console.log('2')
      this.win.setIgnoreMouseEvents(true, { forward: true })
    }
  }
})
</script>