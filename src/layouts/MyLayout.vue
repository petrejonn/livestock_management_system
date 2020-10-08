<template>
  <q-layout view="hHh LpR lff">

    <app-menu />

    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      behavior="desktop"
      elevated
      content-class="bg-primary text-accent"
    >
      <div
        class="q-pa-md"
        style="max-width: 250px"
      >
        <q-list
          class="text-accent"
          v-for="livestock in livestocks"
          :key="livestock.code"
        >
          <q-item
            clickable
            v-ripple
            active-class="my-menu-link"
            :to="livestock.code"
          >
            <q-item-section>{{livestock.name}}</q-item-section>
          </q-item>

        </q-list>
      </div>
    </q-drawer>

    <q-page-container class="bg-secondary text-accent">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      left: false,
      selected: null
    }
  },
  computed: {
    ...mapState('farmAnimals', ['livestocks'])
  },
  methods: {
    navigateClickHandler (node) {
      console.log(node)
    }
  }
}
</script>
