import express from "express";
import { fetchUserData, updateUserData } from "../controller/users";
import { authMiddleware } from "../middleware/AuthMiddleware";
// import { deleteUserById } from '../db/users';

export default (router: express.Router) => {
  router.get("/fetch-user-data", authMiddleware, fetchUserData);
  router.patch("/update-user-data", authMiddleware, updateUserData);
  return router;
};
