export const emailTemplate = (Username,link, userid,) =>{

    return `
       <h1>Dear ${Username} ,</h1>
    <p style="margin-top: 20px;font-size: 20px;">Click to Forget Password</p>
    <a href="${link}/:${userid}" style="padding:10px 20px;color:black;background-color:steelblue;color:white;text-decoration: none;border-radius: 5px;">Forget Password</a>
    `

}

