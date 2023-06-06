const quantityItem = document.querySelectorAll('.item')
console.log(`Number of categories ${quantityItem.length}`);
quantityItem.forEach(Category =>{
    console.log(`Category: ${Category.firstElementChild.textContent}`)
    console.log(`Elements ${Category.lastElementChild.children.length}`);
});
