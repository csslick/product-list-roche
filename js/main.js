// 제품 출력
const productList = document.querySelector('.product-list')
let html = '';

function showProducts(categoryName) {
  html = '';
  data.forEach(function(item){
    if(item.category === categoryName) {
      console.log(item.name)
      html += `
        <li>
          <a href="#">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
          </a>  
        </li>
      `
    } else {
      return;
    }
  })

  productList.innerHTML = html;
}

// 카테고리 버튼
const tabBtn = document.querySelectorAll('.tabBtn');
tabBtn.forEach(function(item){
  item.addEventListener('click', function(e){
    e.preventDefault();
    const category = this.children[0].innerText;
    showProducts(category);

    // 탭버튼 선택 스타일
    tabBtn.forEach(function(btn){
      btn.classList.remove('active');
    })
    item.classList.add('active');

  })
})

// 제품 출력
showProducts('항암제');
