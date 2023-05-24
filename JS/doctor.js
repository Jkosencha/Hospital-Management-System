firebase.firestore().collection("doctors").doc(docId).get().then((doc) => {

    //assigning variables to data
    let doctorName = doc.data().fullname;
    let specialization = doc.data().specialization;
    

    //displaying data in html
    document.getElementById("doctorName").innerText = doctorName;
    document.getElementById("specialization").innerText = specialization;
   

})