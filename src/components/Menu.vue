<template>

  <q-header elevated>
    <q-bar class="q-electron-drag">
      <q-icon name="emoji_nature" />
      <div>XFarm</div>

      <q-space />

      <q-btn
        dense
        flat
        icon="minimize"
        @click="minimize"
      />
      <q-btn
        dense
        flat
        icon="crop_square"
        @click="maximize"
      />
      <q-btn
        dense
        flat
        icon="close"
        @click="closeApp"
      />
    </q-bar>

    <div class="q-pa-sm q-pl-md row items-center">
      <div class="cursor-pointer non-selectable">
        Livestocks
        <q-menu>
          <q-list
            dense
            style="min-width: 100px"
          >
            <q-item
              clickable
              v-close-popup
              to="livestocks"
            >
              <q-item-section>List</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
            >
              <q-item-section @click="addLivestock=true">New Livestock</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="deleteAllLivestocks"
            >
              <q-item-section>Delete all Livestock</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="deleteAllAnimals"
            >
              <q-item-section>Delete all Animals</q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </div>

      <!-- <div class="q-ml-md cursor-pointer non-selectable">
        Help
        <q-menu auto-close>
          <q-list
            dense
            style="min-width: 100px"
          >
            <q-item clickable>
              <q-item-section>Add Livestock</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Edit Animal Detail</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Add Animal</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Contact Developer</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div> -->
    </div>
    <add-livestock v-model="addLivestock" />
  </q-header>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Menu',
  data () {
    return {
      addLivestock: false
    }
  },
  methods: {
    ...mapMutations('farmAnimals', ['deleteAllAnimals', 'deleteAllLivestocks']),
    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },

    maximize () {
      if (process.env.MODE === 'electron') {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow()

        if (win.isMaximized()) {
          win.unmaximize()
        } else {
          win.maximize()
        }
      }
    },

    closeApp () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    }
  }
}
</script>
