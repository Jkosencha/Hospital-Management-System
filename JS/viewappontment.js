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
        content += '  <td> <button onclick="addPrescription(\'' + docId + '\')" class="btn btn-danger" id="addPrescriptionBtn" data-bs-toggle="modal" data-bs-target="#addPrescriptionModal">Add prescription</button> </td>';
        content += '  <td> <button onclick="viewPrescription(\'' + docId + '\')" class="btn btn-danger" id="viewPrescriptionBtn" data-bs-toggle="modal" data-bs-target="#viewPrescriptionModal">View prescriptions</button> </td>';
        content += '</tr>';

        //function to view records
        window.viewPrescription = function (value) {
            console.log(value)

            document.getElementById("viewPrescriptionBtn").onclick = function () {
                console.log("working")
                firebase.firestore().collection("appointments").doc(docId).get().then((doc) => {
                  

                        let docId = doc.data().appointmentId;
                        prescriptions = doc.data().prescriptions;

                        content += '<div class="tweetcontainer">';
                        content += '<p>' + prescriptions + '</p>';
                        content += '</div">';
                        console.log(docId);

                        document.getElementById("prescriptions").innerHTML = prescriptions;

                        console.log("working ");

                  
                })

                $("#prescriptions").append(content);

                // firebase.firestore().collection("repairs").doc(docId).delete().then(() => {
                //     console.log("Record successfully deleted!");
                //     window.href.reload();
                // })
            }
        }
    })
    $("#appointmentlist").append(content);
})



//function to add prescriptions
window.addPrescription = function (docId) {
    console.log(docId)

    document.getElementById("addPrescriptionBtn").onclick = function () {
        firebase.firestore().collection("appointments").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log("")
                let prescriptionInput = document.getElementById("prescriptionInput").value;
                let docId = doc.data().appointmentId;

               

                firebase.firestore().collection("appointments").doc(docId).update({
                    prescriptions: prescriptionInput

                }).then(() => {
                    console.log("working")
                })
            })

        })

    }
}
