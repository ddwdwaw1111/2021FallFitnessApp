
<script>
import { Line } from 'vue3-chart-v2'
import Session from '../services/session'
export default {
  components: {
    Session
  },
  data() {
    return {
      labelArray: [],
      caloriesArray:[],
      weightArray:[],
    }
  },
  extends: Line,
  mounted () {
    for(var i = 0 ; i < Session.user.calories.length; i++)
    {
      console.log(Session.user.calories[i].date);
      this.labelArray.push(Session.user.calories[i].date)
      this.caloriesArray.push(Session.user.calories[i].calorieBurned)
      this.weightArray.push(Session.user.calories[i].weight)
    }

    this.renderChart({

      labels: this.labelArray,
      datasets: [
        {
                data: this.caloriesArray,
                label: "Calorie",
                borderColor: "red",
                backgroundColor: "#7bb6dd",
                fill: false
        },
        {
                data: this.weightArray,
                label: "Weight",
                borderColor: "blue",
                backgroundColor: "#7bb6dd",
                fill: false
        }
      ]
    })
  }
}
</script>

