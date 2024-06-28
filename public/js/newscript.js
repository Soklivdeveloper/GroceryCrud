function editBtn(item){
    console.log(item.parentElement.parentElement)
    const getIfo = item.parentElement.parentElement;
    const grocery_item = getIfo.querySelector(".title").textContent;
    const grocery_id   = getIfo.querySelector("#valueOfId").innerText;
    document.querySelector("#grocery").value = grocery_item;
    document.querySelector(".submit-btn").textContent= "Edit";
    document.querySelector(".grocery-form").setAttribute("action","/edit/" + grocery_id );
}