const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  const invalidEmails = emails
  .split(',')
  .map(email => email.trim())
  .filter(email => !re.test(email));

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}. Please provide a comma separeted list of values, e.g., test@example.com, test2@example.com, etc.`
  }

  return;

};
