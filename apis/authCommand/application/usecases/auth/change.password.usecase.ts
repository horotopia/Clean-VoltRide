import { NotFoundError } from "../../errors";
import { AuthServiceInterface, UserRepositoryInterface } from "../../ports";
import { ChangePasswordUserDTO } from "../../dtos/auth";
import { Role } from "../../../domain/enums";

export class ChangePasswordUseCase {
    private userRepository: UserRepositoryInterface;
    private authService: AuthServiceInterface;

    constructor(userRepository: UserRepositoryInterface, authService: AuthServiceInterface) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async execute(dto: ChangePasswordUserDTO): Promise<void | Error> {
        if (!dto.userId || !dto.password || !dto.token) {
            throw new Error("L'identifiant de l'utilisateur et le mot de passe sont requis");
        }
        const token = this.authService.verifyToken(dto.token);
        if (!token) {
            throw new Error("Invalid token");
        }
        if (token.id !== dto.userId || token.role !== Role.ADMIN) {
            throw new Error("Permission denied");
        }
        const user = await this.userRepository.findById(dto.userId);
        if (!user) {
            throw new NotFoundError();
        }
        user.password = dto.password;
        await this.userRepository.updatePassword(dto.userId, dto.password);
    }
}