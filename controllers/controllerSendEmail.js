const nodemailer = require("nodemailer");

const ControllerSendEmail = async ( req, res ) => {

    // const events = await Events.find()
  try{

    console.log(req.body);
    const {email,title,body} = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure:true,
      auth: {
          user: 'alesandro.lalli@gmail.com',
          pass: process.env.GMAIL_PASS
      }
    });

    const mailOptions = {
      from: `${email}`,
      to: "alesandro.lalli@gmail.com",
      subject: `📣📣Se han comunicado a traves de la página!!😃😃`,
      html: ` Enviado por ${email} <br> Título: ${title} <br> Cuerpo:  ${body}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if(err) {
        res.status(500).json({
          ok:false,
          msg:"Error al enviar mail",
          error: err.message
        });
      }
      else
      {
        res.status(201).json({
          ok: true,
          msg: "Recibido",
          send: {
            email,title,body
          },
          recive: info
        });
      }
    })
  }
  catch(err)
  {
    res.status(500).json({
      ok:false,
      msg: err
    });
  }

    
  };
  
  module.exports = ControllerSendEmail;