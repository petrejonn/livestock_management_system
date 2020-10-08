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
          Add Livestock
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
          <q-form @submit="submitLivestock">
            <q-input
              label="Name"
              color="accent"
              v-model="livestockName"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              label="Code"
              color="accent"
              v-model="livestockCode"
              mask="AA"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              type="textarea"
              label="Description"
              color="accent"
              v-model="livestockDesc"
              :rules="[val => !!val || 'Field is required']"
            />
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
import { mapMutations } from 'vuex'

export default {
  props: ['value'],
  data () {
    return {
      livestockName: '',
      livestockCode: '',
      livestockDesc: ''
    }
  },
  computed: {
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
    ...mapMutations('farmAnimals', ['addLivestock']),
    submitLivestock () {
      let formatedName = this.livestockName.charAt(0).toUpperCase() + this.livestockName.slice(1)
      this.addLivestock({ name: formatedName, code: this.livestockCode, desc: this.livestockDesc })
      this.livestockName = null
      this.livestockCode = null
      this.livestockDesc = null
      this.showDialogue = false
    }
  }
}
</script>
