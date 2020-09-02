$("#checkall").click(function(){

    if ($("input[type='checkbox']").prop("checked"))
    {
        $('.z').prop('checked', false);
        document.getElementById("num").innerHTML = "0";
        $(this).text('Seleziona tutti');
     }
  else{
      $('.z').prop('checked', true);
      document.getElementById("num").innerHTML = "8";
      $(this).text('Deseleziona tutti');
  }    

});


window.updateCount = function() {
    let x = $(".z:checked").length;
    document.getElementById("num").innerHTML = x;
};


let isInViewport = function (myElement) {

    let bounding = myElement.getBoundingClientRect();
    let myElementHeight = myElement.offsetHeight;
    let myElementWidth = myElement.offsetWidth;
	return (
        bounding.top >= -myElementHeight 
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight
	);
};

let myDiv = document.querySelector('.container_catalog');
let myOtherDiv = document.querySelector('#finto');

window.addEventListener('scroll', function (event) {
	if (isInViewport(myDiv) || isInViewport(myOtherDiv)) {
        document.getElementById("bar").style.visibility = 'visible'
        let element = document.getElementById("bar");
        element.classList.add("onview");
        
	} else {   
        document.getElementById("bar").style.visibility = 'hidden'
        let element = document.getElementById("bar");
        element.classList.add("outofview");
       
  }
}, false);




let isOutOfViewport = function (myElement) {

    let bounding = myElement.getBoundingClientRect();
    let myElementHeight = myElement.offsetHeight;
    let myElementWidth = myElement.offsetWidth;

	let out = {};
	out.top = bounding.top < 0;
	out.left = bounding.left < 0;
	out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
	out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
	out.any = out.top || out.left || out.bottom || out.right;

	return out;

};

let elem = document.querySelector('.container_catalog');
console.log(elem)

let logViewport = function () {
	let isOut = isOutOfViewport(elem);
	if (isOut.any) {
		let element = document.getElementById("bar");
        element.classList.add("outofview");
	}
};

logViewport();
window.addEventListener('scroll', logViewport, false);

