// 웹 문서의 요소를 가져오는 작업
var title = document.querySelector("#title");

var user = document.querySelectorAll(".user")[0];

var userImage = document.querySelector("#profile img");

// 가저온 요서에 변경 작업을 진행
title.onclick = function() {
    title.innerText = "프로필"; // 글자만 바꾸기
    title.style.backgroundColor = "black";
    title.style.color = "white";
    title.style.border = "5px solid green";
}

user.onclick = function() {
    user.innerHTML = `이 름 : <b>민들레</b>`; // 태그와 텍스트 다 바꾸기
}

userImage.onclick = function() {
    userImage.src = `../images/pf2.png`;
}