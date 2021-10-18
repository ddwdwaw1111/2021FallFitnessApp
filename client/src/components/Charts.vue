<script>
import { Line } from 'vue3-chart-v2'

export default {
  name: 'TrackChart',
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
                data: [140, 139, 140, 139, 139.5, 139.8, 138, 137,136,135,134,140],
                label: "Weight",
                borderColor: "#3e95cd",
                backgroundColor: "#7bb6dd",
                fill: false,
        }
      ]
    })
  }
}
</script>
