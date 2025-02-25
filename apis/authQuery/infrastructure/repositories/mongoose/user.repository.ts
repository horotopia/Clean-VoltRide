import { Model } from "mongoose";
import { UserRepositoryInterface } from "../../../application/ports";
import { User } from "../../../domain/entities";
import { userSchema } from "../../orms/mongoose";
import { MongooseService } from "../../databases";

export class UserRepository implements UserRepositoryInterface {
  readonly mongooseService: MongooseService;
  readonly model: Model<User>;

  constructor(mongooseService: MongooseService) {
    this.mongooseService = mongooseService;
    const mongoose = this.mongooseService.mongoose;
    this.model = mongoose.model("User", userSchema);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userData = await this.model.findOne({ email });
    return userData
      ? new User(userData.email, userData.password, userData.role, userData.id)
      : null;
  }

  async findAll(): Promise<User[]> {
    // find all users without their password
    const usersData = await this.model.find().select("-password");
    return usersData.map(
      (userData) => new User(userData.email, userData.role, userData.id),
    );
  }
}
