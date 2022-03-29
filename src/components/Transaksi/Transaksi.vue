<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- <h1 class="h3 mb-2 text-gray-800">TRANSAKSI</h1> -->
          <!-- Menu unggulan -->
          <div class="card shadow mb-4">
            <div class="card-header c">
              <h5 class="m-0 font-weight-bold text-primary">Menu Unggulan</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-4 xl-3 md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-success text-uppercase
                              mb-1
                            "
                          >
                            Nasi Goreng
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            Rp 10000
                          </div>
                        </div>
                        <div class="col-auto">
                          <img
                            class="img-profile rounded-circle"
                            src="@/assets/nasgor.jpg"
                            width="80px"
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 xl-3 md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-success text-uppercase
                              mb-1
                            "
                          >
                            Mie Goreng
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            Rp 10000
                          </div>
                        </div>
                        <div class="col-auto">
                          <img
                            class="img-profile rounded-circle"
                            src="@/assets/mie.jpg"
                            width="80px"
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 xl-3 md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-success text-uppercase
                              mb-1
                            "
                          >
                            Chocolatos
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            Rp 10000
                          </div>
                        </div>
                        <div class="col-auto">
                          <img
                            class="img-profile rounded-circle"
                            src="@/assets/coklat.jpg"
                            width="80px"
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 xl-3 md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-info text-uppercase
                              mb-1
                            "
                          >
                            Soda Gembira
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            Rp 10000
                          </div>
                        </div>
                        <div class="col-auto">
                          <img
                            class="img-profile rounded-circle"
                            src="@/assets/sogem.jpg"
                            width="80px"
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 xl-3 md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-info text-uppercase
                              mb-1
                            "
                          >
                            Taro Net
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            Rp 10000
                          </div>
                        </div>
                        <div class="col-auto">
                          <img
                            class="img-profile rounded-circle"
                            src="@/assets/taro.jpg"
                            width="80px"
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 xl-3 md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-info text-uppercase
                              mb-1
                            "
                          >
                            Chitato
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            Rp 10000
                          </div>
                        </div>
                        <div class="col-auto">
                          <img
                            class="img-profile rounded-circle"
                            src="@/assets/chitato.jpg"
                            width="80px"
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- MENU -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Menu</h6>
            </div>
            <div class="card-body">
              <input type="number" name="" id="">
              <div class="row align-items-center">
                <!-- <div class="col-md-4 text-center">
                  <img
                    src="@/assets/kopi.jpg"
                    width="200px"
                    height="200px">
                </div> -->
                <div class="col-md-4 text-center"></div>

                <div class="col-md-4"></div>

                <router-link to="/" class="btn btn-secondary"
                  >Kembali</router-link
                >
                &nbsp;
                <button type="submit" class="btn btn-primary">
                  Tambah Pesanan
                </button>
              </div>
            </div>
          </div>
          <!-- METODE PEMBAYARAN -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Metode Pembayaran</h6>
            </div>
            <div class="card-body">
              <!-- <div type="submit" class="col-lg-2 xl-3 md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            BCA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <h5 class="font-weight-bold text-primary">E-Money dan Kartu Kredit</h5>
              <div class="">
                <div class=""></div>
                  <div class="form-group">
                        <div
                          class="btn-group btn-group-toggle"
                          data-toggle="buttons">
                          <label
                            class="btn btn-info"
                            >
                            <input
                              type="radio"
                              value="admin"
                              
                            />BCA
                          &nbsp;
                          </label>
                          &nbsp;

                          <label class="btn btn-info">
                            <input
                              type="radio"
                              value="admin"
                             
                            />BNI
                          </label>
                          &nbsp;

                          <label
                            class="btn btn-info"
                            >
                            <input
                              type="radio"
                              value="kasir"
                              
                            />BTN
                          &nbsp;
                          </label>
                          &nbsp;

                          <label class="btn btn-info">
                            <input
                              type="radio"
                              value="kasir"
                              
                            />MANDIRI
                          </label>
                          &nbsp;

                          <label
                            
                            class="btn btn-info"
                            >
                            <input
                              type="radio"
                              value="owner"
                              
                            />GOPAY
                          &nbsp;
                          </label>
                          &nbsp;

                          <label class="btn btn-info">
                            <input
                              type="radio"
                              value="owner"
                              
                            />OVO
                          </label>
                        </div>
                  </div>
                  <h5 class="font-weight-bold text-primary">Tunai</h5>
                <div class="">
                  <h6>Silahkan Datang Ke Kasir</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Bukti Transaksi</h6>
            </div>
            <div class="card-body">
                <div class="text-center">
                  <!-- <hr /> -->
                  <h1 class="h1 font-weight-bold mb-0 text-gray-900">
                    Report Transaksi
                  </h1>
                  <h3 class="h3 mb-0 text-gray-800">Cafe Melati</h3>
                  <h5 class="h5 mb-0 text-gray-800">
                    Jl. Dr. Wahidin No 86, Balung
                  </h5>
                </div>
              <div class="row">
                <table class="table" cellspacing="0">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Nama</th>
                      <th>Harga</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                      <tr>
                      <td colspan="3" class="text-right">Total</td>
                      <td>Rp</td>
                      </tr>
                  </tbody>
                </table>
                <div class="col-md-4 text-center"></div>

                <div class="col-md-4"></div>
                <button type="submit" class="btn btn-success">
                  Bayar
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <!-- </div> -->
      <footer-component></footer-component>
    </div>
  </div>
</template>