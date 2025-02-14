import { Model } from "mongoose";
import { UserRepositoryInterface } from "../../../application/ports";
import { User } from "../../../domain/entities";
import { userSchema } from "../../orm/mongoose";
import { MongooseService } from "../../databases";

export class UserRepository implements UserRepositoryInterface {

  readonly mongooseService: MongooseService;
  readonly model: Model<User>;

  constructor(mongooseService: MongooseService) {
    this.mongooseService = mongooseService;
    const mongoose = this.mongooseService.mongoose;
    this.model = mongoose.model("User",userSchema);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userData = await this.model.findOne({ email });
    return userData ? new User(userData.id, userData.email, userData.password, userData.role) : null;
  }
}
