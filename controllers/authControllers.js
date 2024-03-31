import * as service from "../services/auth.js";

export const signUp = async (req, res, next) => {
  try {

    const newUser = await service.signUp(req.body);
    res.status(201).json({
      email: newUser.email,
      _id: newUser._id
    });
  } catch (error) {
    next(error);
  }
}
