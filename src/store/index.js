import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    widgets: [],
    widgetsContent: [],
    tables: [],
  },
  getters: {
    allWidgets: (state) => state.widgets,
    allWidgetsContent: (state) => state.widgetsContent,
    allTables: (state) => state.tables,
    // WidgetContentById: (state) =>
    //   state.widgetsContent.data.filter((item) => item.id === "4"),
    // WidgetContentById: (state) => (id) => {
    //   console.log("Get Widget Content By ID ID:");
    //   console.log(id);
    //   return state.widgetsContent.data.find(
    //     (widgetContent) => widgetContent.id === id
    //   );
    // },
    WidgetContentById: (state) => (id) => {
      if (!state.widgetsContent.data) {
        return [];
      }
      return state.widgetsContent.data.find(
        (widgetContent) => widgetContent.id === id
      );
    },
    // TableFieldsById: (state) => (id) => {
    //   return state.widgetsContent.filter(
    //     (widgetContent) => widgetContent.data.table.id === id
    //   );
    // },
    TableContentById: (state) => (id) => {
      //   return state.tables.filter((tableContent) => tableContent.id === id);
      if (!state.tables.data) {
        return [];
      }
      return state.tables.data.find((tableContent) => tableContent.id === id);
    },
  },
  actions: {
    getWidgets({ commit }) {
      axios
        .get(
          "https://samc36.github.io/vue-2-cli-filter-test/widgets_endpoint.json"
        )
        .then((response) => {
          commit("SET_Widgets", response.data);
        });
    },

    getWidgetsContent({ commit }) {
      axios
        .get(
          "https://samc36.github.io/vue-2-cli-filter-test/widgets_content.json"
        )
        .then((response) => {
          commit("SET_WidgetsContent", response.data);
        });
    },

    getWidgetTables({ commit }) {
      axios
        .get(
          "https://samc36.github.io/vue-2-cli-filter-test/table_endpoint.json"
        )
        .then((response) => {
          commit("SET_Tables", response.data);
        });
    },
  },
  mutations: {
    SET_Widgets(state, widgets) {
      state.widgets = widgets;
    },
    SET_WidgetsContent(state, widgetsContent) {
      state.widgetsContent = widgetsContent;
    },
    SET_Tables(state, tables) {
      state.tables = tables;
    },
  },
});

export default store;
