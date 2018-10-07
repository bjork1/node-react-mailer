module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center">
          <h3>Hi! It's been a while since you purchased our {product}!</h3>
          <p>${survey.body}</p>
          <div>
            <a href="http://localhost:3000">Yes</a>
            <a href="http://localhost:3000">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
