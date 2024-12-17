import nodemailer from "nodemailer";
import http from "http";

const server =http.createServer((req,res)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        secure:true,
         port: 465,
        auth: {
        user: "ashishkumar440385@gmail.com",  //sender email
        pass: "dkjjvgrudjybjmqo",      //less secure 
      },
    });
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: "ashishkumar440385@gmail.com", // sender address
        to: "sandeepkr2927@gmail.com", // list of receivers
        subject: "Node js testing", // Subject line
        text: "Hello world? nodemailer testing university website", // plain text body
        html: "<b style='color:red'>Hello world? iofhugiugIOHFPFHpoHF</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }
    
    main().catch(console.error);
});

server.listen(8000,()=>{
    console.log("server started")
} );