<template>
  <div class="watch" >
    <div
      class="watch_up"
      :style="watchUpStyle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="watch_up-svg"
      >
        <text
          x="70%"
          y="0"
          text-anchor="end"
          dominant-baseline="text-before-edge"
          class="city-text-svg"
          :style="displayStyle"
        >
          {{ data.name }}
        </text>
        <text
          x="100%"
          y="0"
          text-anchor="end"
          dominant-baseline="text-before-edge"
          class="date-text-svg"
          :style="displayStyle"
        >
          {{ date }}
        </text>
      </svg>
    </div>
    <div
      class="watch_under"
      :style="watchUnderStyle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="time-svg"
      >
        <text
          x="100%"
          y="0"
          text-anchor="end"
          dominant-baseline="text-before-edge"
          class="time-text-svg"
          :style="displayStyle"
        >
          {{ time }}
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          name: '日本',
          timeZone: 'Asia/Tokyo',
          font: '',
          color: ''
        }
      }
    },
    timer: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      dateTime: moment(),
      timeCount: null
    }
  },
  beforeDestroy () {
    clearInterval(this.timeCount)
  },
  computed: {
    date () {
      return this.dateTime.format('YYYY/MM/DD')
    },
    time () {
      return this.dateTime.format('HH:mm:ss')
    },
    displayStyle () {
      return {
        'fill': `#${this.data.color}`,
        'font-family': `'${this.data.font}'`,
        'stroke': this.data.isOutline ? `#${this.data.outlineColor}` : 'none'
      }
    },
    watchUpStyle () {
      return {
        filter: this.data.isShadow ? `drop-shadow(1px 1px 3px #${this.data.shadowColor})` : 'none'
      }
    },
    watchUnderStyle () {
      return {
        'filter': this.data.isShadow ? `drop-shadow(3px 3px 5px #${this.data.shadowColor})` : 'none'
      }
    }
  },
  watch: {
    timer () {
      this.dateTime = moment().tz(this.data.timeZone)
    }
  },
  created () {
    this.dateTime = moment().tz(this.data.timeZone)
  }
}
</script>

<style scoped>
p {
  margin: 0;
}
.watch {
  user-select: none;
}
.watch_up {
  font-size: 32px;
}
.date {
  margin-left: 20px;
}
.watch_under {
  font-size: 150px;
}
.watch_up-svg {
  width: 100%;
  height: 50px;
}
.time-svg {
  width: 100%;
  height: 170px;
}
.city-text-svg,
.date-text-svg {
  stroke-width: 2px
}
.time-text-svg {
  stroke-width: 3px
}
</style>
