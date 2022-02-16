function upDate(previewPic){
document.getElementById('image').style.backgroundImage = "url("+previewPic.src+")";
document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo(){
document.getElementById('image').style.backgroundImage = "none";
document.getElementById('image').innerHTML = "Hover over an image to display the alt text.";
}

// submission by Wandile Ndaba (9Mar21)