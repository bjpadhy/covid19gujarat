<template>
  <v-container>
    <div id="app">
      <!--Stats-->
      <div class="Home" style="margin-top:-65px;">
        <!--India Stats-->
        <div class="home-left" id="content-left">
          <div class="MapExplorer">
            <div class="header">
              <h1>INDIA</h1>
              <h6>Last Updated:{{ statsData.india.date }}</h6>
            </div>
            <div class="map-stats">
              <div class="stats">
                <h5>Confirmed</h5>
                <div class="stats-bottom">
                  <h1>{{ numberWithCommas(statsData.india.confirmed) }}</h1>
                  <h6>
                    +{{ numberWithCommas(statsData.india.delta.confirmed) }}
                  </h6>
                </div>
              </div>
              <div class="stats is-blue">
                <h5>Active</h5>
                <div class="stats-bottom">
                  <h1>{{ numberWithCommas(statsData.india.active) }}</h1>
                  <h6 style="opacity:0;">+</h6>
                </div>
              </div>
              <div class="stats is-green">
                <h5>Recovered</h5>
                <div class="stats-bottom">
                  <h1>{{ numberWithCommas(statsData.india.recovered) }}</h1>
                  <h6>
                    +{{ numberWithCommas(statsData.india.delta.recovered) }}
                  </h6>
                </div>
              </div>
              <div class="stats is-gray">
                <h5>Deceased</h5>
                <div class="stats-bottom">
                  <h1>{{ numberWithCommas(statsData.india.deceased) }}</h1>
                  <h6>
                    +{{ numberWithCommas(statsData.india.delta.deceased) }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="TimeSeriesExplorer">
            <div class="timeseries-header">
              <h1>Trends</h1>
            </div>
            <line-chart
              style="position: relative;"
              v-if="loaded"
              :data="chartData"
              :options="options"
            ></line-chart>
          </div>
        </div>
        <!--Gujarat Stats-->
        <div class="home-right" id="content-right">
          <div class="MapExplorer">
            <div class="header">
              <h1>Gujarat</h1>
              <h6>Last Updated:{{ statsData.gujarat.date }}</h6>
            </div>
            <div class="map-stats">
              <div class="stats">
                <h5>Confirmed</h5>
                <div class="stats-bottom">
                  <h1>{{ numberWithCommas(statsData.gujarat.confirmed) }}</h1>
                  <h6>
                    +{{ numberWithCommas(statsData.gujarat.delta.confirmed) }}
                  </h6>
                </div>
              </div>
              <div class="stats is-blue">
                <h5>Active</h5>
                <div class="stats-bottom">
                  <h1>{{ numberWithCommas(statsData.gujarat.active) }}</h1>
                  <h6 style="opacity:0;">+</h6>
                </div>
              </div>
              <div class="stats is-green">
                <h5>Recovered</h5>
                <div class="stats-bottom">
                  <h1>{{ numberWithCommas(statsData.gujarat.recovered) }}</h1>
                  <h6>
                    +{{ numberWithCommas(statsData.gujarat.delta.recovered) }}
                  </h6>
                </div>
              </div>
              <div class="stats is-gray">
                <h5>Deceased</h5>
                <div class="stats-bottom">
                  <h1>{{ numberWithCommas(statsData.gujarat.deceased) }}</h1>
                  <h6>
                    +{{ numberWithCommas(statsData.gujarat.delta.deceased) }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="TimeSeriesExplorer" style="padding-top:25px;">
            <v-card>
              <v-card-title>
                District Wise
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                class="table"
                :headers="districtHeader"
                :items="districtData"
                :search="search"
              ></v-data-table>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import LineChart from "./Chart";

var dates = [];
var confirmed = [];
var recovered = [];
var deceased = [];
export default {
  name: "maincontent",

  components: {
    LineChart,
  },

  mounted() {
    this.loaded = false;
    axios
      .all([
        axios.get("https://api.covid19india.org/data.json"),
        axios.get("https://api.covid19india.org/states_daily.json"),
        axios.get("https://api.covid19india.org/v2/state_district_wise.json"),
      ])
      .then(
        axios.spread((total_data, states_daily, district_total) => {
          //Stats
          //Latest Total Data
          const gujaratTotal = total_data.data.statewise.find(
            ({ statecode }) => statecode === "GJ"
          );
          const indiaTotal = total_data.data.statewise.find(
            ({ statecode }) => statecode === "TT"
          );

          //India Data
          this.statsData.india.date = indiaTotal.lastupdatedtime;
          this.statsData.india.delta.confirmed = indiaTotal.deltaconfirmed;
          this.statsData.india.delta.deceased = indiaTotal.deltadeaths;
          this.statsData.india.delta.recovered = indiaTotal.deltarecovered;
          this.statsData.india.active = indiaTotal.active;
          this.statsData.india.confirmed = indiaTotal.confirmed;
          this.statsData.india.deceased = indiaTotal.deaths;
          this.statsData.india.recovered = indiaTotal.recovered;

          //Gujarat Data
          this.statsData.gujarat.date = gujaratTotal.lastupdatedtime;
          this.statsData.gujarat.delta.confirmed = gujaratTotal.deltaconfirmed;
          this.statsData.gujarat.delta.deceased = gujaratTotal.deltadeaths;
          this.statsData.gujarat.delta.recovered = gujaratTotal.deltarecovered;
          this.statsData.gujarat.active = gujaratTotal.active;
          this.statsData.gujarat.confirmed = gujaratTotal.confirmed;
          this.statsData.gujarat.deceased = gujaratTotal.deaths;
          this.statsData.gujarat.recovered = gujaratTotal.recovered;

          //Chart
          //Fetching Dates
          dates = states_daily.data.states_daily
            .map((a) => a.date)
            .filter((value, index, self) => self.indexOf(value) === index);

          //Confirmed Data Split
          var confirmedCount = 0;
          for (let i = 0; i < states_daily.data.states_daily.length; i += 3) {
            confirmedCount += +states_daily.data.states_daily[i].gj;
            confirmed.push(confirmedCount);
          }
          //Recovered Data Split
          var recoveredCount = 0;
          for (let i = 1; i < states_daily.data.states_daily.length; i += 3) {
            recoveredCount += +states_daily.data.states_daily[i].gj;
            recovered.push(recoveredCount);
          }
          //Deceased Data Split
          var deceasedCount = 0;
          for (let i = 2; i < states_daily.data.states_daily.length; i += 3) {
            deceasedCount += +states_daily.data.states_daily[i].gj;
            deceased.push(deceasedCount);
          }
          for (let i = 0; i < dates.length; i++) {
            let tempObj = {};
            tempObj["date"] = dates[i];
            tempObj["confirmed"] = confirmed[i];
            tempObj["recovered"] = recovered[i];
            tempObj["deceased"] = deceased[i];
            this.chartData.push(tempObj);
          }
          this.loaded = true;

          //Table
          this.districtData = district_total.data.find(
            ({ statecode }) => statecode === "GJ"
          ).districtData;

          //Log statements
          //console.log(this.statsData.india.active);
          console.log(this.districtData);
        })
      );
  },

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },

  data: () => ({
    loaded: false,
    chartData: [],
    options: {
      responsive: true,
      events: [
        "click",
        "mousemove",
        "mouseout",
        "touchstart",
        "touchmove",
        "touchend",
      ],
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: "bottom",
      },
      tooltips: {
        intersect: false,
        mode: "index",
        position: "average",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        displayColors: false,
        borderColor: "#c62828",
        borderWidth: 1,
        titleFontColor: "#000",
        bodyFontColor: "#000",
        caretPadding: 4,
      },
      elements: {
        point: {
          radius: 0,
        },
        line: {
          tension: 0.1,
          fill: true,
        },
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 20,
        },
      },
      scales: {
        yAxes: [
          {
            type: "linear",
            ticks: {
              beginAtZero: true,
              max: undefined,
              precision: 0,
            },
            scaleLabel: {
              display: false,
              labelString: "Total Cases",
            },
          },
        ],
        xAxes: [
          {
            type: "time",
            time: {
              unit: "day",
              tooltipFormat: "MMM DD",
              stepSize: 7,
              displayFormats: {
                millisecond: "MMM DD",
                second: "MMM DD",
                minute: "MMM DD",
                hour: "MMM DD",
                day: "MMM DD",
                week: "MMM DD",
                month: "MMM DD",
                quarter: "MMM DD",
                year: "MMM DD",
              },
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
    statsData: {
      india: {
        date: null,
        delta: { confirmed: 0, recovered: 0, deceased: 0 },
        confirmed: 0,
        active: 0,
        deceased: 0,
        recovered: 0,
      },
      gujarat: {
        date: null,
        delta: { confirmed: 0, recovered: 0, deceased: 0 },
        confirmed: 0,
        active: 0,
        deceased: 0,
        recovered: 0,
      },
    },
    search: "",
    districtData: [],
    districtHeader: [
      {
        text: "District",
        align: "start",
        sortable: false,
        value: "district",
      },
      {
        text: "Confirmed",
        value: "confirmed",
      },
      {
        text: "Active",
        value: "active",
      },
      {
        text: "Recovered",
        value: "recovered",
      },
      {
        text: "Deceased",
        value: "deceased",
      },
    ],
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600&display=swap");

/* Color Pallete */
$blue: #007bff;
$blue-light: #007bff10;
$blue-hover: #007bff30;
$blue-light-opaque: #eff7ff;
$blue-mid: #007bff99;
$pblue: #4c75f2;
$pblue-light: #4c75f210;
$pblue-hover: #4c75f230;
$pblue-light-opaque: #eff7ff;
$pblue-mid: #4c75f299;
$indigo: #6610f2;
$purple: #6f42c1;
$pink: #e83e8c;
$cherry: #ff073a;
$cherry-mid: #ff073a99;
$cherry-light: #ff073a20;
$cherry-hover: #ff073a30;
$cherry-light-opaque: #ffe0e6;
$red: #dc3545 !important;
$red-light: #dc354520;
$red-mid: #dc354599;
$orange: #fd7e14;
$orange-mid: #fd7e1499;
$orange-light: #fd7e1420;
$orange-hover: #fd7e1430;
$orange-light-opaque: #ffefe2;
$yellow: #ffc107;
$yellow-light: #ffc10720;
$yellow-hover: #ffc10730;
$yellow-mid: #ffc10799;
$yellow-light-opaque: #fff7e0;
$green: #28a745;
$green-light: #28a74520;
$green-hover: #28a74530;
$green-mid: #28a74599;
$teal: #20c997;
$cyan: #17a2b8;
$white: #fff;
$gray: #6c757d;
$gray-light: #6c757d10;
$gray-light-opaque: #f6f6f7;
$gray-hover: #6c757d20;
$gray-mid: #6c757d99;
$gray-dark: #343a40;
$gray-opaque: #f1f1f1;
$primary: #007bff;
$secondary: #6c757d;
$success: #28a745;
$info: #17a2b8;
$warning: #ffc107;
$danger: #dc3545;
$light: #f8f9fa;
$dark: #343a40;
$purple: #201aa2dd;
$purple-light: #201aa220;
$purple-hover: #201aa230;
$purple-mid: #201aa299;
$purple-light-opaque: #e3e2f3;
$pink: #fb5581;
$pink-light: #ffa8cb10;
$pink-hover: #ffa8cb30;
$pink-mid: #ffa8cb99;
$brick: #e23028;

body {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-family: "Maven Pro", sans-serif;
  font-size: 24px !important;
  font-weight: 900;
}

h2 {
  font-family: "Maven Pro", sans-serif;
  font-size: 18px !important;
  font-weight: 400;
}

h3 {
  font-family: "Maven Pro", sans-serif;
  font-size: 14px !important;
  font-weight: 400;
}

h4 {
  font-family: "Maven Pro", sans-serif;
  font-size: 13px !important;
  font-weight: 900;
}

h5 {
  font-family: "Maven Pro", sans-serif;
  font-size: 12px !important;
  font-weight: 900;
}

h6 {
  font-family: "Maven Pro", sans-serif;
  font-size: 11px !important;
  font-weight: 600;
}

.MapExplorer {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 30rem;

  .header {
    display: flex;
    flex-direction: column;
    color: $gray;
    align-self: flex-start;
    h1,
    h6 {
      margin: 0;
    }

    h6 {
      margin-bottom: 2rem;
      margin-top: 0.75rem;
    }
  }

  .svg-parent {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: auto;
    margin-top: 4rem;
    overflow: hidden;

    svg {
      width: 100%;
      align-self: center;

      text {
        text-align: right;
        font-family: "archia";
        font-weight: 600;
        fill: $gray;
        font-size: 10px;
      }
    }
  }

  .legend {
    margin-top: 1em;
    width: 100%;
  }

  .back-button {
    position: absolute;
    top: 2.75rem;
    right: 0;
    background: $yellow-light;
    color: $orange;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: $yellow-hover;
    }
  }

  .state-page-button {
    position: absolute;
    top: -0.5rem;
    right: 0;
    border-radius: 5px;
    background: $yellow-light;
    color: $orange;
    transition: all 0.2s ease-in-out;
    padding: 0.45rem;
    padding-left: 0.75rem;
    font-size: 0.75rem;
    height: 1.5rem;
    &:hover {
      background: $yellow-hover;
    }

    abbr {
      text-transform: none;
    }

    svg {
      width: 12px;
      height: 12px;
      stroke-width: 3px;
      margin-left: 0.25rem;
      stroke: $orange-mid;
      vertical-align: middle;
    }
  }

  .meta {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 1rem;

    .district-last-update {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    h2 {
      margin: 0;
      color: #e23028;
      word-wrap: break-word;
      font-weight: 900;
    }

    h4 {
      margin: 0;
      color: $gray-mid;
      word-wrap: break-word;
    }

    .district-confirmed {
      color: #e23028;
      position: absolute;
      top: 3rem;
      width: 5rem;
      margin: 0;
      line-height: 15px;
    }

    .unknown {
      position: absolute;
      top: 5.5rem;
      right: 0;
      text-align: right;
      width: 5rem;
      font-weight: 600;
      font-weight: 0.75rem;
    }
  }

  .map-stats {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    margin-bottom: 1rem;

    h1,
    h5,
    h6,
    h3 {
      margin: 0;
    }

    h3 {
      color: $gray-mid;
      font-weight: 900;
    }

    .stats {
      background: $cherry-light;
      position: relative;
      color: $cherry-mid;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      margin-bottom: 0.5rem;
      flex: 1;
      padding: 0.25rem;

      .stats-bottom {
        display: flex;
        flex-direction: column;

        h6 {
          margin-top: auto;
          margin-bottom: 0.25rem;
          font-weight: 900;
        }
      }

      h1 {
        font-weight: 600;
        font-size: 1em !important;
        color: $cherry;
      }

      &.is-green {
        background: $green-light;
        h5,
        h6 {
          color: $green-mid;
        }

        h1 {
          color: $green;
        }
      }

      &.is-blue {
        background: $blue-light;
        h5,
        h6 {
          color: $blue-mid;
        }

        h1 {
          color: $blue;
        }
      }

      &.is-gray {
        background: $gray-light;
        h5,
        h6 {
          color: $gray-mid;
        }

        h1 {
          color: $gray;
        }
      }

      &.is-yellow {
        background: $warning;
        h5,
        h6 {
          color: $white;
        }

        h1 {
          color: $white;
        }
      }

      &.is-purple {
        background: $purple-light;
        padding-right: 1rem;
        h5,
        h6 {
          color: $purple-mid;
          &.timestamp {
            margin: 0;
            font-weight: 900;
          }
        }

        h1 {
          color: $purple;
        }

        svg {
          position: absolute;
          right: 0.35rem;
          top: 0;
          stroke-width: 3;
          width: 12px;
          stroke: $purple-mid;
          cursor: pointer;
          transition: stroke 0.2s ease-in-out;
          &:hover {
            stroke: $purple;
          }
        }
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.TimeSeriesExplorer {
  align-self: center;
  width: 30rem;

  &.stickied {
    position: sticky !important;
    top: -6.5rem;
  }
}

.TimeSeries,
.Minigraph {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;

  .stats {
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    left: 0.5rem;
    padding: 0.25rem;
    position: absolute;
    top: 0.5rem;
    width: 5rem;
    z-index: -1;

    h2,
    h5,
    h6 {
      color: $cherry-mid;
      margin: 0;
      transition: all 0.15s ease-in-out;
    }

    h5 {
      &.title {
        color: $cherry;
      }
    }

    h2,
    h6 {
      color: $cherry;
    }

    .stats-bottom {
      display: flex;
      flex-direction: row;

      h6 {
        margin-bottom: 0.1rem;
        margin-left: 0.25rem;
      }

      & > * {
        margin-top: auto;
      }
    }

    &.is-green {
      h5 {
        color: $green-mid;

        &.title {
          color: $green;
        }
      }

      h2,
      h6 {
        color: $green;
      }
    }

    &.is-gray {
      h5 {
        color: $gray-mid;

        &.title {
          color: $gray;
        }
      }

      h2,
      h6 {
        color: $gray;
      }
    }

    &.is-blue {
      h5 {
        color: $blue-mid;

        &.title {
          color: $blue;
        }
      }

      h2,
      h6 {
        color: $blue;
      }
    }
  }

  .svg-parent {
    align-self: center;
    background: $cherry-light;
    border-radius: 5px;
    display: flex;
    height: 10rem;
    margin-bottom: 1rem;
    position: relative;
    width: 30rem;

    svg {
      width: 100%;

      .domain,
      .tick,
      line {
        stroke: $cherry;
        stroke-width: 1.5;
      }

      text {
        color: $cherry-mid;
        font-family: "archia";
        font-size: 9px;
        font-weight: 600;
        stroke: transparent;
      }
    }

    &.is-green {
      background: $green-light;

      svg {
        .domain,
        .tick,
        line {
          stroke: $green;
        }

        text {
          color: $green-mid;
          stroke: transparent;
        }
      }
    }

    &.is-gray {
      background: $gray-light;

      .domain,
      .tick,
      line {
        stroke: $gray;
      }

      text {
        color: $gray-mid;
        stroke: transparent;
      }
    }

    &.is-blue {
      background: $blue-light;

      .domain,
      .tick,
      line {
        stroke: $blue;
      }

      text {
        color: $blue-mid;
        stroke: transparent;
      }
    }
  }
}

.TimeSeries {
  align-self: center;
  width: 100%;
}

.timeseries-header {
  align-self: center;
  margin-top: 3rem;
  width: 100%;

  h1 {
    color: $gray;
    margin: 0;
    margin-bottom: 2rem;
    text-align: center;
  }

  .scale-modes {
    align-items: flex-end;
    bottom: 0;
    color: $gray;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    right: 0;
    z-index: 99;

    label {
      color: $gray-mid;
      font-family: "archia";
      font-size: 0.75rem;
      font-weight: 900;
      margin-right: 0.25rem;
      transition: all 0.2s ease-in-out;
      z-index: 99;
    }

    &:hover {
      label {
        &.main {
          color: $gray;
        }
      }
    }

    & > * {
      align-self: center;
    }
  }
}

.Home {
  display: flex;
  flex-direction: row;
  width: 100%;

  .home-left,
  .home-right {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .home-left {
    padding-right: 15px;
  }

  .home-right {
    padding-left: 25px;
  }
}

@media (min-width: 769px) {
  .Home,
  .State {
    padding-top: 5rem;
  }
}
@media (max-width: 769px) {
  .TimeSeries,
  table,
  .header,
  .Level,
  .timeseries-header,
  .TimeSeries-Parent,
  .Links,
  .Minigraph,
  .Summary,
  .FAQ,
  .MapExplorer,
  .patients-summary .filters,
  .updates,
  .updates-header {
    width: calc(100% - 2rem);
  }

  .Home,
  .State {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    margin-right: 0;

    .home-left,
    .home-right,
    .state-left,
    .state-right {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0;
    }
  }

  .MapExplorer {
    .header {
      margin-top: 2rem;
    }
  }

  body.modal-open {
    width: 100%;
  }

  .link,
  .faq {
    width: calc(100% - 2rem);
  }

  .timeseries {
    .svg-parent {
      width: 100%;
    }
  }

  .map-stats {
    .stats {
      .timestamp {
        width: 4.5rem;
      }
    }
  }

  .last-update {
    width: 10rem;
  }

  a.button {
    display: flex;
    flex: row;
    width: 10rem;
    justify-content: center;

    & > * {
      align-self: center;
    }

    svg {
      width: 38px;
    }
  }

  .Banner {
    height: 7rem;

    .snippet {
      width: 100%;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  table {
    td {
      max-width: 6.75rem;
    }
  }

  .cards-container {
    padding: 1rem;
    .cards {
      .card {
        flex: 0 1 calc(100%);
      }
    }
  }

  .PatientsDB {
    width: 100%;

    .header {
      width: calc(100% - 2rem);
      margin: 0;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .reminder {
      width: calc(100% - 2rem);
      padding: 0;
    }

    .Patients {
      width: calc(100% - 2rem);
    }

    .modal {
      .modal-content {
        width: calc(100% - 5rem);
        .meta {
          height: 20rem;
        }
      }
    }

    .filters-left {
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .filters {
      height: auto;
      justify-content: center;
      padding: 0.2rem;
    }
  }

  .table-fineprint {
    margin-right: 1.25rem;
  }

  .patients-summary {
    width: calc(100% - 2rem);
    .modal {
      .modal-content {
        width: calc(100% - 5rem);
        .meta {
          height: 20rem;
        }
      }
    }
  }

  .patientdb-wrapper {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    .Patients {
      width: 100%;
    }

    .day {
      justify-content: center;
      width: 100%;
    }
  }

  .Resources {
    table {
      position: relative;
      width: 40rem;
      align-self: center;
      font-family: "archia";
      text-transform: none;
      border-spacing: 3px 2px;
      border-collapse: separate;
      // border: 0.1rem solid rgb(151, 150, 221);

      thead {
        background: $purple-light;
        color: $gray-dark;
        text-align: center;
        font-size: 0.7rem;

        th {
          padding: 0.5rem;
          cursor: pointer;
          border-radius: 5px;
          transition: all 0.1s ease-in-out;
          z-index: 99;

          &.sticky {
            top: 4px;
            background: $gray-opaque;
          }

          &:hover {
            background: #ecedee;
          }

          .heading-content {
            display: flex;
            justify-content: space-between;
            position: relative;
            flex-direction: row;
            height: 0.9rem;
            align-items: center;

            abbr {
              text-align: right;
            }

            svg {
              width: 10px;
              margin: 0;
              right: 0;
              stroke-width: 4px;
              margin-top: 0.15rem;
              margin-left: 0.25rem;
              color: $gray-mid;
            }
          }
        }
      }

      tbody {
        color: $gray;

        tr {
          transition: background 0.1s ease-in-out;
          // cursor: pointer;

          &:hover {
            background: $gray-hover !important;
          }

          &.divider {
            height: 0.5rem;
            background: #6c757d10 !important;
          }

          &.spacer {
            height: 0.5rem;
            background: #fff !important;
          }
        }

        tr:nth-child(even) {
          background-color: $purple-light;
        }

        td {
          // padding: 0.25rem;
          font-size: 0.6rem;
          border-radius: 5px;
          text-align: left;
          .deltas {
            margin-right: 0.25rem;
            font-size: 11px !important;

            svg {
              width: 9px;
              height: 9px;
              stroke-width: 3;
              vertical-align: -0.25px;
            }
          }
        }

        td:first-child {
          text-align: left;
          max-width: 7.5rem;
          word-wrap: break-word;
        }

        .state-last-update {
          background: transparent;
          transform: translateX(1rem);
          &:hover {
            background: #fff !important;
          }

          td {
            .last-update {
              text-align: left;
              display: flex;
              flex-direction: row;
              align-items: baseline;
              width: 100%;
            }
          }
        }

        .district-heading {
          transform: translateX(1rem);
          background: $gray-light;

          td {
            font-size: 0.75rem;
            font-weight: 900;
            padding: 0.45rem;
            color: $gray-dark;
            background: $gray-light;

            .heading-content {
              display: flex;
              justify-content: space-between;
              position: relative;
              flex-direction: row;
              height: 0.9rem;
              align-items: center;

              abbr {
                text-align: right;
              }

              svg {
                width: 10px;
                margin: 0;
                right: 0;
                stroke-width: 4px;
                margin-left: 0.25rem;
                margin-top: 0.15rem;
                color: $gray-mid;
              }
            }
          }
        }

        max-width: 10rem;

        .district {
          transform: translateX(1rem);
        }
      }

      .affected-count {
        position: absolute;
        margin: 0;
        top: -1rem;
        color: $gray-mid;
        right: 0;
      }

      .is-total {
        td {
          background: $gray-hover;
        }
      }

      .dropdown {
        position: absolute;
        left: -0.75rem;
        background: $gray-light;
        border-radius: 50%;
        width: 13px;
        height: 13px;
        margin-top: 0.5rem;
        cursor: pointer;
        transition: background 0.2s ease-in-out;

        &:hover {
          background: $gray-hover;
        }

        svg {
          position: absolute;
          top: -0.35rem;
          left: 1px;
          width: 11px;
          stroke-width: 3;
        }
      }
    }
  }

  .resourcefilters {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .resourcefilter {
    margin-bottom: 0.4rem;
  }

  .filtersection {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 0.1rem;
    .filtertitle {
      align-self: center;
      text-align: center;
      color: $cherry;
    }
    animation-name: fadeInUp;
    animation-duration: 1s;
    animation-timing-function: ease-in;
  }

  .pagination {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .select {
      // height: max-content;
      margin-top: 0.4rem;
      margin-right: 0;
      // min-width: 9rem;
    }

    input {
      // min-width: 8rem;
      // height: max-content;
      margin: 0.1rem 0.1rem 0.1rem 0.1rem;
    }

    h5 {
      margin-top: 0;
      margin-bottom: 0.1rem;
    }
  }

  .Search {
    .result-name {
      max-width: 10rem !important;
    }
  }

  .State {
    .district-bar,
    .to-essentials,
    .Clusters {
      width: calc(100% - 3rem);
      h1 {
        padding-left: 0;
      }
    }
  }
}
</style>
