<template>
  <!--App Bar-->
  <v-app id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Archivo&family=Maven+Pro:wght@400&display=swap"
      rel="stylesheet"
    />
    <v-app-bar app color="#323232" dark>
      <span class="title" style="font-family: 'Archivo', sans-serif !important"
        >COVID19</span
      >
      <span
        style="font-family: 'Maven Pro', sans-serif !important; padding-left:10px;"
        >GUJARAT</span
      >
      <v-spacer></v-spacer>

      <router-link to="/newsfeed">
        <v-btn outlined text style="margin-right:15px;">
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </router-link>

      <v-btn outlined href="https://api.covid19india.org/" target="_blank" text>
        <v-icon style="padding-right:10px;">mdi-github</v-icon>
        <span class="mr-2">Data Source</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <template v-if="$route.matched.length">
        <router-view></router-view>
      </template>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
<style>
#app {
  font-family: "Archivo", sans-serif;
}
a {
  text-decoration: none;
}
</style>
