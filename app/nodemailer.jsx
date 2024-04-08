import nodemailer  from 'nodemailer';
import bcrypt from 'bcrypt'
// here user means schema like email and password
const sendEmail =async({email,emailType, userId})=>{
    try {
        const hashedToken =await bcrypt.hash(userId.toString(),10)

        if (emailType==="verify"){
            await User.findByIdAndUpdate(userId,
                {verifyToken:hashedToken, verifyTokenExpiry: Date.now()+360000})
        }
        else if(emailType==="reset"){
            await User.findByIdAndUpdate(userId,    //esma  User ma kei navayera yp delkhako
                {forgotPasswordToken:hashedToken, forgotPasswordTokenExpiry: Date.now()+360000})
        }

        const transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
            }
          });

            const mailOptions= {
                from :'shashankj677@gmail.com',
                to:email,
                subject:emailType=== "verify"? "verify you mail": "reset your password",
                html:`<p>Click <a href="${process.env.Domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType==="VERIFY" ? "verify your email" : "reset your password"}
                or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
</p>`
            }

        const mailresponse =await transport.sendMail
        (mailOptions);
        return mailresponse;
    } catch (error) {
        throw new Error(error.message)     //ESMA error lai vunknown vannu ko karan xai hamle user ma kei lekheko xaina
    }
}