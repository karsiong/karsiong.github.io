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

    const webhookUrl = "https://discord.com/api/webhooks/1097455835938045992/qAhAN9e7wGO9yM0UWV1mxICUx_1RQPW3BFmqRYgznd6IzFm_OHM_ShuAH1zIBWm7tfHb";

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

  const projectform = document.getElementById('project-form');
  projectform.addEventListener('submit', sendnumber);
  const resMessage = document.getElementById('respond-hpsend');

  function sendnumber(event){
    event.preventDefault();
    resMessage.style.backgroundColor = '#fff947'
    resMessage.innerHTML = "Sending...";

    const hpnum2 = document.getElementById('hpnum2').value;
    const webhookUrl = "https://discord.com/api/webhooks/1097460213772202065/-HT9yQ8n9iXPDeojhvZ15aZ_7Nby3Q2U-zNDnYyx_PXGokc9qI1wRH9AD_SGLAt_Iuf9";

    const payload = {
      embeds: [{
        title: name,
        fields: [
          {
            name: "Subcontractors & Project Job",
            value: hpnum2,
            inline: true
          }
        ],
        footer: {
          text: 'Send from safety-ac.com - Partner Ship'
        },
        color: 14146960
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
      resMessage.style.backgroundColor = '#47ffaf'
      resMessage.innerHTML = "Received, We will call you to discuss further";
    })
    .catch(error => {
      console.error(error);
      resMessage.style.backgroundColor = '#ffb759'
      resMessage.innerHTML = "Error, something wrong";
    });

  }

}
)();
