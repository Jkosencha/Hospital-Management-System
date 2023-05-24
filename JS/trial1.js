let tableRowElement;
function toggleModal(element) {

    tableRowElement = element.parentElement.parentElement;
    const name = tableRowElement.getElementsByClassName('name')[0].innerHTML;
    const email = tableRowElement.getElementsByClassName('email')[0].innerHTML;
    const phone = tableRowElement.getElementsByClassName('phone')[0].innerHTML;
    const address = tableRowElement.getElementsByClassName('address')[0].innerHTML;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
    document.getElementById('address').value = address;

    openModal();
}

function saveInfo() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    tableRowElement.getElementsByClassName('name')[0].innerHTML=name;
    tableRowElement.getElementsByClassName('email')[0].innerHTML=email;
    tableRowElement.getElementsByClassName('phone')[0].innerHTML=phone;
    tableRowElement.getElementsByClassName('address')[0].innerHTML=address;

    closeModal();
}

function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("exampleModal").style.display = "block"
    document.getElementById("exampleModal").classList.add("show");
}

function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("exampleModal").style.display = "none"
    document.getElementById("exampleModal").classList.remove("show");
}

function removeRow(current) {
    current.parentElement.parentElement.remove();
}