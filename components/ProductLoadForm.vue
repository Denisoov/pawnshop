<template>
    <div class="form-wrapper">
        <div class="form-wrapper__card">
            <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                label="Фото товара"
                v-model="product.image"
            ></v-file-input>
            <div class="form-wrapper__nameSurname">
                <v-text-field
                    label="Фамилия владельца"
                    v-model="product.surName"
                >
                </v-text-field>
                <v-text-field
                    label="Имя владельца"
                    v-model="product.firstName"
                >
                </v-text-field>
            </div>
            <v-text-field
                label="Отчество владельца"
                v-model="product.patronymic"
            >
            </v-text-field>
            <div class="form-wrapper__nameSurname">
                <v-text-field
                    label="Серия паспорта"
                    v-model="product.series"
                >
                </v-text-field>
                <v-text-field
                    label="Номер паспорта"
                    v-model="product.number"
                >
                </v-text-field>
            </div>
            <v-text-field
                label="Название"
                v-model="product.productName"
            >
            </v-text-field>
            <div class="form-wrapper__nameSurname">
                <v-text-field
                    label="Цена"
                    v-model="product.price"
                >
                </v-text-field>
                <v-text-field
                    label="Дата выкупа"
                    v-model="product.rebuyDate"
                >
                </v-text-field>
            </div>
            <v-btn @click="sendProductDate(product)">Отправить</v-btn>      
        </div>
    </div>
</template>

<script>
export default {
    data:() =>({
        product:{
            firstName: null,
            surName: null,
            patronymic: null,
            series: null, 
            number: null,
            productName: null,
            price: null,
            company: false,
            rebuyDate: null,
            image: null
        }
    }),
    methods:{
        async sendProductDate(product){
            let articul = await this.getArticul();

            let data = new FormData();
            data.append('firstName', product.firstName)
            data.append('surName', product.surName)
            data.append('patronymic', product.patronymic)
            data.append('series', product.series)
            data.append('number', product.number)
            data.append('productName', product.productName)
            data.append('price', product.price)
            data.append('company', product.company)
            data.append('rebuyDate', product.rebuyDate)
            data.append('articul', articul)
            data.append('image', product.image, `${product.image}`)

            this.$store.dispatch('order/sendProduct', data)
        },
        async getArticul(){
            const productList = await this.$store.dispatch("order/getProductList")
            let articul = productList[productList.length - 1].articul
            return articul + 1
        }
    }
}
</script>

<style scoped>
    .form-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .form-wrapper__card{
        background-color: white;
        border-radius: 10px;
        padding: 40px;
        box-shadow: 0px 0px 30px -20px rgb(149 157 189);
    }
    .form-wrapper__nameSurname{
        display: flex;
    }
    .form-wrapper__nameSurname .v-input{
        max-width: 50%;
        width: 200px !important;
    }
    .form-wrapper__nameSurname .v-input__control{
        max-width: 50%;
    }
</style>