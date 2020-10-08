<template>
  <q-dialog
    v-model="showDialogue"
    persistent
    transition-show="flip-down"
    transition-hide="flip-up"
  >
    <q-card
      class="bg-secondary text-white add-anim-card"
      style="min-width:400px;"
    >
      <q-bar>
        <div class="col text-center text-weight-bold">
          Add Animal
        </div>

        <q-space />

        <q-btn
          dense
          flat
          icon="close"
          v-close-popup
        >
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="q-gutter-md">
          <q-form @submit="submitAnimal">
            <q-select
              color="accent"
              v-model="gender"
              :options="genderOptions"
              label="Gender"
            />
            <q-input
              label="Date of Birth"
              color="accent"
              v-model="date"
              mask="date"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon
                  name="event"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="date"
                      @input="() => $refs.qDateProxy.hide()"
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <div>
              <q-btn
                label="Submit"
                type="submit"
                color="primary"
              />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'AddAnimal',
  props: ['value'],
  data () {
    return {
      gender: 'Male',
      genderOptions: [
        'Male', 'Female'
      ],
      date: '2020/2/03'

    }
  },
  computed: {
    ...mapGetters('farmAnimals', ['nextAnimalID']),
    showDialogue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    livestockId () {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapMutations('farmAnimals', ['addNewAnimal']),
    submitAnimal () {
      let data = {
        type: this.livestockId,
        id: this.nextAnimalID(this.livestockId),
        gender: this.gender,
        gestating: false,
        sick: false,
        death: true,
        sold: false,
        dob: this.date
      }
      this.addNewAnimal(data)
      this.gender = 'Male'
      this.date = '2020/2/03'
      this.showDialogue = false
    }
  }
}
</script>
