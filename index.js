const exp=require("express")
const cor=require("cors")
const food = require("./routes/food")
const bolly = require("./routes/bollywood")
const holly = require("./routes/hollywood")
const tech = require("./routes/technology")
const fitness = require("./routes/fitness")
const app=exp()


app.get("/",(req,res)=>{
res.send("woeifgjfkd")
res.end()
})


app.use(cor({
    origin:"*"
}))
 app.use("/",food)
 app.use('/',bolly)
 app.use("/",holly)
 app.use("/",tech)
 app.use("/",fitness)
app.listen(3009,()=>{
    console.log("its working")
})