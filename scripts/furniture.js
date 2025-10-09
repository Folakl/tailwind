function brandInput(){
    window.location.href = "/pages/brand.html"
}
function navigateTo(page){
    if (page === "home" ){
    window.location.href = "/Index.html"
    }
    else if (page === "store"){
        window.location.href = "/pages/brand.html"
    }
    else if (page === "brand"){
        window.location.href = "/pages/product.html"
    }
    else if (page === "pages"){
        window.location.href = "/pages/cart.html"
    }
    else{
        alert("page not found")
    }
}