import { UserRepositoryInterface } from "../ports"
import { AuthServiceInterface } from "../ports";
import { LoginUserDTO } from "../dtos";
import { TokenHelper } from "../../shared/helpers/token.helper";

export class LoginUseCase {

  private userRepository: UserRepositoryInterface;
  private authService: AuthServiceInterface;

  async execute(dto: LoginUserDTO): Promise<string> {
    // Fail Fast: Vérifie si les données d’entrée sont valides
    if (!dto.email || !dto.password) {
      throw new Error("Email et mot de passe sont requis");
    }

    // Récupère l’utilisateur via le repository
    const user = await this.userRepository.findByEmail(dto.email);
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    // Vérifie le mot de passe
    if (!user.isValidPassword(dto.password, user.password)) {
      throw new Error("Mot de passe incorrect");
    }

    // Génère et retourne un token JWT
    return this.authService.generateToken(user);
  }
}
