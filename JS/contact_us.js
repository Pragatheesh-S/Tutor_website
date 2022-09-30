function contactUsSendEmail() {
    Email.send({
        SecureToken: "c780a79f-8096-499c-98d0-bed761817b3b",
        To: 'pragadevil@gmail.com',
        From: 'pragatheesh2106@gmail.com',
        Subject: "ENQUIRY",
        Body: "Name: " + document.getElementById('name').value + 
        "<hr> Mobile Number: " + document.getElementById('mobile_no').value +
        "<hr> Email: " + document.getElementById('email').value +
        "<hr> Message: " + document.getElementById('message').value
    }).then(
        message => alert('Message sent succesfully')
    );
}