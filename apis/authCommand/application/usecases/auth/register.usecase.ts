import { User } from "../../../domain/entities";
import { RegisterUserDTO } from "../../dtos/auth";
import { UserExistsError } from "../../errors/user-exists-error";
import { AuthServiceInterface, UserRepositoryInterface } from "../../ports";


export class RegisterUseCase {

  private userRepository: UserRepositoryInterface;
  private authService: AuthServiceInterface;

  constructor(userRepository: UserRepositoryInterface, authService: AuthServiceInterface) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async execute(dto: RegisterUserDTO): Promise<string | Error> {
    // Fail Fast: Vérifie si les données d’entrée sont valides
    if (!dto.email || !dto.password) {
      throw new Error("Email et mot de passe sont requis");
    }

    // Vérifie si l’utilisateur existe déjà
    const user = await this.userRepository.findByEmail(dto.email);
    if (user) {
      throw new UserExistsError();
    }

    // Crée un nouvel utilisateur
    const newUser = new User(dto.email, dto.password);
    await this.userRepository.create(newUser);

    // Génère et retourne un token JWT
    return this.authService.generateToken(newUser);
  }
}