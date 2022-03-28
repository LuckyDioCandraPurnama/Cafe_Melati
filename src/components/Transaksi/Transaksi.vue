<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">TRANSAKSI</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Data Transaksi
              </h6>
            </div>
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-md-4 text-center">
                  <img
                    class=""
                    src="@/assets/kopi.jpg"
                    width="200px"
                    height="200px"
                  />
                  <!-- <i class="far fa-user fa-7x text-gray-300"></i> -->
                </div>
                
              <!-- <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>JENIS</th>
                    <th>JUMLAH (KG / SATUAN)</th>
                    <th>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(m, index) in detail" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ m.jenis }}</td>
                    <td>{{ m.quantity }}</td>
                    <td>{{ m.subtotal }}</td>
                  </tr>
                  <tr v-if="total != ''">
                    <td colspan="3" class="text-right">Total</td>
                    <td>
                      <h6 class="font-weight-bold">Rp {{ total }}</h6>
                    </td>
                  </tr>
                </tbody>
              </table> -->

             
              <router-link to="/"  
                class="btn btn-secondary"
                >Kembali</router-link> &nbsp;
              <router-link to="/"  
                class="btn btn-primary"
                >Tambah Pesanan</router-link>
              <!-- <br />
              <div class="col-md-4 text-center">
              </div> -->
            </div>
          </div>
        </div>
      </div>
      </div>
      <footer-component></footer-component>
    </div>
  </div>
