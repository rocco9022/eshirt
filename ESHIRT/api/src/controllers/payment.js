const mercadopago= require('mercadopago')
const {ACCESS_TOKEN, PUBLIC_KEY}= process.env
const axios= require('axios');
const { getReviews } = require('./review');
const { getMaxListeners, put } = require('../app');

async function createPayment(req, res){
    
    
                    //HARDCODE FOR TESTING
    /* let order= {
        items: [
            {
                title: 'Agus',
                quantity: 3,
                size: 'L',
                unit_price: 100
            }
        ],
        back_urls: {
			"success": "http://localhost:3001/payment/feedback",
			"failure": "http://localhost:3001/payment/feedback",
			"pending": "http://localhost:3001/payment/feedback"
		},
        payer: {
            email: 'aagenesds1740@gmail.com'
        },
		auto_return: 'approved',
    } */
    try {
    let order= req.body
    console.log(order)
    let response= await mercadopago.preferences.create(order)
    console.log(response)
    
    res.send(response)
    }
    catch(error){}
}

async function getPayment(req, res){
    let {payment_id, status, payment_type}= req.query
    let data= {
        payment_id,
        status,
        payment_type
    }
    return res.status(200)
}

async function postPayment(req, res){
    let {payment_id, status, payment_type}= req.query
    let userId= req.params.id
    let response= await axios({
        method: 'put',
        url: `http://localhost:3001/order/status/${userId}`,
        data: {
            status,
            payment_type,
            payment_id
        }
        
    })
    res.send(response)
}




module.exports={
    createPayment,
    getPayment,
    postPayment
}