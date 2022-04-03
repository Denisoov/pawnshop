<script>
export default {
  props:{
    products: Array
  },
  data: () => ({
  headers: [
          { text: 'Фото', value: 'image' },
          { text: 'Артикул', value: 'articul', align: 'start' },
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
    <template v-slot:item.price="{ item }">
      <div>
        {{ item.price }}₽
      </div>
    </template>
    <template v-slot:item.image="{ item }">
      <div
      >
        <img class="image" :src="`http://localhost:5000/${item.image}`" alt="">
      </div>
    </template>
  </v-data-table>
</template>

<style lang="scss">
	.v-data-table {
		padding: 30px;
		box-shadow: 0px 0px 30px -20px rgb(149 157 189);
		border-radius: 15px;
	}
  .image{
    width: 64px;
    height: 64px;
  }
  .text-start{
    text-align: left;
  }
</style>
