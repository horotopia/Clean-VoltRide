import { AuthServiceInterface, UserRepositoryInterface } from "../../ports";


export class DeleteUseCase {

  private userRepository: UserRepositoryInterface;
  private authService: AuthServiceInterface;

  constructor(userRepository: UserRepositoryInterface, authService: AuthServiceInterface) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async execute(id: string): Promise<void | Error> {
    if (!id) {
      throw new Error("Id is required");
    }

    const isTokenValid = this.authService.verifyToken(id);
    if (!isTokenValid) {
      throw new Error("Invalid token");
    }

    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    await this.userRepository.delete(id);
  }
}