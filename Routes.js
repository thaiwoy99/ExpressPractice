const express = require('express')
const app = express()
const port = 3000

/*app.get('/products',(req,res)=>{

  //  const products= [
        {id:1,
            class:200
        },
        {id:2,
            class:300
        },
        {id:3,
            class:400
        }
    ]
    res.json(products)
})
*/

app.get('/products/:id',(req,res)=>{
    const ProductID =parseInt(req.params.id)
    const products= [
        {id:1,
            class:200
        },
        {id:2,
            class:300
        },
        {id:3,
            class:400
        }

    ]
    const singleProduct =products.find(product=>product.id==ProductID)
    console.log('reqParams', req.params)
    res.json(singleProduct)

})
app.listen(port,()=>{
    console.log(`i am listening on port  ${port}`)
})
