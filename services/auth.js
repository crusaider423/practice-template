import User from "../models/User.js";

export const signUp = (body) => User.create(body);
