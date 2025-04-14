const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("pro-list")
    const prods = document.querySelectorAll(".prods")
    const pname = storeitems.getElementsByTagName("h2")

    for(var i=0; i < pname.length; i++){
        let match = prods[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                prods[i].style.display = "";
            }else{
                prods[i].style.display = "none";
            }
        }
    }
}