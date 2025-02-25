import { BadRequestError, NotFoundError } from "../../errors";
import { User } from "../../../domain/entities";
import { UserRepositoryInterface } from "../../ports";
import { GetOneUserDTO } from "../../dtos/auth/getone.user.dto";

export class GetOneUserUseCase {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  async execute(dto: GetOneUserDTO): Promise<User> {
    // Fail Fast: Vérifie si les données d’entrée sont valides
    if (!dto || !dto.email) {
      throw new BadRequestError();
    }

    // Récupère l’utilisateur via le repository
    const user = await this.userRepository.findByEmail(dto.email);
    if (!user) {
      throw new NotFoundError();
    }

    return user;
  }
}
