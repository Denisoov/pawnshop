import Order from '../models/Order.js'

class OrderController {
    async createProduct (req, res) {
        try {
            const product = req.body

            console.log(product)

            const order = new Order({
                productName: product.productName,
                price: product.price,
                articul: product.articul,
                surName: product.surName,
                firstName: product.firstName,
                patronymic: product.patronymic,
                series: product.series,
                number: product.number,
                company: product.company,
                rebuyDate: product.rebuyDate,
                image: req.file ? req.file.path : ''
            })

            await order.save(order)

            res.json(order)

        } catch (error) {

        }
    }
    async getAllOrders (req, res) {
        try {
            const orders = await Order.find()

            res.json(orders)
        } catch (error) {
            
        }
    }
    async removeProduct (req, res) {
        try {
            
        } catch (error) {
            
        }
    }
}

export default new OrderController()