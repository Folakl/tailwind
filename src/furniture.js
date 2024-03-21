function brandInput(){
    window.location.href = "brand.html"
}
function navigateTo(page){
    if (page === "home" ){
    window.location.href = "index.html"
    }
    else if (page === "store"){
        window.location.href = "brand.html"
    }
    else if (page === "brand"){
        window.location.href = "product.html"
    }
    else if (page === "pages"){
        window.location.href = "cart.html"
    }
    else{
        alert("page not found")
    }
}