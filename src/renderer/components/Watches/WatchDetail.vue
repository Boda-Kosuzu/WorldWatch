<template>
  <li class="watch-detail">
    <table class="detail-table">
      <tr>
        <th>
          タイムゾーン
        </th>
        <td>
          <select
            v-model="standardTime"
            class="standard-time-select"
          >
            <option
              v-for="(value, key, index) in timeZone"
              :key="index"
              :value="key"
            >
              {{ value }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <th>
          文字色
        </th>
        <td>
          #
          <input
            type="text"
            v-model="color"
            class="color-code-input"
          >
        </td>
      </tr>
      <tr>
        <th>
          フォント
        </th>
        <td>
          <select
            v-model="font"
            class="font-select"
          >
            <option
              v-for="(family, index) in fonts"
              :key="index"
              :value="family"
            >
              {{family}}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <th>
          枠線
        </th>
        <td class="outline-detail">
          <input
            id="outline"
            type="checkbox"
            v-model="isOutline"
            class="outline-input"
          >
          <label
            for="outline"
            class="outline-label"
          >
            有効
          </label>
          <div v-show="isOutline">
            #
            <input
              type="text"
              v-model="outlineColor"
              class="outline-color"
            >
          </div>
        </td>
      </tr>
      <tr>
        <th>
          影
        </th>
        <td class="shadow-detail">
          <input
            id="shadow"
            type="checkbox"
            v-model="isShadow"
            class="shadow-input"
          >
          <label
            for="shadow"
            class="shadow-label"
          >
            有効
          </label>
          <div v-show="isShadow">
            #
            <input
              type="text"
              v-model="shadowColor"
              class="shadow-color"
            >
          </div>
        </td>
      </tr>
    </table>
    <button
      @click="deleteWatch(index)"
      class="delete-button"
    >
      削除
    </button>
  </li>
</template>

<script>
import timeZone from './TimeZone.json'
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    detail: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      timeZone
    }
  },
  computed: {
    ...mapState('Fonts', ['fonts']),
    standardTime: {
      get () {
        return this.detail.timeZone
      },
      set (e) {
        const data = {
          name: this.timeZone[e],
          timeZone: e,
          index: this.index
        }
        this.updateStandardTime(data)
      }
    },
    color: {
      get () {
        return this.detail.color
      },
      set (e) {
        this.updateColor({color: e, index: this.index})
      }
    },
    font: {
      get () {
        return this.detail.font ? this.detail.font : ''
      },
      set (e) {
        this.updateFont({font: e, index: this.index})
      }
    },
    isOutline: {
      get () {
        return this.detail.isOutline
      },
      set () {
        this.toggleOutline(this.index)
      }
    },
    isShadow: {
      get () {
        return this.detail.isShadow
      },
      set () {
        this.toggleShadow(this.index)
      }
    },
    outlineColor: {
      get () {
        return this.detail.outlineColor
      },
      set (e) {
        this.updateOutlineColor({ color: e, index: this.index })
      }
    },
    shadowColor: {
      get () {
        return this.detail.shadowColor
      },
      set (e) {
        console.log(e)
        this.updateShadowColor({ color: e, index: this.index })
      }
    }
  },
  methods: {
    ...mapActions({
      updateStandardTime: 'Watch/updateStandardTime',
      updateColor: 'Watch/updateColor',
      updateFont: 'Watch/updateFont',
      toggleOutline: 'Watch/toggleOutline',
      updateOutlineColor: 'Watch/updateOutlineColor',
      toggleShadow: 'Watch/toggleShadow',
      updateShadowColor: 'Watch/updateShadowColor',
      deleteWatch: 'Watch/delete'
    })
  }
}
</script>

<style scoped>
  .watch-detail {
    margin: 20px;
  }
  .standard-time-select,
  .color-code-input,
  .font-select,
  .delete-button,
  .outline-input,
  .outline-label,
  .outline-color,
  .shadow-input,
  .shadow-label,
  .shadow-color {
    -webkit-app-region: no-drag;
  }
  .detail-table th,
  .detail-table td * {
    font-family: 'Yu Gothic', 'YuGothic';
  }
  .outline-detail,
  .shadow-detail {
    display: flex;
  }
  .outline-detail > div,
  .shadow-detail > div {
    margin-left: 15px;
  }
</style>
