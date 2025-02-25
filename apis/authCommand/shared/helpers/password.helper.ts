import bcrypt from 'bcrypt';
import { Logger } from '../../config/logger';
import { PasswordServiceInterface } from '../../application/ports/password.service.interface';

const logger = Logger.get();
export class PasswordHelper implements PasswordServiceInterface {

  private saltRounds: number;

  constructor(saltRounds: number = 10) {
    this.saltRounds = saltRounds;
  }

  async hash(password: string): Promise<string> {
    try {
      const salt = bcrypt.genSaltSync(this.saltRounds);
      return bcrypt.hashSync(password, salt);
    } catch (error) {
      logger.error(new Error(`Error hashing password: ${error}`));
      throw new Error("Erreur lors du hachage du mot de passe");
    }
  }

  async compare(password: string, hash: string): Promise<boolean> {
    try {
      return bcrypt.compareSync(password, hash);
    } catch (error) {
      logger.error(new Error(`Error comparing password: ${error}`));
      throw new Error("Erreur lors de la comparaison des mots de passe");
    }
  }
}