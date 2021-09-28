window.onload = function() {
  
  const productList = document.querySelector('.product-list')
  let html = '';

  data.forEach(function(item){
    console.log(item.name)
    html += `
      <li>
        <a href="#">
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
        </a>  
      </li>
    `
  })

  productList.innerHTML = html;

} // end window.onload