import express from "express";
import asromaPlayers from "../data.js";


const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    const risposta = {
        count: asromaPlayers.length,
        result: asromaPlayers
    }
    res.json("best as roma players 2000-2025")
})

//SHOW
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const resp = asromaPlayers.find(player => player.id === id)
    res.json(resp)
})

//STORE
router.post("/", (req, res) => {
    res.send("new asroma player")
})

//UPDATE
router.put("/:id", (req, res) => {
    const id = req.params.id
    res.send("load player n."+ id)
})

//MONDIFY
router.patch("/:id", (req,res) => {
    const id = req.params.send
    res.send("loading player n."+ id)
})

//DESTROY
router.delete("/:id",(req, res) => {
    const id = req.params.id
    res.send("delete player n."+ id)
})


export default router;