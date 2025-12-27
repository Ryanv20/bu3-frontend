import React from "react";

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
};

const demoProduct: Product = {
    id: "1",
    name: "Demo Product",
    description: "This is a demo product for display purposes.",
    price: 49.99,
    imageUrl: "https://via.placeholder.com/150",
};

const ProductPage: React.FC<{ product?: Product }> = ({ product = demoProduct }) => (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
        <h2>{product.name}</h2>
        {product.imageUrl && (
            <img src={product.imageUrl} alt={product.name} style={{ width: "100%", borderRadius: 4, marginBottom: 16 }} />
        )}
        <p>{product.description}</p>
        <p>
            <strong>Price:</strong> ${product.price}
        </p>
        <button style={{ marginTop: 16, padding: "8px 16px" }}>Add to Cart</button>
    </div>
);

export default ProductPage;