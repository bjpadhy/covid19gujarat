<template>
  <v-content>
    <v-container>
      <div id="app">
        <!--Stats-->
        <div id="stats">
          <v-row>
            <h1 style="color:rgb(108, 117, 125);">
              Gujarat Covid-19 Stats
            </h1>
          </v-row>
          <v-row style="padding-bottom:15px;">
            <h3 class="font-weight-light" style="color:rgb(108, 117, 125);">
              Last Updated: {{ statsData.gujarat.date }}
            </h3>
          </v-row>
          <v-row
            align="start"
            justify="center"
            class="mb-6"
            style="padding-bottom:20px;"
          >
            <!--Confirmed-->
            <v-col md="auto">
              <v-card
                class="mx-auto text-center"
                flat
                hover
                width="150"
                color="rgba(255, 7, 58, 0.1)"
                light
              >
                <v-sparkline
                  :value="sparkLine.confirmed"
                  color="rgba(255, 7, 58, 9)"
                  height="140"
                  padding="20"
                  stroke-linecap="round"
                  smooth
                >
                </v-sparkline>
                <v-card-text>
                  <div class="title font-weight-thin">Confirmed</div>
                  <v-row align-content="center" justify="center">
                    <div class="title" style="color:rgba(255, 7, 58, 9);">
                      {{ statsData.gujarat.confirmed }}
                    </div>
                    <div
                      class="subtitle-2 font-weight-light"
                      style="color:rgba(255, 7, 58, 9);"
                    >
                      +{{ statsData.gujarat.delta.confirmed }}
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <!--Recovered-->
            <v-col md="auto">
              <v-card
                class="mx-auto text-center"
                flat
                hover
                width="150"
                color="rgba(40, 167, 69, 0.1)"
                light
              >
                <v-sparkline
                  :value="sparkLine.recovered"
                  color="rgba(40, 167, 69, 0.9)"
                  height="140"
                  padding="20"
                  stroke-linecap="round"
                  smooth
                >
                </v-sparkline>
                <v-card-text>
                  <div class="title font-weight-thin">Recovered</div>
                  <v-row align-content="center" justify="center">
                    <div class="title" style="color:rgba(40, 167, 69, 0.9);">
                      {{ statsData.gujarat.recovered }}
                    </div>
                    <div
                      class="subtitle-2 font-weight-light"
                      style="color:rgba(40, 167, 69, 0.9);"
                    >
                      +{{ statsData.gujarat.delta.recovered }}
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <!--Deceased-->
            <v-col md="auto">
              <v-card
                class="mx-auto text-center"
                flat
                hover
                width="150"
                color="rgba(108, 117, 125, 0.1)"
                light
              >
                <v-sparkline
                  :value="sparkLine.deceased"
                  color="rgba(108, 117, 125, 9)"
                  height="140"
                  padding="20"
                  stroke-linecap="round"
                  smooth
                >
                </v-sparkline>
                <v-card-text>
                  <div class="title font-weight-thin">Deceased</div>
                  <v-row align-content="center" justify="center">
                    <div class="title" style="color:rgba(108, 117, 125, 9);">
                      {{ statsData.gujarat.deceased }}
                    </div>
                    <div
                      class="subtitle-2 font-weight-light"
                      style="color:rgba(108, 117, 125, 9);"
                    >
                      +{{ statsData.gujarat.delta.deceased }}
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <!--Chart-->
        <div id="chart">
          <v-row style="padding-bottom:30px;">
            <h1 style="color:rgb(108, 117, 125);">
              Case Trends
            </h1>
          </v-row>
          <v-row style="padding-bottom:45px;">
            <v-card flat hover class="mx-auto" width="100%">
              <line-chart
                style="padding-top: 15px;"
                v-if="loaded"
                :data="chartData"
                :options="options"
              ></line-chart>
            </v-card>
          </v-row>
        </div>
        <!--District Data-->
        <div id="districtData">
          <v-row style="padding-bottom:15px;">
            <h1 style="color:rgb(108, 117, 125);">
              District Data
            </h1>
          </v-row>
          <v-row
            align="start"
            justify="space-around"
            class="mb-6"
            style="padding-bottom:20px;"
          >
            <!--Top 5 Districts-->
            <v-col md="auto">
              <v-card
                flat
                hover
                width="500"
                class="mx-auto"
                style="font-family: Maven Pro, sans-serif !important;"
              >
                <v-card-title>Ratio</v-card-title>
                <v-card-text
                  ><div>
                    Total active cases: {{ statsData.gujarat.active }}
                  </div></v-card-text
                >
                <v-col>
                  <v-card flat height="108" style="padding-bottom:5px;">
                    <v-list-item-group>
                      <v-list-item disabled>
                        <v-list-item-content>
                          <v-list-item-title
                            style="color:black;"
                            class="headline"
                            >{{ districtTop5[0].district }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            >{{ percent(0) }}%</v-list-item-subtitle
                          >

                          <v-progress-linear
                            height="5px"
                            color="error darken-1"
                            rounded
                            :value="
                              (districtTop5[0].active /
                                statsData.gujarat.active) *
                                100
                            "
                          ></v-progress-linear>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-card>
                  <v-card flat height="108">
                    <v-list-item-group>
                      <v-list-item disabled>
                        <v-list-item-content>
                          <v-list-item-title
                            style="color:black;"
                            class="headline"
                            >{{ districtTop5[1].district }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            >{{ percent(1) }}%</v-list-item-subtitle
                          >

                          <v-progress-linear
                            height="5px"
                            color="orange"
                            rounded
                            :value="
                              (districtTop5[1].active /
                                statsData.gujarat.active) *
                                100
                            "
                          ></v-progress-linear>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-card>
                  <v-card flat height="108">
                    <v-list-item-group>
                      <v-list-item disabled>
                        <v-list-item-content>
                          <v-list-item-title
                            style="color:black;"
                            class="headline"
                            >{{ districtTop5[2].district }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            >{{ percent(2) }}%</v-list-item-subtitle
                          >

                          <v-progress-linear
                            height="5px"
                            color="success"
                            rounded
                            :value="
                              (districtTop5[2].active /
                                statsData.gujarat.active) *
                                100
                            "
                          ></v-progress-linear>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-card>
                  <v-card flat height="108">
                    <v-list-item-group>
                      <v-list-item disabled>
                        <v-list-item-content>
                          <v-list-item-title
                            style="color:black;"
                            class="headline"
                            >{{ districtTop5[3].district }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            >{{ percent(3) }}%</v-list-item-subtitle
                          >

                          <v-progress-linear
                            height="5px"
                            color="info"
                            rounded
                            :value="
                              (districtTop5[3].active /
                                statsData.gujarat.active) *
                                100
                            "
                          ></v-progress-linear>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-card>
                  <v-card flat height="108">
                    <v-list-item-group>
                      <v-list-item disabled>
                        <v-list-item-content>
                          <v-list-item-title
                            style="color:black;"
                            class="headline"
                            >{{ districtTop5[4].district }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            >{{ percent(4) }}%</v-list-item-subtitle
                          >

                          <v-progress-linear
                            height="5px"
                            color="info"
                            rounded
                            :value="
                              (districtTop5[4].active /
                                statsData.gujarat.active) *
                                100
                            "
                          ></v-progress-linear>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-card>
                </v-col>
              </v-card>
            </v-col>
            <!--District Wise Table-->
            <v-col md="auto">
              <v-card flat hover width="100%">
                <v-card-title
                  style="font-family: Maven Pro, sans-serif !important;"
                >
                  Total Cases
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
            </v-col>
          </v-row>
        </div>
        <!--News Feed-->
        <div id="newsFeed">
          <NewsFeed />
        </div>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
import LineChart from "./Chart";
import NewsFeed from "./NewsFeed";
import store from "../store/index";
console.log(process.env.VUE_APP_APIKEY);
var dates = [];
var confirmed = [];
var recovered = [];
var deceased = [];
export default {
  name: "maincontent",

  components: {
    LineChart,
    NewsFeed
  },

  mounted() {
    this.initApp();
  },

  methods: {
    initApp() {
      this.loaded = false;
      axios
        .all([
          axios.get("https://api.covid19india.org/data.json"),
          axios.get("https://api.covid19india.org/states_daily.json"),
          axios.get("https://api.covid19india.org/v2/state_district_wise.json")
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
            this.statsData.gujarat.delta.confirmed =
              gujaratTotal.deltaconfirmed;
            this.statsData.gujarat.delta.deceased = gujaratTotal.deltadeaths;
            this.statsData.gujarat.delta.recovered =
              gujaratTotal.deltarecovered;
            this.statsData.gujarat.active = gujaratTotal.active;
            this.statsData.gujarat.confirmed = gujaratTotal.confirmed;
            this.statsData.gujarat.deceased = gujaratTotal.deaths;
            this.statsData.gujarat.recovered = gujaratTotal.recovered;

            //Chart
            //Fetching Dates
            dates = states_daily.data.states_daily
              .map(a => a.date)
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

            //District Table
            this.districtData = district_total.data.find(
              ({ statecode }) => statecode === "GJ"
            ).districtData;

            var tempArr = [...this.districtData];

            this.districtTop5 = this.districtTop5.concat(
              tempArr
                .sort((active1, active2) => {
                  return active2.active - active1.active;
                })
                .splice(0, 5)
            );

            var storeObj = {
              confirmed: confirmed,
              recovered: recovered,
              deceased: deceased,
              dates: dates
            };
            store.commit("setSparkLine", storeObj);
            //Log statements
          })
        );
    },
    percent(i) {
      return Math.round(
        (this.districtTop5[i].active / this.statsData.gujarat.active) * 100
      );
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },

  data: () => ({
    loaded: false,
    chartData: [],
    sparkLine: store.getters.getSparkLine,
    options: {
      responsive: true,
      events: [
        "click",
        "mousemove",
        "mouseout",
        "touchstart",
        "touchmove",
        "touchend"
      ],
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: "bottom"
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
        caretPadding: 4
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0.1,
          fill: true
        }
      },
      scales: {
        yAxes: [
          {
            type: "linear",
            ticks: {
              beginAtZero: true,
              max: undefined,
              precision: 0
            },
            scaleLabel: {
              display: false,
              labelString: "Total Cases"
            },
            gridLines: {
              display: false
            }
          }
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
                year: "MMM DD"
              }
            },
            gridLines: {
              display: false
            }
          }
        ]
      }
    },
    statsData: {
      india: {
        date: null,
        delta: { confirmed: 0, recovered: 0, deceased: 0 },
        confirmed: 0,
        active: 0,
        deceased: 0,
        recovered: 0
      },
      gujarat: {
        date: null,
        delta: { confirmed: 0, recovered: 0, deceased: 0 },
        confirmed: 0,
        active: 0,
        deceased: 0,
        recovered: 0
      }
    },
    search: "",
    districtData: [],
    districtTop5: [],
    districtHeader: [
      {
        text: "District",
        align: "start",
        sortable: false,
        value: "district"
      },
      {
        text: "Confirmed",
        value: "confirmed"
      },
      {
        text: "Active",
        value: "active"
      },
      {
        text: "Recovered",
        value: "recovered"
      },
      {
        text: "Deceased",
        value: "deceased"
      }
    ]
  })
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600&display=swap");

body {
  font-family: "Maven Pro", sans-serif !important;
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
</style>
