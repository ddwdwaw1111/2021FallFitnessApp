
  <template>
  <div class="column is-full">
    <div class="box has-text-centered">
      <form @submit.prevent="addLog()">
        <div class="field">
          <label class="label">Date(MM/DD/YYYY)</label>
          <div class="control">
            <input class="input" id="exerciseTime" v-model="newCalories.date" />
          </div>
        </div>
        <div class="field">
          <label class="label">Exercise Time(mins)</label>
          <div class="control">
            <input
              class="input"
              id="exerciseTime"
              v-model="newCalories.exerciseTime"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Exercise Type</label>
          <div class="control">
            <div class="select">
              <select v-model="newCalories.exerciseType">
                <option value="Running">Running</option>
                <option value="Walking">Walking</option>
                <option value="Swimming">Swimming</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Calorie Burned</label>
          <div class="control">
            <input
              class="input"
              id="exerciseType"
              v-model="newCalories.calorieBurned"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Weight(lbs)</label>
          <div class="control">
            <input
              class="input"
              id="exerciseType"
              v-model="newCalories.weight"
            />
          </div>
        </div>
        <button class="button is-black" type="submit">Add New Log</button>
      </form>
    </div>
    <div class="card has-text-centered">
        <table class="table is-fullwidth" style="height:200px; overflow: scroll; ">
          <thead>
            <tr>
              <th>Date</th>
              <th>Exercise time</th>
              <th>Exercise type</th>
              <th>Calorie burned</th>
              <th>Weight(lb)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(calorie,i) in calories" :key="calorie.id">
              <th>{{ calorie.date }}</th>
              <td>{{ calorie.exerciseTime }}</td>
              <td>{{ calorie.exerciseType }}</td>
              <td>{{ calorie.calorieBurned }}</td>
              <td>{{ calorie.weight }}</td>
              <td>
                <button class="button is-small is-black" @click="removeLog(calorie, i)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>


<script>
import Session from "../services/session";
import { UpdateTracker } from "../services/users";
export default {
  data() {
    return {
      Session,
      calories: [],
      newCalories: {
        date: "",
        exerciseTime: "",
        exerciseType: "",
        calorieBurned: "",
        weight: "",
      },
    };
  },
  mounted() {
    this.calories = Session.user.calories;
  },
  methods: {
    async addLog() {
      this.calories.push(this.newCalories);
      console.log(this.calories);
      const response = await UpdateTracker(Session.user._id, this.newCalories);
      console.log(response);
    },
    removeLog(calorie, i) {
    console.log(calorie)
    this.calories.splice(i, 1);
    console.log( this.calories );
    },
  }
};
</script>

<style>
</style>