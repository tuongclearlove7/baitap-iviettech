


// Hàm thay đổi nội dung hiển thị
function change_content(){

        let x = document.getElementById("hi");
            x.innerHTML = `<h1 style='color:red;'>
                        Chúc các bạn một ngày mới vui vẻ! 
                        Bạn vừa thay đổi nội dung</h1>
                        <img src="../image/linux.png">
                      `

        document.getElementById("btn1").style.display="none";
        document.getElementById("btn2").style.display="block";
        document.getElementById("btn2").style.backgroundColor = "aqua";




}


function hidden_content(){

    let x = document.getElementById("hi");

        x.innerHTML = `<h3 id="hi">Hello world ! 
                       Chào mừng các bạn đến với 
                       ngôn ngữ Javascript </h3>`

        document.getElementById("btn1").style.display="block";
        document.getElementById("btn1").style.backgroundColor = "aqua";
        document.getElementById("btn2").style.display="none";


    }


















































