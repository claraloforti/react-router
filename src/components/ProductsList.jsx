import ProductsCard from "./ProductsCard";


function ProductsList({ products }) { // Array dei prodotti passati dal padre (Products)


    return (
        <div className="products-list container">
            {products.map(product => (
                <div className="products-container">
                    <ProductsCard
                        key={product.id}
                        // Passo al componente figlio (ProductsCard) i dati del singolo prodotto tramite props
                        product={product}
                    />
                </div>
            ))}
        </div>
    )
}

export default ProductsList