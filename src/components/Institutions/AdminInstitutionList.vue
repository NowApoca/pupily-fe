<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">All Institutions</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <InstitutionsList :list="list" />
    </div>
  </div>
</template>
<style scoped>
  .block-text {
    margin-top: 50px;
  }
</style>

<script>
  import InstitutionsList from './InstitutionsList.vue';
  import { ref, onMounted } from 'vue'
  import institutionservice from '../../services/apiInstitution.js'

  export default {
    name: 'home',
    components: {
      InstitutionsList,
    },
    setup() {
      const list = ref([]);

      onMounted(async () => {
        const res = await institutionservice.getAll();
        list.value = res.data;
        console.log(res);
      });

      return {
        list,
      };
    }
  };

</script>