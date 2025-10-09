 const body = [
    {
        p: 1,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391978/WACOMECO_Set_of_2_Gold_Throw_Pillow_Covers_-_Soft_Decorative_Luxury_Velvet_Cushion_Covers_Pillow_Cases_with_Gold_Leather_for_Sofa_Bedroom_Livingroom_Car_18_x_18_in_Dark_Green_wkfzij.jpg",
        name: "Velvet Covvered",
        price: "39$",
        btn: "Add to cart"
    },
    {
        p: 2,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391976/LaModaHome-Stunning-Turkish-Moroccan-Colourful_m7hxlw.jpg",
        name: "Candle in glass holder",
        price: "14$",
        btn: "Add to cart"
    },
    {
        p: 3,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391977/25_Creative_Ways_To_Organize_Photos_On_A_Wall___Momooze_com_hqgyj1.jpg",
        name: "metal photo frame",
        price: "25$",
        btn: "Add to cart"
    },
    {
        p: 4,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391977/Rugs_Runners_Doormats_evczag.jpg",
        name: "Round floor mat",
        price: "34$",  
            btn: "Add to cart"
    },
    {
        p: 5,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391977/Shabby_Chic_ckvgcw.jpg",
        name: "Class light holdert",
        price: "22$",
        btn: "Add to cart"
    },
    {
       p: 6,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391976/Teen_Bedding_Furniture_Decor_for_Teen_Bedrooms_Dorm_Rooms___Pottery_Barn_Teen_ztlste.jpg",
        name: "FFlannel Duvet Cover Set",
        price: "44$",
        btn: "Add to cart"
    },
    {
        p: 7,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391976/Unique_bedroom_ideas___Home_decor_m57npa.jpg",
        name: "Fitted Cotton Sheet",
        price: "24$",
        btn: "Add to cart"
    },
    {
        p: 8,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391975/How_to_._mtslzw.jpg",
        name: "Small Candle in a Small Jar",
        price: "14$",
        btn: "Add to cart"
    },
    {
       p: 9,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391976/Buffalo_Plaid_Duvet_Cover_Sunny_Yellow_Plaid_Bedding_Set_Mattress_Cover_Checkered_Pastel_Bedding_-_Single_olz4mj.jpg",
        name: "Checked Duvet Cover Set",
        price: "24$",
        btn: "Add to cart"
    },
    {
       p: 10,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391975/Dakota_Fields_Decorative_Throw_Pillowcase_Cushion_Cover_Velvet_Square1_Velvet_in_White_Size_20_0_H_x_20.0_W_x_1_tewzw9.jpg",
        name: "Washed Linen Pillowcase",
        price: "18$",
        btn: "Add to cart"
    },
    {
        p: 11,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391975/BOURINA_Decorative_Diamond_Lattice_Faux_Cashmere_Fringe_Throw_Blanket_Lightweight_Soft_Cozy_for_Bed_or_Sofa_Farmhouse_Outdoor_Throw_Blankets_50__x_60__Light_Blue_ywkipg.jpg",
        name: "Ribbed Wool-blend Throw",
        price: "24$",
        btn: "Add to cart"
    },
    {
        p: 12,
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702391974/How_To_Make_A_Killer_Charcuterie_Table___Glitter_and_Bubbles_ftnkrd.jpg",
        name: "Mini Porcelain Dish",
        price: "8$",
        btn: "Add to cart"
    }

 ]
 const bodyItems = body.map((one) => `
 <div class = "h-auto w-[200px]" >
 <img src= "${one.image}"class = "h-[300px] w-full rounded-xl" alt="">
 <div> ${one.name}</div>
 <div> ${one.price}</div>
 <button class = "bg-[#28285c] text-white w-[105px] h-[30px] rounded-md px-3" >${one.btn}</button> 
 </div>`)
 const  contain = document.getElementById('parentId')
 contain.innerHTML = bodyItems.join("") 
