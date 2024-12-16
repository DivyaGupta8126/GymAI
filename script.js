const accordionItems = document.querySelectorAll(".accordionItem");

accordionItems.forEach((item) => {
    const title = item.querySelector(".accordionTitle");
    const content = item.querySelector(".accordionContent");

    console.log(item);

    item.addEventListener("click", () => {
        for(var i=0; i<accordionItems.length;i++)
        {
            if(accordionItems[i]!=item){
                accordionItems[i].classList.remove("active");
            }
            else {
                item.classList.toggle("active");
            }
        }
        
    });
});
