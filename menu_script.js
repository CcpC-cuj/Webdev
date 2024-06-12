// Items
const menu = [
  {
    id: 1,
    title: "Veg Sanghai",
    category: "Sanghai",
    price:"",
    img: "veg_sanghai.jpg",
    desc: `40-HALF  /   70-Full`,
   
  },
  {
    id: 2,
    title: "Veg Mix Sanghai",
    category: "Sanghai",
    price: "",
    img: "veg_mix_sanghai.jpg",
    desc: `60-HALF/ 110-FULL `,
  },
  {
    id: 3,
    title: "Chichek Sanghai",
    category: "Sanghai",
    price: "",
    img: "chichekn_sanghai.jfif",
    desc: `50-HALF/90-FULL`,
  },
  {
    id: 4,
    title: "Veg Pasta",
    category: "Pasta",
    price: "",
    img: "veg_pasta.jpg",
    desc: `35-HALF/70-FULL `,
  },
  {
    id: 5,
    title: "Chicken Pasta",
    category: "Pasta",
    price: "",
    img: "chicken_pasta.jpg",
    desc: `50-HALF/95-FULL `,
  },
  {
    id: 6,
    title: "Veg Maggie",
    category: "Maggie",
    price: "",
    img: "maggie.jfif",
    desc: `30`,
  },
  {
    id: 7,
    title: "Chicken Maggie",
    category: "Maggie",
    price: "",
    img: "chicken_maggie.jpg",
    desc: `50 `,
  },
  {
    id: 8,
    title: "Veg Chowmin",
    category: "Chowmin",
    price: "",
    img: "veg_chowmin.jpg",
    desc: `25-HALF/50-FULL `,
  },
  {
    id: 9,
    title: "Chicken Chowmin",
    category: "Chowmin",
    price: "",
    img: "chicken_chowmin.jpg",
    desc: `50-HALF/80-FULL`,
  },
  {
    id: 10,
    title: "Veg Roll",
    category: "Roll",
    price: "",
    img: "veg_roll.jpg",
    desc: `25`,
  },
  {
    id: 11,
    title: "Chiken Roll",
    category: "Roll",
    price: "",
    img: "chicken_roll.jfif",
    desc: `45`,
  },
  {
    id: 12,
    title: "Veg Manchurian",
    category: "Manchurian",
    price: "",
    img: "veg_manchurian.jpg",
    desc: `30-HALF/60-FULL`,
  },
  {
    id: 13,
    title: "Chicken Manchurian",
    category: "Manchurian",
    price: "",
    img: "chicken_manchurian.jpg",
    desc: `60-BONE/70-BONELESS`,
  },
  {
    id: 14,
    title: "Veg Fried Rice",
    category: "Rice",
    price: "",
    img: "veg_rice.jpg",
    desc: `30-HALF/60-FULL`,
  },
  {
    id: 15,
    title: "Paneer Fried Rice",
    category: "Rice",
    price: "",
    img: "paneer_rice.jfif",
    desc: `50-HALF/95-FULL`,
  },
  {
    id: 16,
    title: "Chicken  Rice",
    category: "Rice",
    price: "",
    img: "chicken_rice.jfif",
    desc: `50-HALF/95-FULL`,
  },
  {
    id: 17,
    title: "Veg Burger",
    category: "Burger",
    price: "",
    img: "veg_burger.jpeg",
    desc: `30`,
  },
  
  {
    id: 18,
    title: "Paneer Burger",
    category: "Burger",
    price: "",
    img: "paneer_burger.jpeg",
    desc: `50`,
  },
  {
    id: 19,
    title: "Chicken Burger",
    category: "Burger",
    price: "",
    img: "chiken_burger.jpeg",
    desc: `50`,
  },
  

];

const sectionCenter = document.querySelector(".section-center");

const containerBtns = document.querySelector(".btn-container");

// Load Items
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu);

  const categories = menu.reduce(function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category)
    } 
    return values
  },["all"])
  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-category=${category}>${category}</button>`
  }).join([""])
  console.log(containerBtns)
  containerBtns.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll(".filter-btn");
  
  // Filter Items
  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
      const category = e.currentTarget.dataset.category;
      const menuCategory = menu.filter(function(menuItem){
        if(category === "all"){
          return menuItem
        } else if(category === menuItem.category){
          return menuItem
        }
        // if(menuItem.category === category){
        //   console.log(category)        
        //   return menuItem
        // }
      })
      displayMenuItems(menuCategory);
    })
  })

})



function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">Rs. ${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article> `
  })
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu;
}
