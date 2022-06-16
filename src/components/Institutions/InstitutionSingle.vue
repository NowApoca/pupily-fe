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
  import { useRoute } from "vue-router"

  export default {
    name: 'home',
    components: {
      InstitutionSingleCard,
    },
    setup() {
      const institution = ref({});
      const router = useRoute()

      onMounted(async () => {
        const res = await institutionService.getInstitutionById(router.params.id);
        institution.value = res.data;
      });

      return {
        institution,
      };
    }
  };

</script>
