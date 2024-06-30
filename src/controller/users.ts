import { Request, Response } from "express";
import admin from "../config/FirebaseConfig";

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;
    await admin.auth().updateUser(id, {
      displayName: name,
    });
    res
      .status(200)
      .send({ status: 200, message: "User data updated successfully" });
  } catch (error: any) {
    res.status(500).send({ status: 500, error: error.message });
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    return res.status(200).json({
      status: 200,
      result: listUsersResult,
    });
  } catch (error: any) {
    console.log("error", error);
    res.status(500).send({ status: 500, error: error.message });
  }
};
