import Order from '../models/Order.js'
import Statistic from '../models/Statistic.js'



class StatisticController {
    async getStatistic (req, res) {
        try {
            const orders = await Order.aggregate(
                [
                    { $group: 
                        { 
                            _id : '$_id',
                            price : { $sum : "$price" },
                            commission: { $sum: "$commission" }
                        } 
                    }
                ]
            )
            if (!orders) return res.status(400).json("Попрбуйте позже")

            const result = await Object.values(orders).reduce(async (a, b) => await a + b.price, 0)

            res.json({ costAmount: result })
        } catch (error) {
            res.status(500).json("Попробуйте позже")
        }
    }
}

export default new StatisticController()