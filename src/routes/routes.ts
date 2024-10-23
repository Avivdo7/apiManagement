import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Server UP!");
});

export const routes = router;
