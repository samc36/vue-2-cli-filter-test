<template>
  <div>
    <b-card header-tag="header" :class="{ expanded: isExpanded }">
      <template #header>
        <div class="card-header-left">
          <h6 class="mb-0">
            <b-link :to="widget.url">
              <b-icon :icon="widget.icon"></b-icon>
              {{ widget.name }}
            </b-link>
          </h6>
        </div>
        <div class="card-header-right">
          <b-button variant="light">
            <b-icon icon="arrow-repeat" aria-label="Refresh"></b-icon>
          </b-button>
          <b-button v-b-toggle="'widget-body-' + widget.id" variant="light">
            <b-icon icon="chevron-down" aria-label="Help"></b-icon>
          </b-button>
          <b-button variant="light" @click="isExpanded = !isExpanded">
            <b-icon
              :icon="
                isExpanded ? 'arrows-angle-contract' : 'arrows-angle-expand'
              "
              aria-label="Expand"
            ></b-icon>
          </b-button>
        </div>
      </template>

      <b-collapse
        :id="`widget-body-${widget.id}`"
        class="widget-card-body mt-2"
      >
        <b-tabs content-class="mt-3">
          <b-tab title="Overview" active>
            <!-- <b-input-group class="mt-3">
              <b-form-row>
                <b-col>
                  <label for="from">From</label>
                  <b-form-input
                    :type="text"
                    placeholder="zz.ll.aaaa"
                  ></b-form-input>
                </b-col>

                <b-col>
                  <label for="to">To</label>
                  <b-form-input
                    :type="text"
                    placeholder="zz.ll.aaaa"
                  ></b-form-input>
                </b-col>

                <b-col>
                  <label for="manager">Manager</label>
                  <b-form-select
                    v-model="manager"
                    :options="[5, 10, 15, 25, 50, 100]"
                  ></b-form-select>
                </b-col>

                <b-col>
                  <label for="client">Client</label>
                  <b-form-select
                    v-model="client"
                    :options="[5, 10, 15, 25, 50, 100]"
                  ></b-form-select>
                </b-col>

                <b-col>
                  <label for="type">Type</label>
                  <b-form-select
                    v-model="type"
                    :options="[5, 10, 15, 25, 50, 100]"
                  ></b-form-select>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <label for="status">Status</label>
                  <b-form-select
                    v-model="status"
                    :options="[5, 10, 15, 25, 50, 100]"
                  ></b-form-select>
                </b-col>
              </b-form-row>
            </b-input-group>

            <div class="table-filters">
              <b-button-group>
                <b-button variant="outline-dark"
                  ><b-icon icon="arrow-repeat" aria-label="Refresh"></b-icon>
                </b-button>
                <b-button variant="outline-dark">Copy</b-button>
                <b-button variant="outline-dark">Excel</b-button>
                <b-button variant="outline-dark">PDF</b-button>
              </b-button-group>

              Show
              <b-form-select
                v-model="perPage"
                :options="pageOptions"
              ></b-form-select>
              entries

              <b-form-input
                :type="search"
                placeholder="Search Process"
              ></b-form-input>
            </div>

            <b-dropdown variant="primary">
              <template #button-content>
                <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
              </template>
              <b-dropdown-item-button>
                <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                Locked <span class="sr-only">(Click to unlock)</span>
              </b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-group header="Choose options" class="small">
                <b-dropdown-item-button>
                  <b-icon icon="blank" aria-hidden="true"></b-icon>
                  Option A <span class="sr-only">(Not selected)</span>
                </b-dropdown-item-button>
                <b-dropdown-item-button>
                  <b-icon icon="check" aria-hidden="true"></b-icon>
                  Option B <span class="sr-only">(Selected)</span>
                </b-dropdown-item-button>
                <b-dropdown-item-button>
                  <b-icon icon="blank" aria-hidden="true"></b-icon>
                  Option C <span class="sr-only">(Not selected)</span>
                </b-dropdown-item-button>
              </b-dropdown-group>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button>Some action</b-dropdown-item-button>
              <b-dropdown-item-button>Some other action</b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button variant="danger">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                Delete
              </b-dropdown-item-button>
            </b-dropdown> -->

            <!-- User Interface controls -->
            <b-row v-if="totalRows > 1">
              <b-col lg="6" class="my-1">
                <b-form-group
                  label="Sort"
                  label-for="sort-by-select"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  class="mb-0"
                  v-slot="{ ariaDescribedby }"
                >
                  <b-input-group size="sm">
                    <b-form-select
                      id="sort-by-select"
                      v-model="sortBy"
                      :options="sortOptions"
                      :aria-describedby="ariaDescribedby"
                      class="w-75"
                    >
                      <template #first>
                        <option value="">-- none --</option>
                      </template>
                    </b-form-select>

                    <b-form-select
                      v-model="sortDesc"
                      :disabled="!sortBy"
                      :aria-describedby="ariaDescribedby"
                      size="sm"
                      class="w-25"
                    >
                      <option :value="false">Asc</option>
                      <option :value="true">Desc</option>
                    </b-form-select>
                  </b-input-group>
                </b-form-group>
              </b-col>

              <b-col lg="6" class="my-1">
                <b-form-group
                  label="Initial sort"
                  label-for="initial-sort-select"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  class="mb-0"
                >
                  <b-form-select
                    id="initial-sort-select"
                    v-model="sortDirection"
                    :options="['asc', 'desc', 'last']"
                    size="sm"
                  ></b-form-select>
                </b-form-group>
              </b-col>

              <b-col lg="6" class="my-1">
                <b-form-group
                  label="Filter"
                  label-for="filter-input"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  class="mb-0"
                >
                  <b-input-group size="sm">
                    <b-form-input
                      id="filter-input"
                      v-model="filter"
                      type="search"
                      placeholder="Type to Search"
                    ></b-form-input>

                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''"
                        >Clear</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>

              <b-col lg="6" class="my-1">
                <b-form-group
                  v-model="sortDirection"
                  label="Filter On"
                  description="Leave all unchecked to filter on all data"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  class="mb-0"
                  v-slot="{ ariaDescribedby }"
                >
                  <b-form-checkbox-group
                    v-model="filterOn"
                    :aria-describedby="ariaDescribedby"
                    class="mt-1"
                  >
                    <b-form-checkbox value="name">Name</b-form-checkbox>
                    <b-form-checkbox value="age">Age</b-form-checkbox>
                    <b-form-checkbox value="isActive">Active</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>

              <b-col sm="5" md="6" class="my-1">
                <b-form-group
                  label="Per page"
                  label-for="per-page-select"
                  label-cols-sm="6"
                  label-cols-md="4"
                  label-cols-lg="3"
                  label-align-sm="right"
                  label-size="sm"
                  class="mb-0"
                >
                  <b-form-select
                    id="per-page-select"
                    v-model="perPage"
                    :options="pageOptions"
                    size="sm"
                  ></b-form-select>
                </b-form-group>
              </b-col>

              <b-col sm="7" md="6" class="my-1"> </b-col>
            </b-row>

            <b-table
              :items="tableContent.data"
              :fields="widgetContent.table.fields"
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter"
              :filter-included-fields="filterOn"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              responsive="true"
              striped
              hover
              show-empty
              small
              @filtered="onFiltered"
            >
              <template #cell(html)="data">
                <span v-html="data.value"></span>
              </template>

              <template #cell(name)="row">
                <!-- {{ row.value.first }} {{ row.value.last }} -->
                <span v-html="row.value.first"></span>
                <span v-html="row.value.last"></span>
              </template>

              <template #cell(actions)="row">
                <b-button
                  size="sm"
                  @click="info(row.item, row.index, $event.target)"
                  class="mr-1"
                >
                  Info modal
                </b-button>
                <b-button size="sm" @click="row.toggleDetails">
                  {{ row.detailsShowing ? "Hide" : "Show" }} Details
                </b-button>
              </template>

              <template #row-details="row">
                <b-card>
                  <ul>
                    <li v-for="(value, key) in row.item" :key="key">
                      {{ key }}: {{ value }}
                    </li>
                  </ul>
                </b-card>
              </template>
            </b-table>

            <!-- Info modal -->
            <b-modal
              :id="infoModal.id"
              :title="infoModal.title"
              ok-only
              @hide="resetInfoModal"
            >
              <pre>{{ infoModal.content }}</pre>
            </b-modal>

            <b-row v-if="totalRows > 1">
              <b-col cols="6">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
              </b-col>
              <b-col cols="6">
                <p class="mt-3">Current Page: {{ currentPage }}</p>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Client Forms">
            <p>I'm the Client Forms tab</p>
          </b-tab>
          <b-tab title="Analytics">
            <p>I'm the Analytics tab!</p>
          </b-tab>
        </b-tabs>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Widget",
  props: {
    widget: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isExpanded: false,
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },

  computed: {
    widgetContent() {
      //   return this.$store.getters.TableFieldsById(this.widget.id);
      return this.$store.getters.WidgetContentById(this.widget.id);
    },
    tableContent() {
      return this.$store.getters.TableContentById(this.widget.table);
    },
    sortOptions() {
      // Create an options list from our fields
      return this.widgetContent.table.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.name, value: f.name };
        });
    },
  },

  mounted() {
    this.$store.dispatch("getWidgetsContent");
    this.$store.dispatch("getWidgetTables");

    // Set the initial number of items
    this.totalRows = this.tableContent.data.length;
    console.log("Total Rows in Mounted");
    console.log(this.tableContent.data.length);
  },

  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  border-color: #fff #fff #fff;
  color: #65a6e7;
}

.table-responsive-true {
  overflow-x: auto;
}

.card {
  margin-bottom: 30px;
}

.card.expanded {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.card-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.card-header-left a {
  color: #212529;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  /* padding: 1.25rem; */
  padding: 0;
}

.widget-card-body .tab-pane {
  padding: 1.25rem;
}
</style>
