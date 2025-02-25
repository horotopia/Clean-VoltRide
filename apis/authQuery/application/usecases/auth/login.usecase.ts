import { UserRepositoryInterface, AuthServiceInterface } from "../../ports";
import { LoginUserDTO } from "../../dtos/auth";
import { BadRequestError, NotFoundError } from "../../errors";

export class LoginUseCase {
  private userRepository: UserRepositoryInterface;
  private authService: AuthServiceInterface;

  constructor(
    userRepository: UserRepositoryInterface,
    authService: AuthServiceInterface,
  ) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async execute(dto: LoginUserDTO): Promise<string> {
    // Fail Fast: Vérifie si les données d’entrée sont valides
    if (!dto.email || !dto.password) {
      throw new BadRequestError();
    }

    // Récupère l’utilisateur via le repository
    const user = await this.userRepository.findByEmail(dto.email);
    if (!user) {
      throw new NotFoundError();
    }

    // Vérifie le mot de passe
    if (!user.isValidPassword(dto.password, user.password)) {
      throw new Error("Mot de passe incorrect");
    }

    // Génère et retourne un token JWT
    return this.authService.generateToken(user);
  }
}
