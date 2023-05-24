document.getElementById("savePatientBtn").onclick=function(){
    let fullname = document.getElementById("fullName").value;
    let nationalID = document.getElementById("nationalID").value;
    let age = document.getElementById("age").value;
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gender").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;

    
    let addPatient = firebase.firestore().collection("patients").doc();
    addPatient.set({
        patientId: addPatient.id,
        fullname: fullname,
        nationalID: nationalID,
        age: age,
        gender: gender,
        email,
        phoneNumber,
        date,

    }).then(() => {
        window.location.reload()
    })
}


firebase.firestore().collection("patients").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {
        let docId = doc.data().appointmentId;
        let fullname = doc.data().fullname;
        let nationalID = doc.data().nationalID;
        let age = doc.data().age;
        let phoneNumber = doc.data().phoneNumber;
        let email = doc.data().email;
        let gender = doc.data().gender;
        let date = doc.data().date;


        //use jquery to display employees from database to html page
        content += '<tr>';
        content += '<td>' + fullname + '</td>';
        content += '<td>' + nationalID + '</td>';
        content += '<td>' + age + '</td>';
        content += '<td>' + phoneNumber + '</td>';
        content += '<td>' + email + '</td>';
        content += '<td>' + gender + '</td>';
        content += '<td>' + date + '</td>';
    
        content += '</tr>';

    })
    $("#patientlist").append(content);
})
