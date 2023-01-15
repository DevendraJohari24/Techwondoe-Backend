import express from "express";
import {
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// router.get("/", verifyToken, getAllUsers);
router.get("/", getAllUsers);

// router.get("/:id", verifyToken, getUser);
router.get("/:id", getUser);


/* UPDATE */
router.patch("/:id", updateUser);


/* DELETE */
router.delete("/:id", deleteUser)

export default router;
