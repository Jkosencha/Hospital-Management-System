document.getElementById("addPrescriptionBtn").onclick = function () {
    //getting values from input 

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
        window.location.href = "prescriptions.html";
    })
}
