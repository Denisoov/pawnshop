<script>
export default {
  data: () => ({
	products: [
		  {
        first_name: 'Богдан',
        surname: 'Балбесов',
        patronymic: 'Петров',
        passport: {
          series: 3040,
          number: 555333,
        },
        product_name: 'Iphone 7',
        price: 4000,
        company: false,
        rebuy_date: '30.04.2022',
        image: null,
        articul: 10000,
		  },
      		  {
        first_name: 'Богдан',
        surname: 'Балбесов',
        patronymic: 'Петров',
        passport: {
          series: 3040,
          number: 555333,
        },
        product_name: 'Iphone 7',
        price: 4000,
        company: false,
        rebuy_date: '30.04.2022',
        image: null,
        articul: 10000,
		  }
	],
  headers: [
          { text: 'Артикул', value: 'articul', align: 'start', sortable: false, },
          { text: 'Продукт', value: 'product_name' },
          { text: 'Ставка', value: 'price' },
          { text: 'Фамилия', value: 'surname' },
          { text: 'Время', value: 'rebuy_date' },
          { text: 'Номер паспорта', value: 'passport.number' },
        ],
  }),
  computed: {
  },
  methods: {
    getColor (price) {
        if (price > 400) return 'red'
        else return 'green'
      },
  },
};
</script>

<template>
 <v-data-table
    :headers="headers"
    :items="products"
  >
    <template v-slot:item="{ item }">
      <v-chip
        :color="getColor(item.price)"
      >
        {{ item.price }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<style lang="scss">
	.v-data-table {
		padding: 30px;
		box-shadow: 0px 0px 30px -20px rgb(149 157 189);
		border-radius: 15px;
	}
</style>
