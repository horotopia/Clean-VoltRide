import { User } from "../../../domain/entities";
import { UserRepositoryInterface } from "../../ports";
import { GetOneUserDTO } from "../../dtos/auth/getone.user.dto";
export declare class GetOneUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(dto: GetOneUserDTO): Promise<User>;
}
