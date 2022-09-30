function joinAsTutorSendEmail() {
    Email.send({
        SecureToken: "c780a79f-8096-499c-98d0-bed761817b3b",
        To: 'pragadevil@gmail.com',
        From: 'pragatheesh2106@gmail.com',
        Subject: "JOIN AS TUTOR",
        Body: "First Name: " + document.getElementById('fname').value + 
        "<hr> Last Name: " + document.getElementById('lname').value + 
        "<hr> Mobile Number: " + document.getElementById('mobile_no').value +
        "<hr> Email: " + document.getElementById('email').value +
        "<hr> Class / Courses: " + document.getElementById('course').value +
        "<hr> Subjects: " + document.getElementById('help').value
    }).then(
        message => alert('Message sent succesfully')
    );
}