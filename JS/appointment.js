document.getElementById("saveAppointmentBtn").onclick=function(){
    let fullname = document.getElementById("fullName").value;
    let nationalID = document.getElementById("nationalID").value;
    let age = document.getElementById("age").value;
    let date = document.getElementById("date").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let doctorType = document.getElementById("doctorType").value;

    
    let addAppointment = firebase.firestore().collection("appointments").doc();
    addAppointment.set({
        appointmentId: addAppointment.id,
        fullname: fullname,
        nationalID: nationalID,
        age: age,
        phoneNumber,
        date,
        doctorType,
        prescriptions:null,

    }).then(() => {
        window.location.reload()
    })
}


firebase.firestore().collection("appointments").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {
        let docId = doc.data().appointmentId;
        let fullname = doc.data().fullname;
        let nationalID = doc.data().nationalID;
        let age = doc.data().age;
        let phoneNumber = doc.data().phoneNumber;
        let date = doc.data().date;
        let doctorType = doc.data().doctorType;


        //use jquery to display employees from database to html page
        content += '<tr>';
        content += '<td>' + fullname + '</td>';
        content += '<td>' + nationalID + '</td>';
        content += '<td>' + age + '</td>';
        content += '<td>' + phoneNumber + '</td>';
        content += '<td>' + date + '</td>';
        content += '<td>' + doctorType + '</td>';
    
        content += '</tr>';

    })
    $("#appointmentlist").append(content);
})


