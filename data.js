let data = [
    {
        "img": "file:///Users/thinh/Downloads/americano.jpg",
        "name": "Americano",
        "price": "55000"
    },
    {
        "img": "file:///Users/thinh/Downloads/caramel_macchiato.jpg",
        "name": "caramel macchiato",
        "price": "65000"
    },
    {
        "img": "file:///Users/thinh/Downloads/espresso.jpg",
        "name": "espresso",
        "price": "55000"
    },
    {
        "img": "file:///Users/thinh/Downloads/milk_coffee.jpg",
        "name": "nâu đá",
        "price": "30000"
    },
    {
        "img": "file:///Users/thinh/Downloads/tra_phuc_bon_tu.png",
        "name": "trà phúc bồn tử",
        "price": "65000"
    },
    {
        "img": "file:///Users/thinh/Downloads/tra_xoai_macchiato.jpg",
        "name": "trà xoài macchiato",
        "price": "65000"
    },
    {
        "img": "file:///Users/thinh/Downloads/colbrea_macchiato.jpg",
        "name": "coldbrew macchiato",
        "price": "52000"
    },
    {
        "img": "file:///Users/thinh/Downloads/coldbrew_cam_sa.jpg",
        "name": "coldbrew cam sả",
        "price": "65000"
    },
    {
        "img": "file:///Users/thinh/Downloads/coffee_bean_metal.JPG",
        "name": "metal coffee bean",
        "price": "300000"
    },
    {
        "img": "file:///Users/thinh/Downloads/coffee_bean_wood.JPG",
        "name": "wood coffee bean",
        "price": "300000"
    },
    {
        "img": "file:///Users/thinh/Downloads/coffee_bean_water.JPG",
        "name": "water coffee bean",
        "price": "300000"
    },
    {
        "img": "file:///Users/thinh/Downloads/coffee_bean_fire.JPG",
        "name": "fire coffee bean",
        "price": "300000"
    },
    {
        "img": "file:///Users/thinh/Downloads/coffee_bean_earth.JPG",
        "name": "earth coffee bean",
        "price": "300000"
    },
    {
        "img": "file:///Users/thinh/Downloads/coffee_bean_for_test.JPG",
        "name": "coffee bean for test",
        "price": "20000"
    },
    {
        "img": "file:///Users/thinh/Downloads/coldbrew_milk.jpg",
        "name": "coldbrew milk",
        "price": "29000"
    },
    {
        "img": "file:///Users/thinh/Downloads/coldbrew.jpg",
        "name": "original coldbrew",
        "price": "32000"
    },
    {
        "img": "file:///Users/thinh/Downloads/bac_siu.jpg",
        "name": "bạc sỉu",
        "price": "32000"
    },
    {
        "img": "file:///Users/thinh/Downloads/iced_chocolate.jpg",
        "name": "ice chocolate",
        "price": "65000"
    },
    {
        "img": "file:///Users/thinh/Downloads/matcha_latte.jpg",
        "name": "matcha latte",
        "price": "65000"
    },
    {
        "img": "file:///Users/thinh/Downloads/tra_cherry_macchiato.jpg",
        "name": "trà cherry macchiato",
        "price": "65000"
    },
    {
        "img": "file:///Users/thinh/Downloads/den.jpg",
        "name": "black coffe ",
        "price": "30000"
    },
    
]
let storage =  localStorage.getItem("data");
if (storage == undefined) {
    localStorage.setItem('data', JSON.stringify(data));
}