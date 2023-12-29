const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51NNJp8CZMYzNjxDgzJhOxna0dXBlrrqyevOS4pDGGvNGTKiPZl4KQi7p6MiRq1f2UVQGOQqAfd2O2R3ySa05XquU00yNA0kswv'
)

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.post('/checkout', async (req, res) => {
  // post request to the checkout API route

  // items from OUR REQUEST ------------
  const items = req.body.items

  // convert to PROPER FORMAT STRIPE WANTS
  let lineItems = []
  items.forEach(item => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    })
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'https://soopergames27.com/success',
    cancel_url: 'https://soopergames27.com/cancel',
  })

  res.send(JSON.stringify({ url: session.url }))
})

app.listen(4000, () => console.log('Listening on 4000'))
