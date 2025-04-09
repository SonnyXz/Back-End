/order/

let orders = [];
app.post('/order/create' )

export const createOrder = (req , res) => {
    const {userId, food, price} = req.body;

    const dt = new Date();

    orders.map((user) => {
        if(user.id === userId){
            orders.push({
                orderId: uuidv4(),
                userId,
                food,
                price
            })
        }
    });
}