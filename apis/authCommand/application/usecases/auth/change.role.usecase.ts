import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../../errors";
import { AuthServiceInterface, UserRepositoryInterface } from "../../ports";
import { ChangeRoleUserDTO } from "../../dtos/auth";
import { Role } from "../../../domain/enums";

export class ChangeRoleUseCase {
  private userRepository: UserRepositoryInterface;
  private authService: AuthServiceInterface;

  constructor(
    userRepository: UserRepositoryInterface,
    authService: AuthServiceInterface,
  ) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async execute(dto: ChangeRoleUserDTO): Promise<void | Error> {
    if (!dto.userId || !dto.role || !dto.token) {
      throw new BadRequestError();
    }

    const token = this.authService.verifyToken(dto.token);
    if (!token || token.role !== Role.ADMIN) {
      throw new UnauthorizedError();
    }

    const user = await this.userRepository.findById(dto.userId);
    if (!user) {
      throw new NotFoundError();
    }

    user.role = dto.role;
    await this.userRepository.update(user);
  }
}
