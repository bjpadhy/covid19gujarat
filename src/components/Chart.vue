<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  name: "LineChart",
  props: ["data", "options"],
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");
    //Recovered
    this.gradient1 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient1.addColorStop(0, "rgba(40, 167,69, 0.5)");
    this.gradient1.addColorStop(0.5, "rgba(40, 167, 69, 0.25)");
    this.gradient1.addColorStop(1, "rgba(40, 167, 69, 0)");
    //Deceased
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2.addColorStop(0, "rgba(108, 117, 125, 0.5)");
    this.gradient2.addColorStop(0.5, "rgba(108, 117, 125, 0.25)");
    this.gradient2.addColorStop(1, "rgba(108, 117, 125, 0)");
    let chartData = {
      labels: [],
      datasets: [
        {
          label: "Confirmed",
          borderColor: "#ff073a",
          backgroundColor: this.gradient,
          borderWidth: 2,
          pointHoverRadius: 2,
          borderCapStyle: "round",
          pointBackgroundColor: "#ff073a",
          data: []
        },
        {
          label: "Recovered",
          borderColor: "#28a745",
          backgroundColor: this.gradient1,
          borderWidth: 2,
          pointHoverRadius: 2,
          borderCapStyle: "round",
          pointBackgroundColor: "#28a745",
          data: []
        },
        {
          label: "Deceased",
          borderColor: "#6c757d",
          backgroundColor: this.gradient2,
          borderWidth: 2,
          pointHoverRadius: 2,
          borderCapStyle: "round",
          pointBackgroundColor: "#6c757d",
          data: []
        }
      ]
    };
    for (let i = 0; i < this.data.length; i++) {
      chartData.labels.push(this.data[i].date);
      chartData.datasets[0].data.push(this.data[i].confirmed);
      chartData.datasets[1].data.push(this.data[i].recovered);
      chartData.datasets[2].data.push(this.data[i].deceased);
    }
    this.renderChart(chartData, this.options);
  }
};
</script>
