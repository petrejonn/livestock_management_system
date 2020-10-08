<template>
  <q-page padding>
    <div class="q-pa-md items-start">
      <q-card class="bg-primary">
        <q-list
          bordered
          padding
          v-for="livestock in livestocks"
          :key="livestock.code"
        >
          <q-item>
            <q-item-section>
              <q-item-label overline>{{livestock.name}}</q-item-label>
              <q-item-label>{{livestock.code}}</q-item-label>
              <q-item-label
                class="text-white"
                caption
              >{{livestock.desc}}</q-item-label>
            </q-item-section>

            <q-item-section
              side
              top
            >
              <q-item-label
                caption
                class="text-info"
              >{{animalsCount(livestock.code)}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('farmAnimals', ['livestocks']),
    ...mapGetters('farmAnimals', ['animalsCount'])
  }
}
</script>
