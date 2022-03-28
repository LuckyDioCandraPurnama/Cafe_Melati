<template>
  <!-- Topbar -->
  <nav
    class="
      navbar navbar-expand navbar-light
      bg-white
      topbar
      mb-4
      static-top
      shadow
    "
  >
    <h3 class="font-weight-bold text-primary">Cafe Melati</h3>

    <!-- Sidebar Toggle (Topbar) -->
    <!-- <span id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3">
    </span> -->
    <!-- <h3 class="d-md-none font-weight-bold text-primary">Cafe Melati</h3> -->
    <!-- <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button> -->

    <!-- Topbar Search -->

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <li class="nav-item dropdown no-arrow d-sm-none">
        <!-- Dropdown - Messages -->
        <div
          class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          aria-labelledby="searchDropdown"
        >
          <form class="form-inline mr-auto w-100 navbar-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link">
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ nama_outlet }}</span></a>
      </li>
      <div class="topbar-divider d-none d-sm-block"></div>
      <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link">
          <span v-if="role =='admin'" class="mr-2 d-none d-lg-inline text-gray-600 small "
            >Admin</span>
          <span v-if="role =='kasir'" class="mr-2 d-none d-lg-inline text-gray-600 small "
            >Kasir</span>
          <span v-if="role =='owner'" class="mr-2 d-none d-lg-inline text-gray-600 small "
            >Owner</span>
        </a>
      </li>
      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-gray-600 small "
            >{{akun}}</span
          >
          <img
            class="img-profile rounded-circle"
            src="@/assets/kopi.jpg"
          />
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a class="dropdown-item"  @click="logout">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
          <!-- <div class="dropdown-divider"></div> -->
          <!-- <router-link to="/login"> -->
            <!-- <a class="dropdown-item"
            >
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" @click="logout"></i>
              Logout
            </a> -->
          <!-- </router-link> -->
          <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-info btn-icon-split " @click="logout"> 
            
            <span class="icon text-white-50">
              
                    <i class="fas fa-sign-out-alt"></i>
                  </span>
                  <span class="text">Logout</span></button> -->
        </div>
      </li>
    </ul>
  </nav>
  <!-- End of Topbar -->
</template>
