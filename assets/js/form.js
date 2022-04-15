// create a event listener and get the subject and email from the form and create a mailto link
document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    let message = document.getElementById('message').value;
    let subject = document.getElementById('subject').value;
    let mailto = 'mailto:' + 'contato@henriqueholanda.com' + '?subject=Olá, eu me chamo ' + subject + ' e tenho uma dúvida' + '&body=' + message;
    window.location.href = mailto;
});




