<strong> <i>A script written in NodeJS using nodemailer through which you can send e-mail to many mails at a single command line. </i>

## Send from a mail id that doesn't have 2 Factor Authentication

- After installing the node modules. Make a .config file with the following credentials.

  <div align="center">
  <img width="200" alt="env credentials" src="https://user-images.githubusercontent.com/78612380/133923082-a99f2935-b58e-478c-a5d2-347ad559ca79.png">
  </div>
  
- drop a .xlsx file named content in Excel folder containing Mail IDs in the first row. and create a template in the templates of the content you want to send.
- After setting the path of template in main.js just type <strong> npm start </strong> and done!!!! 

Note-> Make sure to turn on less secure app access for sending mails from your account. This can be done at
                    <https://www.google.com/settings/security/lesssecureapps>
                    
 
 ## Send mail from gmail id having two-factor authentication 
 
 - First you need to make a project in https://console.cloud.google.com/home/dashboard
 - Then under api and services add a new client oath2 id.
 - Set redirect url to <https://developers.google.com/oauthplayground>
 - Then go to the following url and enter your client id and secret in settings 
 - then in authorize section enter https://mail.google.com and click on authorize then authorize apis and after successful authentication copy the refresh token.
   
   <div align = "center">
   <img width="479" alt="mail google" src="https://user-images.githubusercontent.com/78612380/133923744-bec894d9-a4dc-454b-b0bc-c62fb0baa02b.png">
   </div>

 - make a .config file with the following credentials 
   <div align = "center">
   <img width="567" alt="env2" src="https://user-images.githubusercontent.com/78612380/133923899-ef319ee2-b8ec-4544-8356-6c693829b60b.png">
   </div>
   
- drop a .xlsx file named content in Excel folder containing Mail IDs in the first row. and create a template in the templates of the content you want to send.
- After setting the path of template in main.js just type <strong> npm start </strong> and done!!!! 

   
