document.getElementById("savePrescriptionBtn").onclick=function(){
    let fullname = document.getElementById("fullName").value;
    let nationalID = document.getElementById("nationalID").value;
    let age = document.getElementById("age").value;
    let date = document.getElementById("date").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let doctorType = document.getElementById("doctorType").value;
    let prescription = document.getElementById("prescription").value;

    
    let addPrescription = firebase.firestore().collection("prescriptions").doc();
    addPrescription.set({
        prescriptionId: addPrescription.id,
        fullname: fullname,
        nationalID: nationalID,
        age: age,
        phoneNumber,
        date,
        doctorType,
        prescription,

    }).then(() => {
        window.location.reload()
    })
}


firebase.firestore().collection("prescriptions").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {
        let docId = doc.data().appointmentId;
        let fullname = doc.data().fullname;
        let nationalID = doc.data().nationalID;
        let age = doc.data().age;
        let phoneNumber = doc.data().phoneNumber;
        let date = doc.data().date;
        let doctorType = doc.data().doctorType;
        let prescription = doc.data().prescription;


        //use jquery to display employees from database to html page
        content += '<tr>';
        content += '<td>' + fullname + '</td>';
        content += '<td>' + nationalID + '</td>';
        content += '<td>' + age + '</td>';
        content += '<td>' + phoneNumber + '</td>';
        content += '<td>' + date + '</td>';
        content += '<td>' + doctorType + '</td>';
        content += '<td>' + prescription + '</td>';
    
        content += '</tr>';

    })
    $("#prescriptionlist").append(content);
})


