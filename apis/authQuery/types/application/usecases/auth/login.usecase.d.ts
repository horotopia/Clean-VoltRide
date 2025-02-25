import { UserRepositoryInterface, AuthServiceInterface } from "../../ports";
import { LoginUserDTO } from "../../dtos/auth";
export declare class LoginUseCase {
    private userRepository;
    private authService;
    constructor(userRepository: UserRepositoryInterface, authService: AuthServiceInterface);
    execute(dto: LoginUserDTO): Promise<string>;
}
