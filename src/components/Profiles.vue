<template>
  <v-card
    class="mx-1 mt-12"
    max-width="400"
  >
    <v-img
      class="white--text primary"
      height="200px"
      src="https://enrollwcc.org/wp-content/uploads/2018/08/Aspire-Richmond-California.jpg"
      gradient="to bottom, rgba(35, 82, 144, 0.1), rgba(35, 82, 144, 0.7)"
    >
      <v-card-title class="align-end fill-height">Aspire Richmond California College Prepatory Academy</v-card-title>
    </v-img>

    <v-card-text>
      <span>Number 10</span><br>
      <span class="text--primary">
        <span>Whitehaven Beach</span><br>
        <span>Whitsunday Island, Whitsunday Islands</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src:
          "https://enrollwcc.org/wp-content/uploads/2018/08/Aspire-Richmond-California-300x169.jpg",
        title: "Aspire Richmond California College Prepatory Academy",
        description:
          "Ensure that all young people have the knowledge and skills to thrive in college and society so that they will solve the challenges our communities face today and tomorrow."
      }
    ]
  })
};
</script>

