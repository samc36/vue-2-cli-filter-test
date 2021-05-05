<template>
  <div>
    <b-row>
      <b-col>
        <h1>Dashboard</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="widget in widgets.data" :key="widget.id" cols="12" lg="6">
        <Widget :widget="widget" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget.vue";

export default {
  name: "Dashboard",

  components: {
    Widget,
  },

  computed: {
    widgets() {
      return this.$store.getters.allWidgets;
    },
  },

  mounted() {
    this.$store.dispatch("getWidgets");
  },
};
</script>
