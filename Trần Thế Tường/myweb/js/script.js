console.log(document.sign_in.email.value); //Từ khóa
console.log(document.sign_in.password.value);



function check_sign_in(){

    var email = "lol00sever@gmail.com";
    var password = "123";

    if(document.sign_in.email.value === email&&document.sign_in.password.value === password ){ 

        alert("chuc mung ban da nhap dung mat khau va email" + `email cua ban la : ${document.sign_in.email.value}`);
    }else{

        alert("ban da nhap mat khau hoac email sai");
    }
}


document.querySelector(".btn-primary").onclick = function(){

    check_sign_in();

}



















