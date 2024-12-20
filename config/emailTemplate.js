export const emailTemplate = (Username,link, userid,) =>{

    return `
      
             <div style="display: flex;justify-content: center;margin: auto;">
        <div style="width: 60%;margin: auto;">
            <div class="logo">
                <h1 style="font-size:50px;text-align: center;">Logo</h1>
            </div>
            <div
                style="background-color: rgb(2, 2, 40);padding: 30px 0px;  text-align: center; color: white;font-family:fantasy;">
                <img src="https://i.ibb.co/KNk4W2D/reset-password.png" alt="reset-password" border="0"
                    style="width: 90px;width: 90px;" />
                <h1>Please reset your password</h1>
            </div>
            <div>
                <p style="font-size: 23px;color: rgb(57, 52, 52);">Hello ${Username} ,</p>
                <p style="margin-top: 20px;font-size: 23px;color: rgb(57, 52, 52);">We have sent you this email in
                    response to your request to reset your password on company name.</p>
                <p style="font-size: 23px;color: rgb(57, 52, 52);">To reset your password, please follow the link below:
                </p>
              <div style="text-align: center;margin-top: 40px;">
                <a href="${link}/:${userid}"
                style="font-size: 23px;color: rgb(57, 52, 52);text-decoration: none;padding: 19px 60px;background-color: rgb(2, 2, 40);color: white;border-radius: 5px;">Forget
                Password</a>
              </div>

            </div>


            <div>

                <p style="color: rgb(115, 115, 115);font-size: 23px;margin-top: 90px;"> Please ignore this email if you
                    did not request a password change.</p>
            </div>

            <div
                style="background-color: rgb(2, 2, 40);padding: 30px 0px; color:white;font-size: 23px;text-align: center;">
                <p style="margin: 5px;font-family: Arial, Helvetica, sans-serif;">Contact</p>
                <p style="margin: 5px;font-family: Arial, Helvetica, sans-serif;">912 Mcwhorter Road, FL 11223</p>
                <p style="margin: 5px;font-family: Arial, Helvetica, sans-serif;">+111 222 333 | Info@company.com</p>
            </div>
        </div>
    </div>
    `

}

