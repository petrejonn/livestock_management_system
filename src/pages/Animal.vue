<template>
  <!-- 6A645A E3C28D 5D7052 C18845 -->
  <q-page>
    <div class="q-pa-md items-start">
      <q-card class="my-card bg-secondary">
        <q-card-section>
          <div class="text-h2 text-center">Report</div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col-2">
              <q-btn
                outline
                text-color="primary"
                label="All Animals"
                size="md"
                @click="filter='all'"
              >
                <q-badge
                  color="primary"
                  floating
                >{{animalsCount(livestockID)}}</q-badge>
              </q-btn>
            </div>
            <div class="col-2">
              <q-btn
                outline
                text-color="primary"
                label="Sick Animals"
                size="md"
                @click="filter='sick'"
              >
                <q-badge
                  color="primary"
                  floating
                >{{sickCount(livestockID)}}</q-badge>
              </q-btn>
            </div>
            <div class="col-2">
              <q-btn
                outline
                text-color="primary"
                label="Gestating"
                size="md"
                @click="filter='gestating'"
              >
                <q-badge
                  color="primary"
                  floating
                >{{gestationCount(livestockID)}}</q-badge>
              </q-btn>
            </div>
            <div class="col-2">
              <q-btn
                outline
                text-color="primary"
                label="Sold Animals"
                size="md"
                @click="filter='sold'"
              >
                <q-badge
                  color="primary"
                  floating
                >{{soldCount(livestockID)}}</q-badge>
              </q-btn>
            </div>
            <div class="col-3">
              <q-btn
                outline
                text-color="primary"
                label="Death Animals"
                size="md"
                @click="filter='death'"
              >
                <q-badge
                  color="primary"
                  floating
                >{{deathCount(livestockID)}}</q-badge>
              </q-btn>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <list-animals :filter="filter" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass">

</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageAnimal',
  data () {
    return {
      filter: 'all'
    }
  },
  computed: {
    ...mapGetters('farmAnimals', ['animalsCount', 'sickCount', 'deathCount', 'gestationCount', 'soldCount']),
    livestockID () {
      return this.$route.params.id
    }
  }

}
</script>
