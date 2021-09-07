const sendEmail = (to, subject, body) => {
   console.log(`\nSending Email to:  ${to}`)
   console.log(`Subject:  ${subject}`)
   console.log(`Body:  ${body}`)
}

module.exports = {
   sendEmail
}