// ========== BANNER ==========
var arrBanner = ['img/banner1.png', 'img/banner2.jpg', 'img/banner3.png'];
var vt = 0;

function hienthi() {
    vt = (vt + 1) % arrBanner.length;
    document.getElementById("banner").innerHTML = `
        <img src="${arrBanner[vt]}" alt="banner" style="width:100%; height:auto;">
      `;
}

function pre() {
    vt = (vt - 1 + arrBanner.length) % arrBanner.length;
    document.getElementById("banner").innerHTML = `
        <img src="${arrBanner[vt]}" alt="banner" style="width:100%; height:auto;">
      `;
}

hienthi();
setInterval(hienthi, 2000);

// ========== DỮ LIỆU SẢN PHẨM ==========
const Dienthoai = [
    {
        name: "Samsung Galaxy Z Fold7",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-7-xanh.jpg",
        cost: 46990000,
        category: "Điện thoại"
    },
    {
        name: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
        cost: 29990000,
        category: "Điện thoại"
    },
    {
        name: "Xiaomi 14T Pro 12GB 512GB",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi_14t_pro_1_.png",
        cost: 14890000,
        category: "Điện thoại"
    },
    {
        name: "Samsung Galaxy S25 Ultra 12GB 256GB",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_3__3.png",
        cost: 14890000,
        category: "Điện thoại"
    },
    {
        name: "Samsung Galaxy Z Flip6 12GB 256GB",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_166_3.png",
        cost: 21990000,
        category: "Điện thoại"
    },
    {
        name: "Samsung Galaxy S25 Ultra 12GB Samsung Galaxy S24 Plus 12GB 256GB",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s24-plus.png",
        cost: 1660000,
        category: "Điện thoại"
    }
];

const laptop = [
    {
        name: "Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/m/image_1396_1.png",
        cost: 19790000,
        category: "Laptop"
    },
    {
        name: "MacBook Air M4 13 inch 2025 10CPU 8GPU 16GB 256GB",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_1.png",
        cost: 24990000,
        category: "Laptop"
    },
    {
        name: "Laptop ASUS Vivobook 15 X1502VA-BQ885W",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_659_42.png",
        cost: 13990000,
        category: "Laptop"
    },
    {
        name: "Laptop HP Gaming Victus 15-FA1139TX 8Y6W3PA",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_6_35.png",
        cost: 16690000,
        category: "Laptop"
    },
    {
        name: "Laptop Acer Gaming Nitro Lite 16 NL16-71G-71UJ",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_7_21.png",
        cost: 22490000,
        category: "Laptop"
    },
    {
        name: "Laptop HP 245 G10 B8PF8AT",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_12.png",
        cost: 11690000,
        category: "Laptop"
    }
];

const manhinh = [
    {
        name: "PC CPS X ASUS Gaming Intel i3 Gen 12 Kèm màn hình",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_854.png",
        cost: 11990000,
        category: "Màn hình"
    },
    {
        name: "PC CPS X MSI Gaming Intel i5 Gen 12 Kèm màn hình",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_784.png",
        cost: 20990000,
        category: "Màn hình"
    },
    {
        name: "Màn hình thông minh LG MyView 25SR50F 25 inch",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_180_1_5.png",
        cost: 2899000,
        category: "Màn hình"
    },
    {
        name: "Màn hình Gaming ASUS TUF VG249Q3A 24 inch",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/man-hinh-gaming-asus-tuf-vg249q3a-24-inch.png",
        cost: 2990000,
        category: "Màn hình"
    },
    {
        name: "Màn hình Gaming LG Ultragear 24GS65F 24 inch ",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_183_1_5.png",
        cost: 3150000,
        category: "Màn hình"
    },
    {
        name: "Màn hình Gaming LG UltraGear 24GS50F-B 24 inch",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_195_26_.jpg",
        cost: 2490000,
        category: "Màn hình"
    }
];

const maytinhbang = [
    {
        name: "iPad A16 Wifi 128GB 2025",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-a16-11-inch_10_.jpg",
        cost: 8790000,
        category: "Máy tính bảng"
    },
    {
        name: "iPad Air 11 inch M3 Wifi 128GB 2025",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-11-wifi-1.jpg",
        cost: 14790000,
        category: "Máy tính bảng"
    },
    {
        name: "Máy Tính Bảng Huawei Matepad 11.5''S 8GB 256GB Xám",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-tinh-bang-huawei-matepad-11-5-s_39_.png",
        cost: 11750000,
        category: "Máy tính bảng"
    },
    {
        name: "iPad mini 7 2024 Wifi 128GB",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_13_7.png",
        cost: 11790000,
        category: "Máy tính bảng"
    },
    {
        name: "Máy tính bảng Lenovo Idea Tab Pro Wifi 8GB 256GB ZAE40190VN",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-tinh-bang-lenovo-idea-tab-pro-kem-but-ban-phim_1_.png",
        cost: 11490000,
        category: "Máy tính bảng"
    },
    {
        name: "Máy tính bảng Teclast P30 4GB 64GB",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-tinh-bang-teclast-p30.png",
        cost: 1990000,
        category: "Máy tính bảng"
    }
];

const tainghe = [
    {
        name: "Tai nghe Bluetooth Apple AirPods 4",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-airpods-4-thumb.png",
        cost: 3090000,
        category: "Tai nghe"
    },
    {
        name: "Tai nghe Bluetooth Apple AirPods 4 chống ồn chủ động",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-airpods-4-chong-on-chu-dong-thumb.png",
        cost: 4490000,
        category: "Tai nghe"
    },
    {
        name: "Tai nghe Bluetooth True Wireless HUAWEI FreeClip",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-khong-day-huawei-freeclip-000.png",
        cost: 3390000,
        category: "Tai nghe"
    },
    {
        name: "Tai nghe Bluetooth Apple AirPods Pro 2 2023 USB-C ",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-airpods-pro-2-usb-c_1_.png",
        cost: 5390000,
        category: "Tai nghe"
    },
    {
        name: "Tai nghe không dây JBL Tune Beam 2",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-khong-day-jbl-tune-beam-2-thumb_2.png",
        cost: 2345000,
        category: "Tai nghe"
    },
    {
        name: "Tai nghe Bluetooth chụp tai Sony WH-1000XM6",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-chup-tai-sony-wh-1000xm6-_9_.png",
        cost: 11990000,
        category: "Tai nghe"
    }
];
// ========== DANH MỤC ==========
const danhMuc = [
    "Điện thoại",
    "Laptop",
    "Màn hình",
    "Máy tính bảng",
    "Tai nghe"
];

function showDanhMuc(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `<li onclick="locTheoDanhMuc('${arr[i]}')">${arr[i]}</li>`;
    }
    document.querySelector("#dm").innerHTML = str;
}
const menu = document.getElementById("dm");
// Mở menu bằng click
document.querySelector(".dropbtn").addEventListener("click", function (e) {
    e.stopPropagation();
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Đóng khi click ra ngoài
document.addEventListener("click", function () {
    menu.style.display = "none";
});
// ========== HIỂN THỊ SẢN PHẨM ==========
function showsp(arr, containerId) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        str += `
          <div class="product-card">
            <img src="${ele.img}" alt="">
            <div class="ten">${ele.name}</div>
            <div class="gia">${ele.cost.toLocaleString()} đ</div>
          </div>`;
    }
    document.getElementById(containerId).innerHTML = str;
}

// ========== LỌC THEO DANH MỤC ==========
function locTheoDanhMuc(tenDanhMuc) {
    const dt = Dienthoai.filter(sp => sp.category === tenDanhMuc);
    const lt = laptop.filter(sp => sp.category === tenDanhMuc);
    const mh = manhinh.filter(sp => sp.category === tenDanhMuc);
    const mtb = maytinhbang.filter(sp => sp.category === tenDanhMuc);
    const tn = tainghe.filter(sp => sp.category === tenDanhMuc);

    // Làm sạch vùng hiển thị trước
    document.getElementById("sp").innerHTML = "";
    document.getElementById("sp-laptop").innerHTML = "";
    document.getElementById("sp-manhinh").innerHTML = "";
    document.getElementById("sp-tablet").innerHTML = "";
    document.getElementById("sp-airport").innerHTML = "";

    showsp(dt, "sp");
    showsp(lt, "sp-laptop");
    showsp(mh, "sp-manhinh");
    showsp(mtb, "sp-tablet");
    showsp(tn, "sp-airport");
}

// ========== KHỞI TẠO ==========
showDanhMuc(danhMuc);
showsp(Dienthoai, "sp");
showsp(laptop, "sp-laptop");
showsp(manhinh, "sp-manhinh");
showsp(maytinhbang, "sp-tablet");
showsp(tainghe, "sp-airport");