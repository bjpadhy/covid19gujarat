<script>
import { Line } from "vue-chartjs";
//rgba(0, 123, 255, 0.1)
export default {
  extends: Line,
  name: "LineChart",
  props: ["data", "options"],
  mounted() {
    //Active
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, "rgba(0, 123, 255, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(0, 123, 255, 0.25)");
    this.gradient.addColorStop(1, "rgba(0, 123, 255, 0)");
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
          label: "Active",
          borderColor: "",
          backgroundColor: null,
          borderWidth: 2,
          pointHoverRadius: 2,
          borderCapStyle: "round",
          pointBackgroundColor: "",
          data: []
        }
      ]
    };

    for (let i = 0; i < this.data.length - 1; i++) {
      chartData.labels.push(this.data[i].date);
      chartData.datasets[0].data.push(this.data[i].value);
    }
    chartData.datasets[0].label = this.data[this.data.length - 1].label;
    chartData.datasets[0].borderColor = this.data[
      this.data.length - 1
    ].borderColor;
    chartData.datasets[0].pointBackgroundColor = this.data[
      this.data.length - 1
    ].borderColor;

    if (chartData.datasets[0].label === "Active") {
      chartData.datasets[0].backgroundColor = this.gradient;
    } else if (chartData.datasets[0].label === "Recovered") {
      chartData.datasets[0].backgroundColor = this.gradient1;
    } else if (chartData.datasets[0].label === "Deceased") {
      chartData.datasets[0].backgroundColor = this.gradient2;
    }
    //Render Chart
    this.renderChart(chartData, this.options);
  }
};
</script>
