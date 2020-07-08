<template>
  <!-- Footer -->
  <mdb-footer color="stylish-color-dark" class="font-small pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="text-center text-md-left mt-3 pb-3">
        <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">COVID-19 CANADA / HEALTH</h6>
          <p>The COVID-19 CANADA Project collects and publishes the most complete testing data available for Canada and territories.</p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none">
        <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Our Developer Team</h6>
          <p>
            <a href="#!">Contact</a>
          </p>
          <p>
            <a href="#!">Accessibility</a>
          </p>
          <p>
            <a href="#!">License</a>
          </p>
          <p>
            <a href="https://github.com/joeycreator">Github</a>
          </p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none">
        <mdb-col md="3" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Information and services</h6>
          <p>
            <a href="#!">Terms And Conditions</a>
          </p>
          <p>
            <a href="#!">Become an MediaPartner</a>
          </p>
          <p>
            <a href="#!">Privacy Policy</a>
          </p>
          <p>
            <a href="#!">Newsroom and Expert FAQ</a>
          </p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none">
        <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">How to reach us</h6>
          <p>
            <i class="fas fa-home mr-3"></i> Montreal, QC
          </p>
          <p>
            <i class="fas fa-envelope mr-3"></i> team1@engineer.com
          </p>
          <p>
            <i class="fas fa-print mr-3"></i> 514-612-7473 (Text Only)
          </p>
        </mdb-col>
      </mdb-row>
      <hr>
      <mdb-row class="d-flex align-items-center">
        <mdb-col md="8" lg="8">
          <p class="text-center text-md-left grey-text">
            &copy; 2020 Copyright:
            <a href="https://covid-19.netlify.app">COVID-19 CANADA / HEALTH</a>
          </p>
        </mdb-col>
        <mdb-col md="4" lg="4" class="ml-lg-0">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1">
                  <i class="fab fa-google-plus"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPageMedia",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style>
nav a {
  text-decoration: none;
}
</style>