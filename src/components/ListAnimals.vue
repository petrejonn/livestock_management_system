<template>
  <div class="q-pa-md">
    <q-scroll-area
      :thumb-style="thumbStyle"
      :content-style="contentStyle"
      :content-active-style="contentActiveStyle"
      style="height: 300px;"
    >
      <q-markup-table>
        <thead class="bg-primary">
          <tr>
            <th colspan="5">
              <div class="row no-wrap items-center">
                <div class="text-h4 q-ml-md text-accent">{{livestockName(livestockID)}}</div>
                <q-space />
                <q-btn
                  flat
                  icon="add"
                  label="Add"
                  color="accent"
                  @click="addAnimal=true"
                />
              </div>
            </th>
          </tr>
          <tr class="text-accent">
            <th class="text-left">ID</th>
            <th class="text-right">Sex</th>
            <th class="text-right">
              Gestating
            </th>
            <th class="text-right">
              Sick
            </th>
            <th class="text-right">DOB</th>
          </tr>
        </thead>

        <tbody
          class="bg-secondary"
          v-for="animal in getAnimals({livestockID:livestockID, filter:filter})"
          :key="animal.id"
        >
          <tr>
            <td class="text-left">
              <q-btn
                flat
                :label="livestockID + animal.id"
                @click="detailLID=livestockID; animalID=animal.id; detailAnimal=true"
              />
            </td>
            <td class="text-right">{{animal.gender}}</td>
            <td class="text-right">{{animal.gestating}}</td>
            <td class="text-right">{{animal.sick}}</td>
            <td class="text-right">{{animal.dob}}</td>
          </tr>
        </tbody>

      </q-markup-table>
    </q-scroll-area>
    <add-animal v-model="addAnimal" />
    <detail-animal
      v-model="detailAnimal"
      :livestockID="detailLID"
      :animalID="animalID"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['filter'],
  data () {
    return {
      addAnimal: false,
      detailAnimal: false,
      detailLID: null,
      animalID: null
    }
  },
  computed: {
    livestockID () {
      return this.$route.params.id
    },
    ...mapGetters('farmAnimals', [
      'getAnimals',
      'livestockName'
    ]),
    contentStyle () {
      return {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      }
    },

    contentActiveStyle () {
      return {
        backgroundColor: '#eee',
        color: 'black'
      }
    },

    thumbStyle () {
      return {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#197527',
        width: '5px',
        opacity: 0.75
      }
    }
  }
}
</script>
