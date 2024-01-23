let path = require("path")
let express = require("express")


const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000


const app = express()




app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json()); 



app.post('/feedback', (req, res) =>{
  const {email, name} = req.body;

  const userData = {
    userName: name,
    emailAddress: email,
    status: 'pending'
  }

  let nodeoutlook = require('nodejs-nodemailer-outlook')
  nodeoutlook.sendEmail({
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    from: 'portfolio.gurjashan@outlook.com',
    to: 'gurjashan0513@gmail.com',
    subject: 'Thank You For the Feedback!',
    html: "<div>Thank you for taking the time to share your insights on my portfolio website.<div>Thanks,</div>Gurjashan Singh</div>",
    text: 'This is text version!',
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i)
}
);
  if(email){
    // create additional page
  }
  else{
    res.status(404).send({message: 'Failed'})

  }
  res.json({ message: 'POST request handled successfully'});
})

app.listen(PORT, console.log("Server is up and running..."))

