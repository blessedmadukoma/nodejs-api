const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders were fetched",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Order was created",
  });
});

router.get("/:orderID", (req, res, next) => {
  const id = req.params.orderID;
  res.status(200).json({
    message: "Order details",
    orderID: id,
  });
});

router.delete("/:orderID", (req, res, next) => {
  const id = req.params.orderID;
  res.status(200).json({
    message: "Order deleted",
    orderID: id,
  });
});

module.exports = router;