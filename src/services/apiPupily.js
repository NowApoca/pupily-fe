import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getGestionVentas() {
        return apiClient.get('/api/getlista')
    },
    setGetionVentas(gestionVenta) {
        return apiClient.post('/api/setgetionventa', gestionVenta)
    },
    deleteGestionVentas(id) {
        return apiClient.delete('/api/deletegetionventa/' + id)
    },
    getAll(){
        return [
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
          ];
    },
}

