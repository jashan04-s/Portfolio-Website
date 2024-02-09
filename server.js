let path = require("path")
let express = require("express")
let nodeoutlook = require('nodejs-nodemailer-outlook');
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000


const app = express()

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.urlencoded({extended : true}))

app.post('/mail', (req, res) => {
  console.log(req.body)
  const {email, user} = req.body;
 
  nodeoutlook.sendEmail({
    auth:{
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    },
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: 'Thank You For the Feedback!',
    html: "<div> Hi " + user + ",</div><div>Thank you for taking the time to share your insights on my portfolio website.<div>Thanks,</div>Gurjashan Singh</div>",      
    onError: (e) =>  res.status(200).send("Failed, well looks like you might have to add this issue to the feedback form that doesn't work"),
    onSuccess: (i) => res.status(200).send("Success, thanks for providing feedback!")
  })

})

app.listen(PORT, console.log("Server is up and running..."))

