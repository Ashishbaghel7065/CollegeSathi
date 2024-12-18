export const emailTemplate = (Username,link, userid,) =>{

    return `

    

    <h1>Dear ${Username} ,</h1>

    <p>Click to Forget Password</p>



    <a href="${link}/:${userid}" style="padding:10px 20px;color:black;background-color:steelblue;color:white;">Forget Password</a>

    

    `

}

