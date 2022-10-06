function needATutorSendEmail() {
    Email.send({
        SecureToken: "c780a79f-8096-499c-98d0-bed761817b3b",
        To: 'pragadevil@gmail.com',
        From: 'pragatheesh2106@gmail.com',
        Subject: "NEED A TUTOR",
        Body: "First Name: " + document.getElementById('fname').value + 
        "<hr> Last Name: " + document.getElementById('lname').value + 
        "<hr> Mobile Number: " + document.getElementById('mobile_no').value +
        "<hr> Email: " + document.getElementById('email').value +
        "<hr> Address: " + document.getElementById('address').value +
        "<hr> Board: " + document.getElementById('board').value +
        "<hr> Class / Courses: " + document.getElementById('course').value +
        "<hr> Subjects: " + document.getElementById('help').value +
        "<hr> Convenience: " + document.getElementById('convenience').value
    }).then(
        message => alert('Message sent succesfully')
    );
}