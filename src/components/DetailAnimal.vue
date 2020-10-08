<template>
  <q-dialog
    v-model="showDialogue"
    transition-show="flip-down"
    transition-hide="flip-up"
  >
    <q-card class="detail-card bg-secondary text-primary">
      <q-card-section
        class="q-pt-xs"
        horizontal
      >
        <q-card-section>
          <div class="text-overline">{{livestockID+animal.id}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Details</div>
        </q-card-section>
      </q-card-section>
      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>Date of Birth</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label
                class="text-accent"
                caption
              >5 Days Ago</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            tag="label"
            v-ripple
          >
            <q-item-section>
              <q-item-label>Death</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle
                color="negative"
                v-model="death"
                class="text-accent"
                :disable="!editMode"
              />
            </q-item-section>
          </q-item>

          <q-item
            tag="label"
            v-ripple
          >
            <q-item-section>
              <q-item-label>Sold</q-item-label>
            </q-item-section>
            <q-item-section
              side
              top
            >
              <q-toggle
                class="text-accent"
                color="positive"
                v-model="sold"
                :disable="!editMode"
              />
            </q-item-section>
          </q-item>

          <q-item
            tag="label"
            v-ripple
          >
            <q-item-section>
              <q-item-label>Gestating</q-item-label>
            </q-item-section>
            <q-item-section
              side
              top
            >
              <q-toggle
                color="info"
                v-model="gestating"
                class="text-accent"
                :disable="!editMode"
              />
            </q-item-section>
          </q-item>
          <q-item
            tag="label"
            v-ripple
          >
            <q-item-section>
              <q-item-label>Sick</q-item-label>
            </q-item-section>
            <q-item-section
              side
              top
            >
              <q-toggle
                color="warning"
                v-model="sick"
                class="text-accent"
                :disable="!editMode"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn
          round
          :color="editColor"
          icon="edit"
          @click="toggleEditMode()"
        />

      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped>
.detail-card
    width: 100%
    max-width: 300px
</style>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  // name: 'ComponentName',
  props: ['value', 'livestockID', 'animalID'],
  data () {
    return {
      editColor: 'positive',
      editMode: false
    }
  },
  computed: {
    ...mapGetters('farmAnimals', [
      'getAnimal'
    ]),
    animal () {
      return this.getAnimal(this.livestockID, this.animalID)
    },
    death: {
      get () {
        return this.animal.death
      },
      set (val) {
        this.updateDeath({ livestockID: this.animal.type, animalID: this.animal.id, val: val })
      }
    },
    sick: {
      get () {
        return this.animal.sick
      },
      set (val) {
        this.updateSick({ livestockID: this.animal.type, animalID: this.animal.id, val: val })
      }
    },
    sold: {
      get () {
        return this.animal.sold
      },
      set (val) {
        this.updateSold({ livestockID: this.animal.type, animalID: this.animal.id, val: val })
      }
    },
    gestating: {
      get () {
        return this.animal.gestating
      },
      set (val) {
        this.updateGestating({ livestockID: this.animal.type, animalID: this.animal.id, val: val })
      }
    },
    showDialogue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    ...mapMutations('farmAnimals', ['updateDeath', 'updateSick', 'updateGestating', 'updateSold']),
    toggleEditMode () {
      if (this.editMode === true) {
        this.editMode = false
        this.editColor = 'positive'
      } else {
        this.editMode = true
        this.editColor = 'grey'
      }
    }
  }
}
</script>
