<template>
  <div>
    <div class="alert alert-dismissible alert-info">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>COMING SOON!</strong>
      <a href="#" class="alert-link"></a> the new COVID-19 Data Tracker
    </div>
    <div class="lg:max-w-5xl mx-auto md:px-4 p-4">
      <h1 class="text-4xl font-bold">
        <i class="fas fa-microscope"></i> Canada COVID-19 Health
      </h1>
      <h4 class="text-xs">
        Source:
        <a
          class="border-b border-dotted text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800"
          target="_blank"
          href="https://www.canada.ca/fr/sante-canada.html"
        >Canada Deptartment of Health</a> &middot; Last updated 7/08/2020 4:00 p.m.
      </h4>
    </div>
    <SiteAlerts></SiteAlerts>
    <covid19></covid19>
    <CovidSource></CovidSource>
    <iframe
      src="https://experience.arcgis.com/experience/4ab8757241cc4d3fab81c8f86a501ce9"
      height="550"
      width="90%"
    ></iframe>
    <VideoOnDemand></VideoOnDemand>
    <EmailSupport></EmailSupport>
    <Welcome></Welcome>
    <FooterPageMedia></FooterPageMedia>
  </div>
</template>

<script>
import FooterPageMedia from "../components/FooterPageMedia";
import SiteAlerts from "../components/SiteAlerts.vue";
import EmailSupport from "../components/EmailSupport.vue";
import Welcome from "../views/Welcome.vue";
import covid19 from "../views/api/covid19.vue";
import CovidSource from "../covid-19-data/CovidSource.vue";
export default {
  name: "Home",
  components: {
    FooterPageMedia,
    SiteAlerts,
    EmailSupport,
    Welcome,
    CovidSource,
    covid19
  }
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>