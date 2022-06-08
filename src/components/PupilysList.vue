<template>
  <div class="events container">
    <h2 class="subtitle is-3">Check out our newcomers Pupilys</h2>
    <div class="columns is-multiline">
      <div class="columns is-multiline">
      <div v-for="pupily in pupilys" :pupily="pupily" :key="pupily.id" class="column is-one-quarter">
        <router-link :to="'/pupily/' + pupily.id">
          <PupilyCard :pupily="pupily" />
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import PupilyCard from './PupilyCard.vue';
  export default {
    name: 'PupilysList',
    components: {
      PupilyCard,
    },
    
    data() {
      return {
        puiply: {},
        pupilys: [
          {
            id: 1,
            name: 'Jack Studily',
            category: 'Fundraising',
            description:
              'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
            featuredImage: 'https://placekitten.com/500/500',
            images: [
              'https://placekitten.com/500/500',
              'https://placekitten.com/500/500',
              'https://placekitten.com/500/500',
            ],
            location: '1234 Fancy Ave',
            date: '12-25-2022',
            time: '11:30',
          },
          {
            id: 2,
            name: 'Chris Smart',
            category: 'Adoptions',
            description:
              'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '1234 Dog Alley',
            date: '11-21-2022',
            time: '12:00',
          },
        ],
      };
    },
  };
</script>
<style scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>