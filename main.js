let el = {
    btn: document.querySelectorAll('.description_blue'),
    wrapper: document.querySelectorAll('.wrapper'),
    text: document.querySelectorAll('.description'),
    box: document.querySelectorAll('.box')
}

let textStorage = new Array(el.wrapper.length);

for (i = 0; i < el.wrapper.length; i++) {
  textStorage[i] = el.text[i].innerHTML;

  el.wrapper[i].addEventListener('click', buyPackage);
};

for (i = 0; i < el.btn.length; i++) {

  el.btn[i].addEventListener('click', buyProduct);
};

function buyPackage() {
  let i = [].indexOf.call(el.wrapper, this);
  let selectedWrap = el.wrapper[i].classList.toggle('selected');
  let selectedBox = el.box[i].classList.toggle('selected');
  
  el.text[i].innerHTML = selectedWrap ? "Головы щучьи с чесноком да свежайшая сёмгушка." : textStorage[i];
  let buy = el.btn[i].classList.toggle('active');
};

function buyProduct() {
  let i = [].indexOf.call(el.btn, this);
  let selectedWrap = el.wrapper[i].classList.toggle('selected');
  let selectedBox = el.box[i].classList.toggle('selected');
  
  el.text[i].innerHTML = "Головы щучьи с чесноком да свежайшая сёмгушка.";
  let buy = el.btn[i].classList.toggle('active');
}

// console.log(el.text[i]);




// let textStorage = new Array(el.btn.length);

// let textStorage = new Array(el.wrapper.length);

// for (let i = 0; i < el.wrapper.length; i++) {
//   textStorage[i] = el.text[i].textContent;

//   el.btn[i].addEventListener("click", buyPackage);
//   el.wrapper[i].addEventListener("click", buyPackage);
    
// };
 
//  function buyPackage() {



//     let i = [].indexOf.call(el.wrapper, this);
//     let selectedWrap = el.wrapper[i].classList.toggle('selected');
//     let selectedBox = el.box[i].classList.toggle('selected');
//     el.text[i].textContent = selectedWrap ? "this is new product" : textStorage[i];
//     console.log(i);

//     let selected = el.wrapper[i].classList.toggle('selected');

//     el.text[i].textContent = selected ? "вот новый продукт" : textStorage[i];

//  };


