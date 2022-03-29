<script>
export default {
  props:{
    products: Array
  },
  data: () => ({
  headers: [
          { text: 'Фото', value: 'image' },
          { text: 'Артикул', value: 'articul', align: 'start', sortable: false, },
          { text: 'Продукт', value: 'productName' },
          { text: 'Ставка', value: 'price' },
          { text: 'Фамилия', value: 'surName' },
          { text: 'Имя', value: 'firstName' },
          { text: 'Отчество', value: 'patronymic' },
          { text: 'Время', value: 'rebuyDate' },
          { text: 'Серия паспорта', value: 'series' },
          { text: 'Номер паспорта', value: 'number' },
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
  mounted(){
    console.log(this.products)
  }
};
</script>

<template>
 <v-data-table
    :headers="headers"
    :items="products"
  >
    <!-- <template v-slot:item="{ item }">
      <v-chip
        :color="getColor(item.price)"
      >
        {{ item.price }}
      </v-chip>
    </template> -->
  </v-data-table>
</template>

<style lang="scss">
	.v-data-table {
		padding: 30px;
		box-shadow: 0px 0px 30px -20px rgb(149 157 189);
		border-radius: 15px;
	}
</style>
