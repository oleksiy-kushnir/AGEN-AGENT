console.clear

// Цей код виконається після повного завантаження DOM (HTML)
document.addEventListener("DOMContentLoaded", () => {
    // Необов'язковий, але корисний для перевірки, що DOM готовий
    console.log("DOM повністю завантажений");
});

// Цей код виконається, коли ВЕСЬ контент сторінки (включаючи картинки та CSS) завантажиться
window.addEventListener("load", () => {
    const loader = document.getElementById(".loader");
    const container = document.getElementById(".container");

    // Перевірка, чи існують елементи
    if (loader) {
        // Приховуємо завантажувач
        loader.style.display = "none";
    }

    if (container) {
        // Показуємо основний вміст
        container.style.display = "block";
    }
});