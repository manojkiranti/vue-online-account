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
                      <label class="d-inline-flex align-items-center mb-0 mr-2">
                        Search:
                        <b-form-input type="search" placeholder="Email" class="form-control form-control-sm ml-2"
                          v-model="searchParams.email"></b-form-input>
                        <b-form-input type="search" placeholder="Mobile" class="form-control form-control-sm ml-2"
                          v-model="searchParams.mobile_no"></b-form-input>
                        <b-form-input type="search" placeholder="ref no" class="form-control form-control-sm ml-2"
                          v-model="searchParams.ref_no"></b-form-input>
                      </label>
                      <button class="btn btn-primary btn-sm" @click="getSearchResults"><b-spinner small v-if="isTableDataLoading"></b-spinner> Search</button>
                    </div>
                    <!-- <div class="table-actions-btns ml-2 mb-2">
                            <b-button variant="primary"  @click="openCreateModal" size="sm"
                            >Add Learning Sub List</b-button
                            >
                        </div> -->
                  </div>
                </div>
                <!-- End search -->

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
                    <template v-slot:cell(status)="row">
                      <div class="badge font-size-12" :class="{
                        'badge-soft-danger': `${row.value}` === 'Chargeback',
                        'badge-soft-success': `${row.value}` === 'Active',
                        'badge-soft-warning':
                          `${row.value}` === 'InActive',
                      }">
                        {{ row.value }}
                      </div>
                    </template>


                    <template v-slot:cell(action)="row">
                      <a href="javascript:void(0);" class="mr-3 text-primary" v-b-tooltip.hover data-toggle="tooltip"
                        title="view" @click="editItem(row)">
                        <i class="mdi mdi-arrow-right-circle-outline  font-size-18"></i>
                      </a>
                      <a href="javascript:void(0);" class="text-danger mr-3" v-b-tooltip.hover @click="deleteItem(row)"
                        title="Delete">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                      <!-- <a
                            href="javascript:void(0);"
                            class="text-danger"
                            v-b-tooltip.hover
                            title="Edit"
                            >
                            <i class="mdi mdi-eye font-size-18"></i>
                            </a> -->
                    </template>
                  </b-table>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="dataTables_paginate paging_simple_numbers float-right">
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
import Api from "@/repositories/adminOnline";
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
export default {
  page: {
    title: "New Request",
    meta: [{ name: "description", content: appConfig.description }]
  },
  //   components: { createLearningSublist },
  name: "NewRequest",
  mixins: [Promise],
  components: { Layout, PageHeader },
  data() {
    return {
      searchParams: {
        email: '',
        mobile_no: '',
        ref_no: ''
      },
      title: "New Request",
      items: [
        {
          text: "Online Account",
          href: "/"
        },
        {
          text: "New Request",
          active: true
        }
      ],
      formModalTitle: "Create Learning detail",
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
        { key: "reference_code", sortable: false },
        { key: "full_name", sortable: false },
        { key: "salutation", sortable: true },
        { key: "email", sortable: true },
        { key: "mobile_no", sortable: false },
        { key: "branch_id", sortable: false },
        { key: "otp_verification", sortable: false },
        { key: "created_at", sortable: true },
        { key: "updated_at", sortable: false },
        { key: "product_id", sortable: true },
        { key: "Action" },
      ],
      tableData: [],
      learningId: ''
    };
  },
  filters: {
    // Filter definitions
    dateFormate(value) {
      const yourDate = new Date(value)
      return yourDate.toISOString().split('T')[0]
    }
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
    }
  },
  filters: {
    // Filter definitions
    dateFormate(value) {
      const yourDate = new Date(value)
      return yourDate.toISOString().split('T')[0]
    }
  },
  methods: {
    editItem(row) {
      this.selectedRow = { ...row.item };
      console.log('row', row)
      this.$router.push(`/online/all-request/review-account/${this.selectedRow.guid}`)
    },
    deleteItem(row) {
      this.$bvModal
        .msgBoxConfirm("Are you want to delete selected List?")
        .then((value) => {
          if (value) {
            this.isTableDataLoading = true;
            const operation = this.response(
              Learning.deleteLearningList(row.item.id)
            );
            operation
              .then((data) => {
                if (operation.isFulfilled()) {
                  console.log(data);
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
      this.formModalTitle = "Create Learning detail";
      this.modalType = "create";
      this.$refs["modal-1"].show();
    },
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      console.log('filteredItems', filteredItems)
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
    getRequestParams(page, pageSize, status, email, mobile_no, ref_no) {
      let params = {};

      if (page) {
        params["page"] = page;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }
      if (status) {
        params["status"] = status;
      }

      if (email) {
        params["email"] = email;
      }

      if (mobile_no) {
        params["mobile_no"] = mobile_no;
      }

      if (ref_no) {
        params["ref_no"] = ref_no;
      }
      return params;
    },
    getSearchResults() {
      this.getNewRequest('search')
    },
    getNewRequest(type = 'default') {
      let params;
      if (type == 'default') {
        params = this.getRequestParams(this.currentPage, this.perPage, 'Submitted')
      } else {
        params = this.getRequestParams(1, 10, 'Submitted', this.searchParams.email, this.searchParams.mobile_no, this.searchParams.ref_no);
      }


      this.isTableDataLoading = true;
      const operation = this.response(Api.getNewRequest(params));
      operation.then((data) => {
        if (operation.isFulfilled()) {
          console.log('new-request', data)
          this.tableData = data.data;
          this.totalData = data.total;
          this.perPage = data.per_page;
          this.currentPage = data.current_page;
          this.isTableDataLoading = false;
          // this.$refs.serverTable.refresh();
        }
      }).catch(err => {
        console.log(err)
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
      console.log('value', value)
      this.currentPage = value;
      this.getNewRequest()
    },
  },
};
</script>
