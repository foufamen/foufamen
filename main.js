// Gestion des produits
const productList = document.querySelector(".product-list");

// Fonction pour afficher les produits
function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Prix : ${product.price} €</p>
      <button class="add-to-cart" data-product-id="${product.id}">Ajouter au panier</button>
    `;
    productList.appendChild(productElement);
  });

  // Ajout des écouteurs d'événements pour les boutons "Ajouter au panier"
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);
  });
}

// Fonction pour ajouter un produit au panier
function addToCart(event) {
  const productId = event.target.dataset.productId;
  // Logique pour ajouter le produit au panier
  console.log(`Ajout du produit ${productId} au panier`);
}

// Fonction pour filtrer les produits
function filterProducts(category) {
  // Logique pour filtrer les produits par catégorie
  console.log(`Filtrage des produits par catégorie : ${category}`);
}

// Exemple d'utilisation
const products = [
  {
    id: 1,
    name: "Produit 1",
    description: "Description du produit 1",
    price: 19.99,
    image: "" // Laissez ce champ vide pour insérer vos propres images
  },
  {
    id: 2,
    name: "Produit 2",
    description: "Description du produit 2",
    price: 24.99,
    image: "" // Laissez ce champ vide pour insérer vos propres images
  },
  {
    id: 3,
    name: "Produit 3",
    description: "Description du produit 3",
    price: 14.99,
    image: "" // Laissez ce champ vide pour insérer vos propres images
  }
];

displayProducts(products);