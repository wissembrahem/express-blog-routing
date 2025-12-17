import express from "express";


const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    res.send("best as roma players 2000-2025")
})

//SHOW
router.get("/:id", (req, res) => {
    const id = req.params.id
    res.send(" players description"+ id)
})

//STORE
router.post("/", (req, res) => {
    res.send("new asroma player")
})

//UPDATE
router.put("/:id", (res, req) => {
    const id = req.params.id
    res.send("load player n."+ id)
})

//MONDIFY
router.patch("/:id", (res,req) => {
    const id = req.params.idres.send
    res.send("loading player n."+ id)
})

//DESTROY


export default router;