firebase.firestore().collection("patients").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {
        let docID = doc.data().patientId;
        let fullname = doc.data().fullname;
        let patientID = doc.data().IDNumber;
        let age = doc.data().age;
        let gender = doc.data().gender;
        let phoneNumber = doc.data().phoneNumber;
        let email = doc.data().email;


        //use jquery to display employees from database to html page
        content += '<tr>';
        content += '<td>' + fullname + '</td>';
        content += '<td>' + patientID + '</td>';
        content += '<td>' + age + '</td>';
        content += '<td>' + gender + '</td>';
        content += '<td>' + email + '</td>';
        content += '<td>' + phoneNumber + '</td>';
       
        content += '</tr>';

    })
    $("#patientslist").append(content);
})
