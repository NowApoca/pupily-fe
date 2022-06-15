<template>
  <div class="about">
    <div class="container">
      <InstitutionSingleCard :institution="institution" />
    </div>
  </div>
</template>
<style scoped>
  .block-text {
    margin-top: 50px;
  }
</style>

<script>
  import InstitutionSingleCard from './InstitutionSingleCard.vue';
  import { ref, onMounted } from 'vue'
  import institutionService from '../../services/apiInstitution'

  export default {
    name: 'home',
    components: {
      InstitutionSingleCard,
    },
    setup() {
      const institution = ref({});

      onMounted(async () => {
        const res = await institutionService.getInstitutionById(10);
        console.log(res.data, 'RES DATA')
        institution.value = res.data;
      });

      return {
        institution,
      };
    }
  };

</script>
