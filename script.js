document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "O2 Essentials Kaos Oversize Hitam", price: "550.000", image: "images/kaos-oversize.webp" },
        { name: "Telepati.che Hoodie Boxy", price: "8.450.000", image: "images/hoodie-streetwear.webp" },
        { name: "Symetry Cargo Pants", price: "850.000", image: "images/celana-cargo.webp" },
        { name: "Von Dutch Varsity 1489 Black", price: "2.500.000", image: "images/jaket-varsity.webp" },
        { name: "Hamlin Maxton Topi Baseball", price: "2.600.000", image: "images/topi-baseball.webp" },
        { name: "Air Jordan 1 High Travis Scott Mocha", price: "28.500.000", image: "images/sneakers-high.webp" },
        { name: "Oak-ley Sunglass Encoder", price: "5.600.000", image: "images/kacamata-hitam.webp" },
        { name: "Seagull Goldstone Center Axis Tourbillon", price: "50.500.000", image: "images/jam-tangan-sport.webp" }
    ];

    const container = document.querySelector(".products .container");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">Rp ${product.price}</p>
            <a href="https://wa.me/6285965990223?text=Halo,%20saya%20ingin%20membeli%20${encodeURIComponent(product.name)}%20seharga%20Rp${product.price}" class="buy-btn">Beli via WhatsApp</a>
        `;
        container.appendChild(productDiv);
    });

    // Mode Gelap
    const themeToggle = document.getElementById("toggleTheme");
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
});
