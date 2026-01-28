function ProductsCard({ product: { title, category, // Destrutturo le proprietà dell'oggetto product passato tramite props dal componente padre (ProductsList) 
    description, price }
}) {

    return (
        <div className="product-card">
            <p className="product-title">{title}</p>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>
            <p className="product-category">{category}</p>
        </div>
    )
}

export default ProductsCard