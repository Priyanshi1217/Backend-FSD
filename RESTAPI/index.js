import express from "express";
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

//get: get requests to fetch all users 

app.get('/users', (req, res) => {
  res.json(users);
});
//post: post requests to create a new user
app.post('/users', (req, res) => {
  const user={
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email


//   };
//   users.push(user);
//   res.json(user);
// });

       };
          users.push(user);
          res.json(user);

})
app.put( "/users/:id", (req,res) => {
          let user = users.find(u=>u.id==req.params.id);
          user.name = req.body.name;
          user.email = req.body.email;
          red.json(user);
          //delete: request to delete a user
          app.delete('/user/:id', (req,res) => {
                    users = users.filter(u => u.id != req.params.id);
                    res.send("user deleted successfully");
          })
});
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});