function brandInput(){
    window.location.href = "brand.html"
}
function navigateTo(page){
    if (page === "home" ){
    window.location.href = "/Index.html"
    }
    else if (page === "store"){
        window.location.href = "/src/brand.html"
    }
    else if (page === "brand"){
        window.location.href = "/src/product.html"
    }
    else if (page === "pages"){
        window.location.href = "/src/cart.html"
    }
    else{
        alert("page not found")
    }
}