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
    this.model = mongoose.model("User",userSchema);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userData = await this.model.findOne({ email });
    return userData ? new User(userData.email, userData.password, userData.role, userData.id) : null;
  }
  
  async findById(id: string): Promise<User | null> {
    const userData = await this.model.findById(id);
    return userData ? new User(userData.email, userData.password, userData.role, userData.id) : null;
  }

  async create(user: User): Promise<User> {
    const userData = await this.model.create(user);
    return new User(userData.email, userData.password, userData.role, userData.id);
  }

  // TODO: Implement the update method & Cie
  async update(user: User): Promise<User> {
    const userData = await this.model.findByIdAndUpdate(user.id, { email: user.email, password: user.password, role: user.role }, { new: true });
    if (!userData) {
      throw new Error("User not found");
    }
    return new User(userData.email, userData.id);
  }
  async updateRole(id: string, password: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async updatePassword(id: string, password: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
