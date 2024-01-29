import express from "express";
import ReactDOM from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import { App } from "../shared/App";
import axios from 'axios';

const app = express();

const cors = require('cors');
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,            //access-control-allow-credentials:true
//   optionSuccessStatus: 200
// }
// app.use(cors(corsOptions));


app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App)));
});

app.get("/auth", (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: {
        username: process.env.CLIENT_ID, password: 'Jkq9Zgaq6koBuTbKE3RQKhdo2Kc5XA' },
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      }
    }
  )
  .then(({data}) => {
    res.send(indexTemplate(ReactDOM.renderToString(App), data['access_token']));
  }).catch(console.log);
  // req.query.code;
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
