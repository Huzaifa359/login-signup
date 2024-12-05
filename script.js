// function createaccount(){
//     let a= {
//    username: prompt("enter your name"),
//    cninc:+prompt("enter your cnic number"),

//     }
// }
function collect(){
    
    let a ={ personname: document.getElementById('input1').value ,
     password: document.getElementById('input2').value,
     cnic:+document.getElementById('input3').value,
    }


    console.log();
    if (document.getElementById('input1').value == "" )
        alert('please enter your name');
    else if (document.getElementById('input2').value == "" )
        alert('please enter your password'); 
    else if (document.getElementById('input3').value == "" )
            alert('please enter your cnic');

    let personinfo = JSON.stringify(a)
    localStorage.setItem("personinfo",personinfo)
 


};


