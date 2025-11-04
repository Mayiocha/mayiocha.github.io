window.onload = () =>{
    let imgGaleria = document.querySelector("#main-product-img")
    let imgs= document.querySelectorAll(".thumb")
    for(let i=0;i<imgs.length;i++){
        imgs[i].addEventListener('click', (evt)=>{
            console.log(evt.target)
            imgGaleria.src = evt.target.src.replace("thumbs/", "")
            imgs.forEach((item) => {
                item.classList.remove("active")
            });
            evt.target.classList.add("active")
        });
    }
    const qtyInput = document.querySelector("#quantity");
    const btnInc = document.querySelector("#increase");
    const btnDec = document.querySelector("#decrease");
    const sizeBtns = document.querySelectorAll(".size-btn");
    const priceBox = document.querySelector(".price");
    const priceCurrent = priceBox?.querySelector(".current");
    const priceOld = priceBox?.querySelector(".old");
    const priceDiscount = priceBox?.querySelector(".discount");

    let totalLine = priceBox?.querySelector(".total-line");
    if (!totalLine && priceBox) {
        totalLine = document.createElement("div");
        totalLine.className = "total-line";
        totalLine.style.marginTop = "8px";
        totalLine.style.fontWeight = "600";
        priceBox.appendChild(totalLine);
    }

    const PRICES = { "50ml": 15.0, "100ml": 16.0 };
    const getActiveSize = () => {
        const active = document.querySelector(".size-btn.active");
        return active ? active.textContent.trim() : "100ml";
    };
    const getUnitPrice = () => PRICES[getActiveSize()] ?? 16.0;
    const clampQty = (q) => Math.max(1, Math.min(15, q));
    const getQty = () => {
        const n = Number(qtyInput?.value);
        return Number.isFinite(n) ? n : 1;
    };
    const money = (n) => `$${(Math.round(n * 100) / 100).toFixed(2)}`;
    const getQtyDiscount = (qty) => (qty > 10 ? 0.2 : qty > 5 ? 0.1 : 0);
    const updateTotals = () => {
        if (!qtyInput || !priceCurrent || !totalLine) return;
        const qty = clampQty(getQty());
        const unit = getUnitPrice();
        const disc = getQtyDiscount(qty);
        priceCurrent.textContent = money(unit);
        if (priceDiscount) {
            priceDiscount.textContent =
                disc === 0.2 ? "20% OFF" : disc === 0.1 ? "10% OFF" : "0% OFF";
        }
        const subtotal = unit * qty;
        const total = subtotal * (1 - disc);
        totalLine.textContent = `Total (${qty} × ${money(unit)}): ${money(total)}`;
        if (priceOld && !priceOld.textContent?.trim()) priceOld.textContent = "$20.00";
    };
    const setQty = (q) => {
        if (!qtyInput) return;
        qtyInput.value = clampQty(q);
        updateTotals();
    };

    btnInc?.addEventListener("click", () => setQty(getQty() + 1));
    btnDec?.addEventListener("click", () => setQty(getQty() - 1));

    qtyInput?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            let n = Number(qtyInput.value);
            if (!Number.isFinite(n)) n = 1;
            setQty(n);
        }
    });

    qtyInput?.addEventListener("blur", () => setQty(getQty()));
    sizeBtns.forEach((b) => {
        b.addEventListener("click", (e) => {
            sizeBtns.forEach((btn) => btn.classList.remove("active"));
            e.currentTarget.classList.add("active");
            updateTotals();
        });
    });
    const reviewsContainer = document.querySelector("#reviews-container");
    if (reviewsContainer) {
        const form = document.createElement("form");
        form.id = "review-form";
        form.classList.add("review-form");
        form.innerHTML = `
      <input type="text" id="rev-name" placeholder="Tu nombre" required />
      <textarea id="rev-text" placeholder="Escribe tu opinión..." required></textarea>
      <label>Calificación (1 a 5):
        <input type="number" id="rev-rate" min="1" max="5" step="0.1" value="5" required />
      </label>
      <button type="submit">Agregar reseña</button>
    `;
        const list = document.createElement("div");
        list.id = "reviews-list";
        reviewsContainer.appendChild(form);
        reviewsContainer.appendChild(list);

        const LS_KEY = "product_reviews";
        const loadReviews = () => JSON.parse(localStorage.getItem(LS_KEY) || "[]");
        const saveReviews = (arr) => localStorage.setItem(LS_KEY, JSON.stringify(arr));
        const escapeHTML = (s) =>
            s
                .replaceAll("&", "&amp;")
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll('"', "&quot;")
                .replaceAll("'", "&#039;");

        function renderStarsFA(rate) {
            const r = Math.max(1, Math.min(5, Number(rate)));
            const full = Math.floor(r);
            const frac = r - full;
            const hasHalf = frac >= 0.25 && frac < 0.75;
            const extraFull = frac >= 0.75 ? 1 : 0;
            const totalFull = Math.min(5, full + extraFull);
            const totalShown = hasHalf ? totalFull + 1 : totalFull;
            let html = "";
            for (let i = 0; i < totalFull; i++) html += '<i class="fas fa-star"></i>';
            if (hasHalf) html += '<i class="fas fa-star-half-alt"></i>';
            for (let i = totalShown; i < 5; i++) html += '<i class="far fa-star"></i>';
            return html;
        }

        function renderCard(review) {
            const card = document.createElement("div");
            card.classList.add("review");
            card.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
          <strong>${escapeHTML(review.name)}</strong>
          <div class="rating" style="margin:0;">
            ${renderStarsFA(review.rate)} 
            <span style="color:#666; margin-left:8px;">${Number(review.rate).toFixed(1)}/5</span>
          </div>
        </div>
        <div style="color:#666; font-size:.9em; margin:6px 0 10px;">
          ${new Date(review.date).toLocaleString()}
        </div>
        <p style="margin:0;">${escapeHTML(review.text)}</p>
      `;
            return card;
        }

        function renderList() {
            const data = loadReviews();
            list.innerHTML = "";
            if (!data.length) {
                const empty = document.createElement("div");
                empty.classList.add("review");
                empty.textContent = "No hay reseñas todavía. ¡Sé el primero en opinar!";
                list.appendChild(empty);
                return;
            }
            data.forEach((r) => list.appendChild(renderCard(r)));
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#rev-name").value.trim();
            const text = document.querySelector("#rev-text").value.trim();
            const rate = Number(document.querySelector("#rev-rate").value);
            if (!name || !text || !Number.isFinite(rate)) return;
            const newReview = {
                name,
                text,
                rate: Math.max(1, Math.min(5, rate)),
                date: new Date().toISOString(),
            };
            const all = loadReviews();
            all.unshift(newReview);
            saveReviews(all);
            form.reset();
            document.querySelector("#rev-rate").value = 5;
            renderList();
        });
        renderList();
    }
    if (qtyInput) {
        qtyInput.value = clampQty(getQty());
        updateTotals();
    }
}
