document.getElementById("addPrescriptionBtn").onclick= function(){
    let fullname = document.getElementById("fullName").value;
    let age = document.getElementById("age").value;
    let doctorName = document.getElementById("doctorName").value;
    let prescription = document.getElementById("prescription").value;
    let gender= document.getElementById("gender").value;
 
    let addPrescription = firebase.firestore().collection("prescriptions").doc();
    addPrescription.set({
        docId: addPrescription.id,
        fullname: fullname,
        age: age,
        gender,
        doctorName,
        prescription,

    }).then(() => {
        window.location.reload()
    })
}

//pull prescription details from database
firebase.firestore().collection("prescriptions").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {
        let docId = doc.data().docID;
        let fullname = doc.data().fullname;
        let gender = doc.data().gender;
        let age = doc.data().age;
        let prescription = doc.data().prescription;
        let doctorName = doc.data().doctorName;


        //use jquery to display employees from database to html page
        content += '<tr>';
        content += '<td>' + fullname + '</td>';
        content += '<td>' + age + '</td>';
        content += '<td>' + gender + '</td>';
        content += '<td>' + prescription + '</td>';
        content += '<td>' + doctorName + '</td>';
    
        content += '</tr>';

    })
    $("#Prescriptionlist").append(content);
})


