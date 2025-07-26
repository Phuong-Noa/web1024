const sanPhamMoi = [
    {
        ten: "Điện thoại OPPO A5 8GB/128GB",
        gia: "6.990.000₫",
        hinh: "https://cdn.tgdd.vn/Products/Images/42/341378/oppo-a5-green-thumb-600x600.jpg",
        loai: "sp"
    },
    {
        ten: "Điện thoại OPPO A5i 4GB/64GB",
        gia: "3.290.000₫",
        hinh: "https://cdn.tgdd.vn/Products/Images/42/340259/oppo-a5i-purple-thumb-600x600.jpg",
        loai: "sp"
    },
    {
        ten: "realme Note 70",
        gia: "3.090.000₫",
        hinh: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/340260/realme-note-70-4gb-64gb-160725-095001-095-600x600.jpg",
        loai: "sp"
    },
]
const sanphamHot = [
    {
        ten: "Nubia Neo 3 GT 12GB 256GB",
        gia: "6.590.000₫",
        hinh: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-nubia-neo-3-gt-12gb-256gb.1.png",
        loai: "sp-laptop"
    },
    {
        ten: "Xiaomi 14T 12GB 512GB",
        gia: "13.240.000₫",
        hinh: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi_14t_2_.png",
        loai: "sp-laptop"
    },
    {
        ten: "Samsung Galaxy Z Flip7 12GB 256GB",
        gia: "26.990.000₫",
        hinh: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-flip-7-xanh.jpg",
        loai: "sp-laptop"
    }
];

function hienThiSanPham(ds, idDiv) {
    const container = document.getElementById(idDiv);
    if (!container) return;
    container.innerHTML = ds
        .filter(sp => sp.loai === idDiv)
        .map(sp => `
                    <div class="product-card">
                        <img src="${sp.hinh}" alt="${sp.ten}">
                        <div class="ten">${sp.ten}</div>
                        <div class="gia">${sp.gia}</div>
                    </div>
                `).join('');
}

hienThiSanPham(sanPhamMoi, "sp");
hienThiSanPham(sanphamHot, "sp-laptop");