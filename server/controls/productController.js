import Order from '../models/Order.js'

class OrderController {
    async createProduct (req, res) {
        try {
            const product = req.body

            const commiss = product.price / 100 * 20

            const order = new Order({
                productName: product.productName,
                price: product.price,
                commission: commiss,
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
            const _id = req.body._id
            
            if (!_id) return res.status(400).json('Такой записи не существет')

            const removedOrder = await Order.findByIdAndRemove(_id)

            const refreshOrders = await Order.find()

            res.json(refreshOrders)

        } catch (error) {
            
        }
    }
}

export default new OrderController()