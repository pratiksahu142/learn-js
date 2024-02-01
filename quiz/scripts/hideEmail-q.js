/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        if (isValidEmail(email)) {
            const maskedEmail = maskEmail(email);
            const listItem = document.createElement('li');
            listItem.textContent = maskedEmail;
            list.appendChild(listItem);
        }
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function maskEmail(email) {
    const [username, domain] = email.split('@');
    const maskedUsername = '*'.repeat(username.length);
    return maskedUsername + '@' + domain;
}