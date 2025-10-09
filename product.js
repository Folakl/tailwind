parent = [
 {
    id:1,
    image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391975/BOURINA_Decorative_Diamond_Lattice_Faux_Cashmere_Fringe_Throw_Blanket_Lightweight_Soft_Cozy_for_Bed_or_Sofa_Farmhouse_Outdoor_Throw_Blankets_50__x_60__Light_Blue_ywkipg.jpg",
    name: "Ribbed Wool-blend Throw",
    price: "30$",
    btn: "Add to cart"
 },
 {
    id:2,
    image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391976/Unique_bedroom_ideas___Home_decor_m57npa.jpg",
    name: "Fitted Cotton Sheet",
    price: "30$",
    btn: "Add to cart"
   },
 {
    id:3,
    image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391975/Dakota_Fields_Decorative_Throw_Pillowcase_Cushion_Cover_Velvet_Square1_Velvet_in_White_Size_20_0_H_x_20.0_W_x_1_tewzw9.jpg",
    name: "Washed Linen Pillowcase",
    price: "30$",
    btn: "Add to cart"
   },
 {
    id:4,
    image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391976/Teen_Bedding_Furniture_Decor_for_Teen_Bedrooms_Dorm_Rooms___Pottery_Barn_Teen_ztlste.jpg",
    name: "Flannel Duvet Cover Set",
    price: "30$",
    btn: "Add to cart"
   }
]
const parentItems = parent.map((product) =>`
 <div class = "h-auto w-[200px]">
 <img src= "${product.image}" class = "h-[300px] w-full rounded-xl" alt="">
 <div>${product.name}</div>
 <div>${product.price}</div>
 <button class = "bg-[#28285c] text-white w-[105px] h-[30px] rounded-md px-3 my-5" >${product.btn}</button> 
 </div>`)
 const container = document.getElementById('parentId')
 container.innerHTML = parentItems.join("") 