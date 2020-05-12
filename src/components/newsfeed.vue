<template>
  <v-content>
    <v-container>
      <div id="news">
        <v-row style="padding-bottom:15px;">
          <h1 style="color:rgb(108, 117, 125);">
            Latest News
          </h1>
        </v-row>
        <v-card flat class="mx-auto" width="100%">
          <v-col v-for="(item, i) in news" :key="i" cols="12">
            <v-card hover color="rgba(108, 117, 125, 0.1)">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="item.thumbnail"></v-img>
                </v-avatar>
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>
                  <v-card-subtitle
                    v-text="item.datePublished"
                  ></v-card-subtitle>
                  <v-card-text v-text="item.description"></v-card-text>
                </div>
              </div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn icon @click="item.show = !item.show">
                  <v-icon>{{
                    item.show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="item.show">
                  <v-divider></v-divider>
                  <v-card-text v-text="item.body"></v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-card>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import moment from "moment";
//import scraper from "scrape-twitter";
export default {
  name: "NewsFeed",

  mounted() {
    this.initNews();
    //this.getTweets();
  },

  data: () => ({
    news: []
  }),

  methods: {
    // async getTweets() {
    //   let result = await new scraper.ListStream("bjpadhy", "corona-gujarat", 3);
    //   const chunks = [];
    //   for await (const chunk of result) {
    //     chunks.push(chunk);
    //   }
    //   console.log(chunks[0]);
    // },
    async initNews() {
      let response = await fetch(
        "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?fromPublishedDate=1%252F1%252F2020&autoCorrect=false&pageNumber=1&pageSize=10&q=corona%20gujarat&safeSearch=true",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "contextualwebsearch-websearch-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "f5b75795admshf24e083a78ee561p13a059jsn586dd0c7c46f"
          }
        }
      );
      let result = await response.json();
      this.news = [];
      result.value.forEach(value => {
        let tempObj = {};
        tempObj["datePublished"] = moment(value.datePublished).format(
          "MMMM Do YYYY, h:mm:ss a"
        );
        tempObj["title"] = value.title.replace(/(<([^>]+)>)/gi, "");
        tempObj["thumbnail"] = value.image.thumbnail;
        tempObj["body"] = value.body;
        tempObj["description"] = value.description.replace(/(<([^>]+)>)/gi, "");
        tempObj["url"] = value.url;
        tempObj["show"] = false;
        this.news.push(tempObj);
      });
    }
  }
};
</script>
<style>
#news {
  font-family: "Archivo", sans-serif !important;
}
</style>
