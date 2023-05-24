document.getElementById("saveReceptionistBtn").onclick= function(){
    let fullname = document.getElementById("fullName").value;
    let nationalID = document.getElementById("nationalID").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let phoneNo = document.getElementById("phoneNo").value;
    let gender= document.getElementById("gender").value;
    let maritalStatus = document.getElementById("maritalStatus").value;


    let addReceptionist = firebase.firestore().collection("receptionist").doc();
    addReceptionist.set({
        receptionistId: addReceptionist.id,
        fullname: fullname,
        nationalID: nationalID,
        gender: gender,
        age: age,
        phoneNo: phoneNo,
        maritalStatus,
        email,

    }).then(() => {
        window.location.reload()
    })
}

//pull employee details from database
firebase.firestore().collection("receptionist").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {
        let receptionistId = doc.data().docID;
        let fullname = doc.data().fullname;
        let nationalID = doc.data().nationalID;
        let gender = doc.data().gender;
        let age = doc.data().age;
        let phoneNo = doc.data().phoneNo;
        let maritalStatus = doc.data().maritalStatus;
        let email = doc.data().email;


        //use jquery to display employees from database to html page
        content += '<tr>';
        content += '<td>' + fullname + '</td>';
        content += '<td>' + age + '</td>';
        content += '<td>' + nationalID + '</td>';
        content += '<td>' + phoneNo + '</td>';
        content += '<td>' + gender + '</td>';
        content += '<td>' + maritalStatus + '</td>';
        content += '<td>' + email + '</td>';
        content += '</tr>';

    })
    $("#receptionistlist").append(content);
})


