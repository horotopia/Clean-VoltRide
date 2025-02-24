import { AuthServiceInterface, UserRepositoryInterface } from "../../ports";
import { UpdateUserDTO } from "../../dtos/auth";

export class UpdateUseCase {
  private userRepository: UserRepositoryInterface;
  private authService: AuthServiceInterface;

  constructor(userRepository: UserRepositoryInterface, authService: AuthServiceInterface) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async execute(dto: UpdateUserDTO): Promise<void> {
    if (!dto.id || !dto.token) {
      throw new Error("Id is required");
    }

    const token = this.authService.verifyToken(dto.token);
    if (!token) {
      throw new Error("Invalid token");
    }
    if (token.id !== dto.id) {
      throw new Error("Invalid token");
    }

    const user = await this.userRepository.findById(dto.id);
    if (!user) {
      throw new Error("User not found");
    }

    if (dto.email) {
      user.email = dto.email;
    }

    if (dto.firstName) {
      user.firstName = dto.firstName;
    }

    if (dto.lastName) {
      user.lastName = dto.lastName;
    }

    if (dto.phone) {
      user.phone = dto.phone;
    }

    await this.userRepository.update(user);
  }
}