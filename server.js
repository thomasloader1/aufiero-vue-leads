const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const users = {
  1: {
    id: 1,
    username: "Luciano",
    nickname:'luciano@aufiero.com',
    apikey: "apikey_random",
    password_hash: "hash_random",
    password: '12345678',
    role: 'R'
  },
  2: {
    id: 2,
    username: "Leandro",
    nickname:'leandro@aufiero.com',
    apikey: "apikey_random",
    password_hash: "hash_random",
    password: '12345678',
    role: 'A'
  },
  3: {
    id: 3,
    username: "Juan",
    nickname:'juan@aufiero.com',
    apikey: "apikey_random",
    password_hash: "hash_random",
    password: '12345678',
    role: 'E'
  }
};

const brands = {
  1: {
    id: 1,
    name: "Lumion",
    tags: "test, prueba",
    commercial_campaign: "Commercial Campaign Lumion",
    edu_campaign: "Edu Campaing Lumion",
    home_campaign_name: "Home Campaign Lumion",
    template_file: "Lumion_file.xls",
    needs_country_conversion: true,
    file_format: "XLS",
    has_sheets: "1",
    phone_Brand_field_id: "A",
    email_Brand_field_id: "B",
    country_Brand_field_id: "C",
    date_Brand_field_id: "D"
  },
  2: {
    id: 2,
    name: "Keyshot",
    tags: "test, prueba, keyshot, keyshotsales",
    commercial_campaign: "Commercial Campaign Keyshot",
    edu_campaign: "Edu Campaing Keyshot",
    home_campaign_name: "Home Campaign Keyshot",
    template_file: "Keyshot_file.xls",
    needs_country_conversion: true,
    file_format: "XLS",
    has_sheets: "1",
    phone_Brand_field_id: "A",
    email_Brand_field_id: "B",
    country_Brand_field_id: "C",
    date_Brand_field_id: "D"
  }
};

const batches ={
  1: {
    id: 1,
    name: "Lumion",
    tags: "test, prueba",
    commercial_campaign: "Commercial Campaign Lumion",
    edu_campaign: "Edu Campaing Lumion",
    home_campaign_name: "Home Campaign Lumion",
    template_file: "Lumion_file.xls",
    needs_country_conversion: true,
    file_format: "XLS",
    has_sheets: "1",
    phone_Brand_field_id: "A",
    email_Brand_field_id: "B",
    country_Brand_field_id: "C",
    date_Brand_field_id: "D",
    colE: "E",
    colF: "F",
    colG: "G",
    colH: "H",
  },
}

app.get("/users/:id", (req, res) => {
  res.send({
    user: users[req.params.id]
  });
});

app.get("/brands", (req, res) => {
  res.send({
    brand: brands
  });
});

app.get("/brands/:id", (req, res) => {
  res.send({
    brand: brands[req.params.id]
  });
});

app.get("/batches/", (req, res) => {
  res.send({
    batches: batches
  });
});

app.get("/batches/:id", (req, res) => {
  res.send({
    batches: batches[req.params.id]
  });
});

app.post("/auth/users", (req, res) =>{
 // const { nickname, password } = req.body;
  for(let key in users){
    const { nickname, password } = users[key];
    console.log("Nick",nickname === req.body.nickname)
    console.log("Pass",password === req.body.password)
    if(nickname === req.body.nickname && password === req.body.password){
      res.send({
        validiting: "Ok",
        user: users[key]
      })
      break;
    }else{
      res.status(403).send({validiting: "Ok",
      user: null})
    }
  }
  
})

app.listen(5000);
