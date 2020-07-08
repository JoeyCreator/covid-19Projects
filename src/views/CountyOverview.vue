<template>
  <div>
    <Navbar></Navbar>
    <h1>CountyOverview</h1>
    <SiteAlerts></SiteAlerts>
    <iframe
      src="https://covid19canada.maps.arcgis.com/apps/opsdashboard/index.html#/2772c0489f43411ca9493fc5888fbe67"
      height="550"
      width="100%"
    ></iframe>
    <FooterPageMedia></FooterPageMedia>
  </div>
</template>

<script>
import SiteAlerts from "../components/SiteAlerts.vue";
import Navbar from "../components/Navbar.vue";
import FooterPageMedia from "../components/FooterPageMedia.vue";
export default {
  name: "CountyOverview",
  components: {
    SiteAlerts,
    Navbar,
    FooterPageMedia
  }
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>