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
                          >{{unggulanmakan.name}}
                            
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                          Rp{{unggulanmakan.price}}
                            
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
                            {{unggulanminum.name}}
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            Rp{{unggulanminum.price}}
                          </div>
                        </div>
                        <div class="col-auto">
                          <img
                            class="img-profile rounded-circle"
                            src="@/assets/jeruk.jpg"
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
                          >{{unggulansnack.name}}
                            
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            Rp{{unggulansnack.price}}
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
              <div class="row">
                <!-- <div class="col-md-4 table-responsive">
                <label class="font-weight-bold">Makanan</label>
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NAMA</th>
                      <th>HARGA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nasi Goreng</td>
                      <td>Rp10000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Nasi Goreng</td>
                      <td>Rp10000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Nasi Goreng</td>
                      <td>Rp10000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Nasi Goreng</td>
                      <td>Rp10000</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Nasi Goreng</td>
                      <td>Rp10000</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div class="col-md-4 table-responsive">
                <label class="font-weight-bold">Minuman</label>
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NAMA</th>
                      <th>HARGA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Chocolatos</td>
                      <td>Rp8000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Chocolatos</td>
                      <td>Rp8000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Chocolatos</td>
                      <td>Rp8000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Chocolatos</td>
                      <td>Rp8000</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Chocolatos</td>
                      <td>Rp8000</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div class="col-md-4 table-responsive">
                <label class="font-weight-bold">Snack</label>
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NAMA</th>
                      <th>HARGA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Chitato</td>
                      <td>Rp10000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Chitato</td>
                      <td>Rp10000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Chitato</td>
                      <td>Rp10000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Chitato</td>
                      <td>Rp10000</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Chitato</td>
                      <td>Rp10000</td>
                    </tr>
                  </tbody>
                </table>
                </div> -->
                <div class="col-md-4 table-responsive">
                <label class="font-weight-bold">Makanan</label>
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NAMA</th>
                      <th>HARGA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(s,index) in makanan" :key="index">
                      <td>{{index +1}}</td>
                      <td>{{s.name}}</td>
                      <td>{{s.price}}</td>
                    </tr>
                    
                  </tbody>
                </table>
                </div>
                <div class="col-md-4 table-responsive">
                <label class="font-weight-bold">Minuman</label>
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NAMA</th>
                      <th>HARGA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(s,index) in minuman" :key="index">
                      <td>{{index +1}}</td>
                      <td>{{s.name}}</td>
                      <td>{{s.price}}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div class="col-md-4 table-responsive">
                <label class="font-weight-bold">Snack</label>
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NAMA</th>
                      <th>HARGA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(s,index) in snack" :key="index">
                      <td>{{index +1}}</td>
                      <td>{{s.name}}</td>
                      <td>{{s.price}}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Keranjang -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Keranjang</h6>
            </div>
            <!-- <form @submit.prevent="tambah"> -->
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-4">
                  <label>Makanan</label>
                  <select class="form-control" v-model="detail.id_menu">
                     <option :value="null">-</option>
                     <option v-for="(m,index) in makanan" :key="index" :value="m.id_menu">{{m.name}}</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="">Jumlah</label>
                <input type="text" class="form-control" v-model="detail.quantity" >
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label>Minuman</label>
                  <select class="form-control">
                     <option :value="null">-</option>
                     <option v-for="(m,index) in minuman" :key="index" :value="m.id_menu">{{m.name}}</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="">Jumlah</label>
                <input type="text" class="form-control" v-model="detail.quantity">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label>Snack</label>
                  <select class="form-control">
                     <option :value="null">-</option>
                     <option v-for="(m,index) in snack" :key="index" :value="m.id_menu">{{m.name}}</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="">Jumlah</label>
                <input type="text" class="form-control" v-model="detail.quantity">
                </div>
              </div>
                <div class="">
                  <button type="submit" class="btn btn-sm btn-primary" @click="tambah">Simpan</button>
                </div>
                <br>
              <div class="row">
                <table class="table" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Nama</th>
                      <th>Harga</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(m,index) in keranjang" :key="index">
                      <td>{{m.name}}</td>
                      <td>{{m.price}}</td>
                      <td>{{m.quantity}}</td>
                      <!-- <td></td> -->
                    </tr>
                  </tbody>
                </table>
                <div class="col-md-4 text-center"></div>

                <div class="col-md-4"></div>
                <!-- <button type="submit" class="btn btn-success">
                  Bayar
                </button> -->
                
              </div>      
            </div>
            <!-- </form> -->
          </div>
          <!-- METODE PEMBAYARAN -->
          <form @submit.prevent="bayar">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Metode Pembayaran</h6>
            </div>
            <div class="card-body">
              <h5 class="font-weight-bold text-primary">E-Money dan Kartu Kredit</h5>
                <div class="row">
                  <div class="col-md-4 form-group">
                    <select class="form-control">
                        <option value="" selected hidden disabled>Pilih Jenis Pembayaran</option>
                        <option >BCA</option>
                        <option >BNI</option>
                        <option >Mandiri</option>
                        <option >GoPay</option>
                        <option >OVO</option>  
                    </select>
                    <!-- <br /> -->
                  </div>
                </div>
                  <h5 class="font-weight-bold text-primary">Tunai</h5>
                <div class="row">
                  <div class="col-md-4">
                    <h6>Silahkan Datang Ke Kasir</h6>
                  </div>
                <!-- <div class="">
                </div> -->
                </div>
              </div>
              <div class="card-footer">
                <button class="btn btn-success" type="submit">
                  Bayar
                </button>
                  <!-- <router-link to="/transaksi/detail" class="btn btn-success">
                    Bayar
                  </router-link> -->
              </div>
          </div>
          </form>
        </div>
      </div>
      <!-- </div> -->
      <footer-component></footer-component>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data:{},
      menu: {},
      total: "",

      keranjang: "",

      makanan: {},
      minuman: {},
      snack: {},

      unggulanmakan: {},
      unggulanminum: {},
      unggulansnack: {},

      detail: {},
    };
  },
  created() {
    this.axios.get("http://localhost/cafe_melati/public/api/makanan").then((res) => {
      this.makanan = res.data;
    })
    this.axios.get("http://localhost/cafe_melati/public/api/minuman").then((res) => {
      this.minuman = res.data;
    })
    this.axios.get("http://localhost/cafe_melati/public/api/snack").then((res) => {
      this.snack = res.data;
    })
    //MENU dan UNGGULAN
    this.axios.get("http://localhost/cafe_melati/public/api/unggulan/makan").then((res) => {
      this.unggulanmakan = res.data;
    })
    this.axios.get("http://localhost/cafe_melati/public/api/unggulan/minum").then((res) => {
      this.unggulanminum = res.data;
    })
    this.axios.get("http://localhost/cafe_melati/public/api/unggulan/snack").then((res) => {
      this.unggulansnack = res.data;
    })

  },
  methods: {
    tambah() {
      this.axios
        .get(
          "http://localhost/cafe_melati/public/api/keranjang",
          this.keranjang,  
        )
        .then(res => {
          this.keranjang = res.data
        })
         .catch(err => console.log(err))
    },
    bayar() {
      this.axios
        .post(
          "http://localhost/cafe_melati/public/api/detail_transaction",
          this.detail,  
        )
        .then(() => {
          this.$router.push({
            name: "transaksi_detail",       
          });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>