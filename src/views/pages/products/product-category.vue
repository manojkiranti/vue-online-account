<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="learning-detail">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <!-- <h4 class="card-title">Learning Sub List Table</h4> -->
              <div class="row mt-4">
                <div class="col-sm-12 col-md-6">
                  <div id="tickets-table_length" class="dataTables_length">
                    <label class="d-inline-flex align-items-center">
                      Show&nbsp;
                      <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                    </label>
                  </div>
                </div>
                <!-- Search -->
                <div class="col-sm-12 col-md-6">
                  <div class="d-flex justify-content-end align-items-center">
                    <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                      <label class="d-inline-flex align-items-center mb-0">
                        Search:
                        <b-form-input type="search" placeholder="Search..." class="form-control form-control-sm ml-2">
                        </b-form-input>
                      </label>
                    </div>
                    <div class="table-actions-btns ml-2">
                      <b-button variant="primary" @click="openCreateModal" size="sm">Add Category</b-button>
                    </div>
                  </div>
                </div>
                <!-- End search -->
                <!-- Modal -->
                <b-modal id="modal-1" size="xl" :title="formModalTitle" hide-footer ref="modal-1">
                  <product-modal @submitForm="createProductCategory" :createLoading="createLoading"
                    :modalType="modalType" :selectedRow="selectedRow" />
                </b-modal>
                <!-- Table -->
                <div class="table-responsive mb-0">
                  <b-table :items="tableData" :fields="fields" responsive="sm" :current-page="currentPage"
                    :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter"
                    :filter-included-fields="filterOn" @filtered="onFiltered" ref="serverTable"
                    :busy="isTableDataLoading">
                    <template #table-busy>
                      <div class="text-center text-danger my-2">
                        <b-spinner class="align-middle"></b-spinner>
                        <strong>Loading...</strong>
                      </div>
                    </template>

                    <template v-slot:cell(created_at)="row">
                      {{ row.item.created_at | dateFormate }}
                    </template>

                    <template v-slot:cell(updated_at)="row">
                      {{ row.item.updated_at | dateFormate }}
                    </template>

                    <template v-slot:cell(thumb_image)="row">
                      <img class="table-preview-img" :src="row.item.thumb_image_url" alt="" />
                    </template>

                    <template v-slot:cell(status)="row">
                      <div class="badge font-size-12" :class="{
                        'badge-soft-success': `${row.value}` === 'active',
                        'badge-soft-warning': `${row.value}` === 'inactive',
                      }">
                        {{ row.value }}
                      </div>
                    </template>

                    <template v-slot:cell(action)="row">
                      <a href="javascript:void(0);" class="mr-3 text-primary" v-b-tooltip.hover data-toggle="tooltip"
                        title="view" @click="editItem(row)">
                        <i class="mdi mdi-pencil font-size-18"></i>
                      </a>
                      <a href="javascript:void(0);" class="text-danger mr-3" v-b-tooltip.hover @click="deleteItem(row)"
                        title="Delete">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                      <!-- <a
                            href="javascript:void(0);"
                            class="text-danger"
                            v-b-tooltip.hover
                            title="delete"
                            >
                            <i class="mdi mdi-eye font-size-18"></i>
                            </a> -->
                    </template>
                  </b-table>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="
                        dataTables_paginate
                        paging_simple_numbers
                        float-right
                      ">
                      <ul class="pagination pagination-rounded mb-0">
                        <!-- pagination -->
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                          @change="handlePageChange"></b-pagination>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Promise from "@/lib/mixins/ExtendedPromises";
import Api from "@/repositories/adminProducts";
import Layout from "../../layouts/main";
import ProductModal from "./ProductCategoryModal.vue";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
export default {
  page: {
    title: "Products Category",
    meta: [{ name: "description", content: appConfig.description }],
  },
  //   components: { createLearningSublist },
  name: "ProductCategory",
  mixins: [Promise],
  components: { Layout, PageHeader, ProductModal },
  data() {
    return {
      title: "Products Category",
      items: [
        {
          text: "Products",
          href: "/",
        },
        {
          text: "Products Category",
          active: true,
        },
      ],
      formModalTitle: "Create Product Category",
      modalType: "create",
      selectedRow: {},
      isTableDataLoading: false,
      createLearningTypeLoading: false,
      detailData: {},
      totalData: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "sort",
      sortDesc: false,
      fields: [
        { key: "id", sortable: false },
        { key: "name", sortable: false },
        { key: "name_np", sortable: false },
        { key: "slug", sortable: false },
        { key: "thumb_image", sortable: false },
        { key: "status", sortable: true },
        { key: "Action" },
      ],
      tableData: [],
      learningId: "",
      createLoading: false,
    };
  },
  filters: {
    // Filter definitions
    dateFormate(value) {
      const yourDate = new Date(value);
      return yourDate.toISOString().split("T")[0];
    },
  },
  mounted() {
    this.getNewRequest();
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.totalData;
    },
  },
  filters: {
    // Filter definitions
    dateFormate(value) {
      const yourDate = new Date(value);
      return yourDate.toISOString().split("T")[0];
    },
  },
  methods: {
    editItem(row) {
      this.selectedRow = { ...row.item };
      console.log("row", row);
      this.formModalTitle = "Update Product Category";
      this.modalType = "update";
      this.$refs["modal-1"].show();
    },
    deleteItem(row) {
      this.$bvModal
        .msgBoxConfirm("Are you want to delete selected List?")
        .then((value) => {
          if (value) {
            this.isTableDataLoading = true;
            const operation = this.response(
              Api.deleteProductCategory(row.item.id)
            );
            operation
              .then((data) => {
                if (operation.isFulfilled()) {
                  console.log(data);
                  let message = {
                    title: "Success",
                    message: data.message,
                    variant: "success",
                  };
                  this.makeToast(message);
                  this.getNewRequest();
                }
              })
              .catch((err) => {
                console.log(err);
                let message = {
                  title: "Error",
                  message: err.message,
                  variant: "warning",
                };
                this.makeToast(message);
                this.isTableDataLoading = false;
              });
          }
        })
        .catch((err) => {
          // An error occurred
          console.log(err);
        });
    },
    openCreateModal() {
      this.formModalTitle = "Create Product Category";
      this.modalType = "create";
      this.$refs["modal-1"].show();
    },
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      console.log("filteredItems", filteredItems);
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    makeToast(message) {
      this.$bvToast.toast(`${message.message}`, {
        title: `${message.title}`,
        autoHideDelay: 5000,
        variant: message.variant,
        appendToast: false,
      });
    },
    getRequestParams(page, pageSize) {
      let params = {};

      if (page) {
        params["page"] = page;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }

      return params;
    },
    getNewRequest() {
      const params = this.getRequestParams(this.currentPage, this.perPage);
      this.isTableDataLoading = true;
      const operation = this.response(Api.getProductCategory(params));
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            console.log("all-request", data);
            this.tableData = data.data;
            this.totalData = data.total;
            this.perPage = data.per_page;
            this.currentPage = data.current_page;
            this.isTableDataLoading = false;
            // this.$refs.serverTable.refresh();
          }
        })
        .catch((err) => {
          console.log(err);
          let message = {
            title: "Error",
            message: err.message,
            variant: "warning",
          };
          this.makeToast(message);
          this.isTableDataLoading = false;
        });
    },
    handlePageChange(value) {
      console.log("value", value);
      this.currentPage = value;
      this.getNewRequest();
    },
    createProductCategory(payload) {
      this.createLoading = true;
      console.log(payload);
      let postPayload = { ...payload };
      postPayload.status = postPayload.status
        ? "active"
        : "inactive";

      let formData = new FormData();
      for (var key in postPayload) {
        formData.append(key, postPayload[key]);
      }

      let operation;
      if (this.modalType == 'create') {

        operation = this.response(
          Api.createProductCategoryData(formData)
        );
      } else {

        operation = this.response(
          Api.updateProductCategory(this.selectedRow.id, formData)
        );
      }


      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            this.createLoading = false;
            this.getNewRequest();
            let message = {
              title: "Success",
              message: data.message,
              variant: "success",
            };
            this.makeToast(message);
            this.$refs["modal-1"].hide();
          }
        })
        .catch((err) => {
          console.log(err);
          let message = {
            title: "Error",
            message: err.message,
            variant: "warning",
          };
          this.makeToast(message);
          this.createLoading = false;
        });
    },
  },
};
</script>
