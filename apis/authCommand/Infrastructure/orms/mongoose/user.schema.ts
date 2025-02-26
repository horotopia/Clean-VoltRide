import { Schema } from "mongoose";
import { User } from "../../../domain/entities";
import { Role } from "../../../domain/enums";

export const userSchema = new Schema<User>(
  {
    id: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.CUSTOMER,
    },
  },
  {
    timestamps: true,
    collection: "users",
    versionKey: false,
  }
);
