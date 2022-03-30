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
              <h5 class="m-0 font-weight-bold text-primary">Selesaikan Pembayaran Anda</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-8">
                    <h4>Silahkan scan untuk melakukan pembayaran</h4>
                    <p>Mohon selesaikan pembayaran dengan mengikuti petunjuk yang telah dikirimkan. Setelah pembayaran terkonfirmasi, pembelian akan dikirim secepatnya. Terima kasih sudah menggunakan Cafe Melati.</p>
                    <hr>
                    <div class="row">
                        <div class="col-md-4">
                            <label>Metode pembayaran :</label>
                              <span> GO PAY</span>
                            <label>ID Transaksi      :</label>
                              <span> 00001</span>
                            <label>Status pembayaran :</label>
                              <span> Belum Dibayar</span>
                            <label>Total pembayaran  :</label>
                              <span> Rp. 30000</span>
                        </div>
                        <div class="col-auto">
                        </div>
                    </div>
                    <br><br>
                    <button class="btn btn-info">Generate ulang code QR
                    </button>
                </div>
                
                <div class="col-md-4">
                    <img src="@/assets/QR.png" class="img-profile " width="250px" height="250px">
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow mb-4">
            <!-- <div class="card-header c">
              <h5 class="m-0 font-weight-bold text-primary">Selesaikan Pembayaran Anda</h5>
            </div> -->
            <div class="card-body">
              <div class="row">
                <div class="col-md-8">
                    <h4>Pembayaran Berhasil</h4>
                    <p>Terimakasih telah melakukan pembayaran</p>
                    <hr>
                    <div class="row">
                        <div class="col-md-4">
                            <label>Metode pembayaran</label>
                              <span> GO PAY</span>
                            <label>ID Transaksi      :</label>
                              <span> 00001</span>
                            <label>Status pembayaran :</label>
                              <span> Belum Dibayar</span>
                            <label>Total pembayaran  :</label>
                              <span> Rp. 30000</span>
                        </div>
                        <div class="col-auto">
                        </div>
                    </div>
                    <br><br>
                    <button class="btn btn-info">OK
                    </button>
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
                    Cafe Melati
                  </h1>
                  <h3 class="h3 mb-0 text-gray-800">Jl. Dr. Wahidin No 86, Surabaya</h3>
                  <h5 class="h5 mb-0 text-gray-800">Telp 085233444111</h5>
                  <br>
                </div>
              <div class="row">
                <table class="table" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Nama</th>
                      <th>Harga</th>
                      <th>Jumlah</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nasi Goreng</td>
                      <td>10000</td>
                      <td>2</td>
                      <td>20000</td>
                    </tr>
                    <tr>
                      <td>Es Teh</td>
                      <td>5000</td>
                      <td>2</td>
                      <td>10000</td>
                    </tr>
                      <tr>
                      <td colspan="3" class="text-right">Total</td>
                      <td>Rp30000</td>
                      </tr>
                  </tbody>
                </table>
                <div class="col-md-4 text-center"></div>

                <div class="col-md-4"></div>
                <!-- <button type="submit" class="btn btn-primary">
                  Lakukan Pemesanan Lain
                </button> -->
                <router-link to="/transaksi" class="btn btn-primary">
                Lakukan Pemesanan Lain
                </router-link>
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