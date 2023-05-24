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


