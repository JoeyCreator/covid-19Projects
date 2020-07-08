<template>
  <main>
    <div class="alert alert-dismissible alert-danger">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <i class="fas fa-exclamation-triangle">Attention</i>
      <a href="https://www.canada.ca/en/health-canada.html" class="alert-link">COVID-19</a> For the most up to date information regarding COVID-19 in Canada, please consult Canada Deptartment of Health. This site should not be used for life saving information - instead, rather, a source for numbers and statistics.
    </div>
  </main>
</template>

<script>
export default {
  name: "SiteAlerts"
};
</script>

<style scoped>
main {
  padding: 90px;
}
</style>