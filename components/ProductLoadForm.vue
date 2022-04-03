<template>
  <div class="form-wrapper">
    <ValidationObserver tag="form">
      <form class="form form-wrapper__card">
        <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          label="Фото товара"
          v-model="product.image"
        ></v-file-input>

        <div class="form-wrapper__nameSurname">
          <validation-provider
            v-slot="{ errors }"
            mode="eager"
            :rules="'required|min:2'"
            :placeholder="'Фамилия владельца'"
          >
            <v-text-field
              v-model="product.surName"
              :error-messages="errors"
              autocomplete="off"
              placeholder="Фамилия"
              type="text"
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            mode="eager"
            :rules="'required|min:2'"
            :placeholder="'Имя'"
          >
            <v-text-field
              v-model="product.firstName"
              :error-messages="errors"
              autocomplete="off"
              placeholder="Имя"
              type="text"
            ></v-text-field>
          </validation-provider>
        </div>
        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:5'"
          :placeholder="'Отчество'"
        >
          <v-text-field
            v-model="product.patronymic"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Отчество"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:4|max:4'"
          :placeholder="'Серия паспорта'"
        >
          <v-text-field
            v-model="product.series"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Серия паспорта"
            type="text"
            v-mask="'####'"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:6|max:6'"
          :placeholder="'Номер паспорта'"
        >
          <v-text-field
            v-model="product.number"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Номер паспрота"
            type="text"
            v-mask="'######'"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required'"
          :placeholder="'Название'"
        >
          <v-text-field
            v-model="product.productName"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Название"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|max:6'"
          :placeholder="'Оценочкая стоимость'"
        >
          <v-text-field
            v-model="product.price"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Оценочкая стоимость"
            type="text"
            v-mask="'######'"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:5'"
          :placeholder="'Дата'"
        >
          <v-text-field
            v-model="product.rebuyDate"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Дата"
            type="text"
          ></v-text-field>
        </validation-provider>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { min, max, email, required } from "@/plugins/vee-validate";

extend("min", min);
extend("max", max);
extend("email", email);
extend("required", required);

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    product: {
      firstName: null,
      surName: null,
      patronymic: null,
      series: null,
      number: null,
      productName: null,
      price: null,
      company: false,
      rebuyDate: null,
      image: null,
    },
  }),
  methods: {
    async sendProductDate(product) {
      let articul = await this.getArticul();

      let data = new FormData();
      data.append("firstName", product.firstName);
      data.append("surName", product.surName);
      data.append("patronymic", product.patronymic);
      data.append("series", product.series);
      data.append("number", product.number);
      data.append("productName", product.productName);
      data.append("price", product.price);
      data.append("company", product.company);
      data.append("rebuyDate", product.rebuyDate);
      data.append("articul", articul);
      data.append("image", product.image, `${product.image}`);

      this.$store.dispatch("order/sendProduct", data);
    },
    async getArticul() {
      const productList = await this.$store.dispatch("order/getProductList");
      let articul = productList[productList.length - 1].articul;
      return articul + 1;
    },
  },
};
</script>

<style lang="scss">
.form-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form-wrapper__card {
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 0px 30px -20px rgb(149 157 189);
}
.form-wrapper__nameSurname {
  display: flex;
}
.form-wrapper__nameSurname .v-input {
  max-width: 50%;
  width: 200px !important;
}
.form-wrapper__nameSurname .v-input__control {
  max-width: 50%;
}
.v-messages__message {
  color: #ff2525;
}
</style>