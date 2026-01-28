import axios from "axios";
import { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";

const endpoint = "https://fakestoreapi.com//products";


function ProductsList() {

    // Variabile di stato per lista dei prodotti
    const [products, setProducts] = useState([]);

    // Funzione che esegue la chiamata Ajax verso endpoint API
    function fetchProducts() {
        axios.get(endpoint)
            .then(response => setProducts(response.data))
            .catch(error => console.log("Errore nella richiesta"));
    }

    // useEffect per eseguire la chiamata solo al montaggio del componente
    useEffect(fetchProducts, []);


    return (
        <div className="products-list container">
            <h2>I nostri prodotti</h2>
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