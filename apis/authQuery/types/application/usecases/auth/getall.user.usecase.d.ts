import { User } from "../../../domain/entities";
import { GetAllUserDTO } from "../../dtos/auth/getall.user.dto";
import { UserRepositoryInterface, AuthServiceInterface } from "../../ports";
export declare class GetAllUserUseCase {
    private userRepository;
    private authService;
    constructor(userRepository: UserRepositoryInterface, authService: AuthServiceInterface);
    execute(dto: GetAllUserDTO): Promise<User[] | Error>;
}
