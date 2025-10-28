function brandInput(){
    window.location.href = "/tailwind/brand.html"
}
function navigateTo(page){
    if (page === "home" ){
    window.location.href = "/tailwind/index.html"
    }
    else if (page === "store"){
        window.location.href = "/tailwind/brand.html"
    }
    else if (page === "brand"){
        window.location.href = "/tailwind/product.html"
    }
    else if (page === "pages"){
        window.location.href = "/tailwind/cart.html"
    }
    else{
        alert("page not found")
    }
}