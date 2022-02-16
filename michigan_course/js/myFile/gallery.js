    // using variable to store selected object
const image = document.querySelector('#image');
const text = document.getElementById('image').innerHTML;

function upDate(previewPic){
    // using string literal to embed dynamic code
image.style.backgroundImage = `url(${previewPic.src})`;
image.innerHTML = previewPic.alt;
}

function unDo(){
image.style.backgroundImage = "";
image.style.backgroundColor = '#8e68ff';
image.innerHTML = "Hover over an image below to display here";
}


// submission by Wandile Ndaba (7Mar21)