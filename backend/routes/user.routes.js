import { Router } from "express";
import multer from "multer";

import {
	register,
	login,
	uploadProfilePicture,
	updateUserProfile,
	getUserAndProfile,
	updateProfileData,
	getAllUserProfile,
} from "../controllers/user.contoller.js";

const router = Router();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

router
	.route("/upload_profile_picture")
	.post(upload.single("profile_picture"), uploadProfilePicture);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/user_update").post(updateUserProfile);
router.route("/get_user_and_profile").get(getUserAndProfile);
router.route("/update_profile_data").post(updateProfileData);
router.route("/get_all_users").get(getAllUserProfile);

export default router;
