import {
  getAllUser,
  createOneUser,
  getOneUser,
  updateOneUser,
} from "../controller/cwvController";
import express from "express";

const router = express.Router();

router.route("/users").get(getAllUser);
router.post("/user", createOneUser);
router.route("/user/:id").get(getOneUser).patch(updateOneUser);

export default router;
