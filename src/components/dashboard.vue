<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer app>
      <Nav></Nav>
      <!-- -->
    </v-navigation-drawer>
    <v-main class="grey lighten-3">
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
        <!-- <TestCase></TestCase> -->
      </v-container>

      <v-container> </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav";
// import TestCase from "@/components/TestCase.vue";
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
  components: {
    Nav,
    // TestCase,
  },
};
</script>