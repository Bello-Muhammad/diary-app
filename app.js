const express = require('express');
const userRoutes = require('./src/diary/user/routes/userRoutes')
const diaryRoutes = require('./src/diary/entry/routes/entryRoutes')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//user route
app.use("/api/v1/auth", userRoutes);
//entry route
app.use("/api/v1/entries", diaryRoutes);

app.listen(port, () => console.log(`listening on ${port}`))