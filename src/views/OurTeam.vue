<template>
  <div>
    <Navbar></Navbar>
    <SiteAlerts></SiteAlerts>
    <iframe
      src="https://techwithjoey.com/"
      style="border:0px #ffffff hidden;"
      name="techwithjoey"
      scrolling="no"
      frameborder="1"
      marginheight="0px"
      marginwidth="0px"
      height="400px"
      width="600px"
      allowfullscreen
    ></iframe>
    <FooterPageMedia></FooterPageMedia>
  </div>
</template>

<script>
import SiteAlerts from "../components/SiteAlerts.vue";
import FooterPageMedia from "../components/FooterPageMedia.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "OurTeam",
  components: {
    SiteAlerts,
    FooterPageMedia,
    Navbar
  }
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>