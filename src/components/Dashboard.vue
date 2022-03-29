<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <h1 class="h3 mb-4 text-gray-800">Selamat Datang Di Cafe Melati</h1>
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Awal</h6>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-4">
                  <label>Tempat</label>
                  <select class="form-control">
                     <option value="" selected hidden disabled>Pilih Tempat</option>
                    <option value="">Indoor</option>
                    <option value="">Teras</option>
                    <option value="">Halaman</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label>Jenis Pelanggan</label>
                  <select class="form-control">
                     <option value="" selected hidden disabled>Pilih Jenis Pelanggan</option>
                    <option value="">Sendirian</option>
                    <option value="">Couple</option>
                    <option value="">Keluarga</option>
                    <option value="">Grup Besar</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4 py-2">
                <router-link to="/transaksi" class="btn btn-sm btn-primary">
                  <span class="text">Tampilkan</span>
                </router-link>
                <!-- <button type="button" class="btn btn-sm btn-primary" @click="tampil">Simpan</button> -->
              </div>
              
              
            </div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Tempat Duduk Teras</h6>
            </div>
            <div class="card-body">
              <button class="btn btn-primary mr-2 my-2" type="button"> 1</button>
              <button class="btn btn-primary mr-2 my-2" type="button"> 2</button>
              <button class="btn btn-primary mr-2 my-2" type="button"> 3</button>
              <button class="btn btn-primary mr-2 my-2" type="button"> 4</button>
              <button class="btn btn-primary mr-2 my-2" type="button"> 5</button>
            </div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Tempat Duduk Indoor</h6>
            </div>
            <div class="card-body">
              <button class="btn btn-primary mr-2 my-2" type="button"> 6</button>
              <button class="btn btn-primary mr-2 my-2" type="button"> 7</button>
              <button class="btn btn-primary mr-2 my-2" type="button"> 8</button>
              <button class="btn btn-primary mr-2 my-2" type="button"> 9</button>
              <button class="btn btn-primary mr-2 my-2" type="button"> 10</button>
              <br>
              <button class="btn btn-primary mr-2 my-2" type="button">11</button>
              <button class="btn btn-primary mr-2 my-2" type="button">12</button>
              <button class="btn btn-primary mr-2 my-2" type="button">13</button>
              <button class="btn btn-primary mr-2 my-2" type="button">14</button>
              <button class="btn btn-primary mr-2 my-2" type="button">15</button> 
            </div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Tempat Duduk Halaman</h6>
            </div>
            <div class="card-body">
              <button class="btn btn-primary mr-2 my-2" value="16" type="button">16</button>
              <button class="btn btn-primary mr-2 my-2" type="button">17</button>
              <button class="btn btn-primary mr-2 my-2" type="button">18</button>
              <button class="btn btn-primary mr-2 my-2" type="button">19</button>
              <button class="btn btn-primary mr-2 my-2" type="button">20</button>
              <br>
              <button class="btn btn-primary mr-2 my-2" type="button">21</button>
              <button class="btn btn-primary mr-2 my-2" type="button">22</button>
              <button class="btn btn-primary mr-2 my-2" type="button">23</button>
              <button class="btn btn-primary mr-2 my-2" type="button">24</button>
              <button class="btn btn-primary mr-2 my-2" type="button">25</button>
              <br>
              <button class="btn btn-primary mr-2 my-2" type="button">11</button>
              <button class="btn btn-primary mr-2 my-2" type="button">12</button>
              <button class="btn btn-primary mr-2 my-2" type="button">13</button>
              <button class="btn btn-primary mr-2 my-2" type="button">14</button>
              <button class="btn btn-primary mr-2 my-2" type="button">15</button>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
      <footer-component></footer-component>
    </div>
  </div>
</template>
