<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">MENU</h1>
          <!-- DataTales Example -->
          <div class="card shadow">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Menu</h6>
            </div>
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="card shadow col-lg-4 xl-3 md-6 mb-4 mr-2">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Makanan</h6>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        class="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <!-- <th>NO</th> -->
                            <th>NAMA</th>
                            <th>HARGA</th>
                            <th>JUMLAH</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <!-- <td>1</td> -->
                            <td>Nasi Goreng</td>
                            <td>Rp 10000</td>
                            <td>
                              <input class="col-md-4" type="number" value="">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div class="card shadow col-lg-4 xl-3 md-6 mb-4 mr-2">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Minuman</h6>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        class="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <!-- <th>NO</th> -->
                            <th>NAMA</th>
                            <th>HARGA</th>
                            <th>JUMLAH</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <!-- <td>1</td> -->
                            <td>Thai Tea</td>
                            <td>Rp 8000</td>
                            <td><input class="col-md-4" type="number" value=""></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div class="card shadow col-lg-4 xl-3 md-6 mb-4 mr-2">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Snack</h6>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        class="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <!-- <th>NO</th> -->
                            <th>NAMA</th>
                            <th>HARGA</th>
                            <th>JUMLAH</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <!-- <td>1</td> -->
                            <td>Chitato</td>
                            <td>Rp 5000</td>
                            <td><input class="col-md-4" type="number" value=""></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
                <router-link
                  to="/transaksi"
                  class="btn btn-info btn-icon-split"
                >
                  <span class="icon text-white-50">
                    <i class="fas fa-plus"></i>
                  </span>
                  <span class="text">Tambah</span>
                </router-link>
            </div>
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
  </div>
</template>