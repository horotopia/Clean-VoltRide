import { User } from "../../../domain/entities";
import { Role } from "../../../domain/enums";
import { GetAllUserDTO } from "../../dtos/auth/getall.user.dto";
import { BadRequestError, UnauthorizedError } from "../../errors";
import { UserRepositoryInterface, AuthServiceInterface } from "../../ports";

export class GetAllUserUseCase {
  private userRepository: UserRepositoryInterface;
  private authService: AuthServiceInterface;

  constructor(
    userRepository: UserRepositoryInterface,
    authService: AuthServiceInterface,
  ) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async execute(dto: GetAllUserDTO): Promise<User[] | Error> {
    if (!dto || !dto.token) {
      throw new BadRequestError();
    }

    const token = this.authService.verifyToken(dto.token);
    if (!token || token.role !== Role.ADMIN) {
      throw new UnauthorizedError();
    }
    return this.userRepository.findAll();
  }
}
