

module.exports = {
    createProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, price, image} = req.body
        
        dbInstance.create_product([image, name, price])
      .then( (product) => res.status(200).send(product) )
      .catch( () => res.status(500).send() );

    },

    getInventory: (req,res) => {
        const dbInstance = req.app.get('db')
        
        dbInstance.get_inventory()
        .then( products => res.status(200).send( products ) )
        .catch( () => res.status(500).send() );
    },

    update: (req,res) => {

    },

    delete: (req,res) => {

    }

}