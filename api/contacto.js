const nodemailer=require("./_correo.js");
const OK_HTML='<meta charset="utf-8"><script>alert("Consulta enviada correctamente.");location.href="/#contacto";</script>';
const EMAIL_RE=/^[^\s@"(),:;<>[\]\\]+@[^\s@"(),:;<>[\]\\]+\.[a-z]{2,}$/i;
module.exports = async (req,res)=>{
 if(req.method!=="POST") return res.status(405).send("Método no permitido");
 try{
  const b=req.body||{};
  if((b.website||"").toString().trim()){
   res.setHeader("Content-Type","text/html; charset=utf-8");
   return res.status(200).send(OK_HTML);
  }
  const ts=Number(b.ts);
  if(!ts||Date.now()-ts<2000){
   res.setHeader("Content-Type","text/html; charset=utf-8");
   return res.status(200).send(OK_HTML);
  }
  const {nombre,telefono,email,equipo,mensaje}=b;
  if(!EMAIL_RE.test(String(email||""))){
   return res.status(400).send("El correo electrónico no es válido.");
  }
  const transporter=nodemailer.createTransport({
   host:process.env.SMTP_HOST, port:Number(process.env.SMTP_PORT||465), secure:true,
   auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}
  });
  await transporter.sendMail({
   from:process.env.SMTP_USER, to:process.env.CONTACT_EMAIL||"soporte@kelatos.com",
   replyTo:email, subject:"Nueva consulta - Reparación Ordenadores Madrid",
   text:`Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nEquipo: ${equipo}\n\n${mensaje}`
  });
  res.setHeader("Content-Type","text/html; charset=utf-8");
  return res.status(200).send(OK_HTML);
 }catch(e){console.error(e);return res.status(500).send("No se pudo enviar. Contacta por teléfono o WhatsApp.");}
}
