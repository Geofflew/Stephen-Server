const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Give me input</h3>
          <p>Answer these quesitons</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/apis/survey/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/apis/survey/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
