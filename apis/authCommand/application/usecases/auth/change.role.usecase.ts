import { NotFoundError } from "../../errors";
import { AuthServiceInterface, UserRepositoryInterface } from "../../ports";
import { ChangeRoleUserDTO } from "../../dtos/auth";
import { Role } from "../../../domain/enums";

export class ChangeRoleUseCase {
  private userRepository: UserRepositoryInterface;
  private authService: AuthServiceInterface;

  constructor(userRepository: UserRepositoryInterface, authService: AuthServiceInterface) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async execute(dto: ChangeRoleUserDTO): Promise<void | Error> {
    if (!dto.userId || !dto.role || !dto.token) {
      throw new Error("L'identifiant de l'utilisateur et le rôle sont requis");
    }

    const token = this.authService.verifyToken(dto.token);
    if (!token) {
      throw new Error("Invalid token");
    }

    if (token.role !== Role.ADMIN) {
      throw new Error("Permission denied");
    }

    const user = await this.userRepository.findById(dto.userId);
    if (!user) {
      throw new NotFoundError();
    }

    user.role = dto.role;
    await this.userRepository.update(user);
  }
}