document.getElementById("adminLogin").onclick = function(){
    //getting values from input 

    let email = document.getElementById("email").value ;
    let password = document.getElementById("password").value ;
    

    firebase.auth().signInWithEmailAndPassword(email , password).then((givenCred) =>{

        window.location.href= "admin.html";
    }).catch((error)=>{
        let errorMsg = error.Message;
        let toastLiveExample = document.getElementById('liveToast')
        let toast = new bootstrap.Toast(toastLiveExample)
        document.getElementById("toastMsg").innerHTML = errorMsg;
        toast.show()
        
    })
    

}