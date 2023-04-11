/**
* PHP Email Form Validation - v3.6
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  /**
   * Send msg to discord
   */
  const form = document.getElementById('message-form');
  const successMessage = document.getElementById('donemsg');
  const loadingMessage = document.getElementById('msdload');
  const errorMessage = document.getElementById('errmsg');

  form.addEventListener('submit', sendMessage);

  function sendMessage(event) {
    event.preventDefault();
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    loadingMessage.style.display = 'block';

    const name = document.getElementById('name').value;
    const hpno = document.getElementById('hpnum').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const webhookUrl = "https://discord.com/api/webhooks/1095264915549327461/7YojGnWTg_ipgmrYrLwch0a7eb7eVgY8_yeJ96vonNOgQ_SleZzDBTYByVDlD61Wtwf1";

    const payload = {
      embeds: [{
        title: name,
        fields: [
          {
            name: hpno,
            value: subject + '\n' + message,
            inline: true
          }
        ],
        footer: {
          text: 'Send from safety-ac.com - contact'
        },
        color: 14177041
      }]
    };

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      loadingMessage.style.display = 'none';
      errorMessage.style.display = 'none';
      successMessage.style.display = 'block';
    })
    .catch(error => {
      console.error(error);
      loadingMessage.style.display = 'none';
      successMessage.style.display = 'none';
      errorMessage.style.display = 'block';
    });
  }

}
)();
