<template>
  <v-content>
    <v-container>
      <div id="essentials">
        <v-row style="padding-bottom:15px;padding-top:15px;">
          <v-list-item>
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25pt"
                height="25pt"
                viewBox="0 0 64 64"
                version="1.1"
              >
                <g id="surface8648762">
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                    d="M 32 7 C 45.800781 7 57 18.199219 57 32 C 57 45.800781 45.800781 57 32 57 C 18.199219 57 7 45.800781 7 32 C 7 18.199219 18.199219 7 32 7 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(90.196078%,90.588235%,90.588235%);fill-opacity:1;"
                    d="M 32 7 C 31.898438 7 31.800781 7 31.699219 7 C 30.949219 7 30.148438 7.050781 29.398438 7.148438 C 29.25 7.148438 29.050781 7.199219 28.898438 7.199219 C 41.199219 8.75 50.75 19.25 50.75 32 C 50.75 44.75 41.199219 55.25 28.898438 56.800781 C 29.148438 56.851562 29.398438 56.851562 29.699219 56.898438 C 30.300781 56.949219 30.949219 57 31.550781 57 C 31.699219 57 31.851562 57 32 57 C 45.800781 57 57 45.800781 57 32 C 57 18.199219 45.800781 7 32 7 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,48.235294%,100%);fill-opacity:1;"
                    d="M 32 58.5 C 17.398438 58.5 5.5 46.601562 5.5 32 C 5.5 17.398438 17.398438 5.5 32 5.5 C 46.601562 5.5 58.5 17.398438 58.5 32 C 58.5 46.601562 46.601562 58.5 32 58.5 Z M 32 8.5 C 19.050781 8.5 8.5 19.050781 8.5 32 C 8.5 44.949219 19.050781 55.5 32 55.5 C 44.949219 55.5 55.5 44.949219 55.5 32 C 55.5 19.050781 44.949219 8.5 32 8.5 Z M 32 8.5 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,48.235294%,100%);fill-opacity:1;"
                    d="M 32 21.351562 C 31.148438 21.351562 30.5 22 30.5 22.851562 C 30.5 23.699219 31.148438 24.351562 32 24.351562 C 32.851562 24.351562 33.5 23.699219 33.5 22.851562 C 33.5 22 32.851562 21.351562 32 21.351562 Z M 32 46.5 C 31.148438 46.5 30.5 45.851562 30.5 45 L 30.5 31.148438 C 30.5 30.300781 31.148438 29.648438 32 29.648438 C 32.851562 29.648438 33.5 30.300781 33.5 31.148438 L 33.5 45 C 33.5 45.851562 32.851562 46.5 32 46.5 Z M 32 46.5 "
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="headline font-regular"
                style="color:rgb(108, 117, 125); font-family: Archivo, sans-serif !important;"
                >Essential Services</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-row>
        <v-card flat class="mx-auto">
          <v-row>
            <v-col v-for="(resource, i) in list" :key="i" cols="12" md="4">
              <v-card outlined hover style="border-color:#007bff;">
                <div class="d-flex flex-no-wrap">
                  <div>
                    <v-card-title
                      class="headline"
                      v-text="resource.nameoftheorganisation"
                    ></v-card-title>
                    <v-card-subtitle
                      v-text="resource.category"
                    ></v-card-subtitle>
                    <v-card-text
                      v-text="resource.descriptionandorserviceprovided"
                    ></v-card-text>
                  </div>
                </div>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn right icon @click="resource.show = !resource.show">
                    <v-icon>{{
                      resource.show ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="resource.show">
                    <v-divider></v-divider>
                    <v-list>
                      <v-list-item v-if="resource.phonenumber">
                        <v-list-item-icon>
                          <v-icon>mdi-phone</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title>{{
                            resource.phonenumber
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider inset></v-divider>

                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-web</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title>{{
                            resource.contact
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider inset></v-divider>

                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-map-marker</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title>{{
                            resource.city
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";

export default {
  name: "Essentials",
  mounted() {
    this.getData();
  },

  data: () => ({
    list: [],
  }),

  methods: {
    async getData() {
      axios
        .get("https://api.covid19india.org/resources/resources.json")
        .then((response) => {
          let tempArray = [];
          tempArray = response.data.resources.filter(
            (resource) => resource.state === "Gujarat"
          );
          tempArray.forEach((element) => {
            element["show"] = false;
          });
          tempArray.forEach((element) => {
            this.list.push(element);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
