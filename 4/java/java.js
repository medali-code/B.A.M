const liItem = document.querySelectorAll('.poda ul li');
const imgItem = document.querySelectorAll ('.product images');

liItem.forEach(li => {
li.onclick = function(){
    //active
    liItem.forEach(li => {
        li.className = "";
    })
    li.className = "active";
}
    //filter
    //console.log(li.textContent);
    const value = li.textContent
    imgItem.forEach(img => {
        img.style.display ='none';
        if (img.getAttribute('data-filter') == value.toLowerCase()){
            img.style.display = 'block';   
        }
    })
});