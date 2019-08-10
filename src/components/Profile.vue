<template>
  <v-card class="mx-1 mt-12">
    <v-img
      class="white--text primary"
      height="200px"
      src="https://enrollwcc.org/wp-content/uploads/2018/08/Aspire-Richmond-California.jpg"
      gradient="to bottom, rgba(35, 82, 144, 0.9), rgba(35, 82, 144, 0.3)"
    >
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </template>
      <v-card-title
        class="align-start fill-height"
      >
        <h6 class="title">Aspire Richmond California College Prepatory Academy</h6>
      </v-card-title>
    </v-img>

    <v-card-text>
      <h5 class="text--primary">Mission</h5>
      <p class="mb-2">{{ description }}</p>
      <div>
        <span class="text--primary">Grades Served: </span>
        <span>TK, K, 1, 2, 3, 4, 5</span>
      </div>
      <div>
        <span class="text--primary">Uniform: </span>
        <span>Yes</span>
      </div>
      <div>
        <span class="text--primary">Public Transport: </span>
        <span>72, 72M, 74, 76, 376, 681, BART</span>
      </div>
      <div>
        <span class="text--primary">Enrollment Size: </span>
        <span>341</span>
      </div>
      <div>
        <span class="text--primary">Extended Care: </span>
        <span>Before Care, After Care</span>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="primary">Learn More</v-btn>
      <v-btn href="https://enrollwcc.org/apply/" text color="primary">Apply Now</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    src:
      "https://enrollwcc.org/wp-content/uploads/2018/08/Aspire-Richmond-California-300x169.jpg",
    title: "Aspire Richmond California College Prepatory Academy",
    description:
      "Ensure that all young people have the knowledge and skills to thrive in college and society so that they will solve the challenges our communities face today and tomorrow."
  })
};
</script>

