
    // first
 const parent = [
    {
        id: 1,
        name: "DECOR",
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702330580/AS_10_MELHORES_DICAS_DE_D%C3%89COR_PARA_APTOS_ALUGADOS_-_Casa_de_Valentina_1_n7yj9s.jpg",
        price: "100$",
        btn: "Add to cart" 
    },
    {
        id: 2,
        name: "LINEN BEACH TOWEL",
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702330360/Linen_Cotton_Turkish_Towel_Set_Boho_Beach_Blanket_Picnic_-_Etsy_1_qiwrcx.jpg",
        price: "30$",
        btn: "Add to cart" 
    },
    { id: 3,
        name: "Square Clear Glass Box",
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702330119/naturge__Modern_Organic_Blog_Always_follow_back_.._Fashion_other_arts_1_qywq0n.jpg",
        price: "40$",
        btn: "Add to cart" 
    },
    {   id: 4, 
        name: "BOHO CHIC",
         image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702385941/This_item_is_unavailable_-_Etsy_lulevf.jpg",
         price: "60$",
         btn: "Add to cart" 
    
        
    },
    { id: 5,
        name: "Large Clear Glass Box",
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702330311/1pc_Vintage_Tissue_Storage_Box_1_rfuw5y.jpg",
        price: "50$",
        btn: "Add to cart" 
        
    },
    { id: 6,
        name: "Round Jute Placemat ",
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702330100/Round_Placemats_Farmhouse_Woven_Jute_Pom_Pom_Ball_Fringe_Tassel_Mandala_Print_Dining_Table_Mats_Home_Kitchen_Tablemat_Decor_-_Buy_African_Table_Decorations_Home_Decoration_Pieces_Round_Burlap_Placemat_Circular_2_fpblip.jpg",
        price: "30$",
        btn: "Add to cart" 
        
    },
    { id: 7,
        name: "Metal Wire Basket",
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702330027/24_Simple_Decorating_Ideas_For_People_Who_Hate_Clutter_lydcm8.jpg", 
        price: "80$",
        btn: "Add to cart" 
        
    },
    {   id: 8,
        name: "4-pack Small Ceramic Plates",
        image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702330293/Holiday_4-piece_Melamine_Accent_Plate_Set_irctvk.jpg",
        price: "30$",
        btn: "Add to cart" 
      
        
    } 
   
 ]

 const productsItems = parent.map((product) =>`
   <div class = "h-auto w-[200px]" >
    <img src= "${product.image}" class = "h-[300px] w-full rounded-xl" alt="">
     <div class = "py-3">${product.name}</div>
     <div>${product.price}</div>
     <button class = "bg-[#28285c] text-white w-[105px] h-[30px] rounded-md px-3" >${product.btn}</button> 
    </div>`)
    const container = document.getElementById('parentId')
    container.innerHTML = productsItems.join("") 

//     // second
    const parentTwo = [
        {
            pro: 1,
            name: "Tray with foot",
            image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702333229/Farmhouse_Riser_Tray_wirrzw.jpg",
            price: "100$",
            btn: "Add to cart" 
        },
        {
            pro: 2,
            name: "Twill Seat Cushion",
            image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702333239/48-inch_by_24-inch_Twill_Indoor_Seat_Back_Rocker_Cushion_Cushion_Only_-_48_x_24_pfi1vw.jpg",
            price: "30$",
            btn: "Add to cart" 
        },
        { pro: 3,
            name: "Fluted Beverage Glass",
            image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702387250/JoyJolt_10_oz_Elle_Fluted_Cylinder_Martini_Coupe_Glasses_2ct__in_Clear___Michaels_bxysud.jpg",  
            price: "40$",
            btn: "Add to cart" 
        },
        {   pro: 4, 
            name: "Ceramic Egg Cup",
            image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702387248/Decoraci%C3%B3n_de_Exterior_Macetas_eyieuv.jpg",
             price: "60$",
             btn: "Add to cart" 
        
            
        },
        { pro: 5,
            name: "Small Bamboo Box ",
            image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702387249/%E0%B8%95%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%A2_%E0%B8%95%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%A1_%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%A2_%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%A2_%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%A2_%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%A2_vxcjm4.jpg",
            price: "50$",
            btn: "Add to cart" 
            
        },
        { pro: 6,
            name: "Metal Cutlery Basket",
            image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702387248/Cutlery_Drainer_haoun_Hanging_Stainless_Steel_Cutlery_Holder_Stand_for_Spoons_Forks_Knives_____Check_out_this_great_product_Note_It_is_affiliate_link_to_Amazon__lj6h6q.jpg",
            price: "30$",
            btn: "Add to cart" 
            
        },
        { pro: 7,
            name: "4-pack Ceramic Cups ",
            image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702387250/Dinnerware_Sets_g3arcy.jpg",
            price: "80$",
            btn: "Add to cart" 
            
        },
        {   pro: 8,
            name: "2-pack Linen Napkins ",
            image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702387248/Simons_Maison_-_Les_serviettes_de_table_coton_recycl%C3%A9_rayures_modernes_Ensemble_de_2_phhvxh.jpg",
            price: "30$",
            btn: "Add to cart" 
          
            
        }, 
        {   pro: 8,
            name: "Glazed Stoneware Plate",
            image:"https://res.cloudinary.com/dxcnxksmq/image/upload/v1702387247/Lemon_Ceramic_Platters_qwqksq.jpg",
            price: "30$",
            btn: "Add to cart"   
            
        } 
       
     ]
    
     const childItems = parentTwo.map((produt) =>`
        <div class = "h-auto w-[200px]" >
        <img src= "${produt.image}" class = "h-[300px] w-full rounded-xl" alt="">
         <div>${produt.name}</div>
         <div>${produt.price}</div>
         <button class = "bg-[#28285c] text-white w-[105px] h-[30px] rounded-md px-3" onclick="addTocart()" id ="btnr" >${produt.btn}</button> 
       </div>`)
       const Box = document.getElementById('parenttwoId')
        Box.innerHTML = childItems.join("") 

    function addTocart(){
        
    localStorage.setItem("mycart", JSON.stringify({parentTwo}))
    var myContent = localStorage.getItem("mycart" )
    // console.log(localStorage.getItem("mycart"));
    document.getElementById("two").value = myContent
    

    }

   