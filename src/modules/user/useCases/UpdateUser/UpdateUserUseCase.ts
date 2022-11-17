import { IUpdateUserDTO } from '../../interfaces/IUser';
import { IUserRepository } from '../../repository/IUserRepository';

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, data: IUpdateUserDTO): Promise<void> {
    this.userRepository.update(id, data);
  }
}
