import { sign, verify } from 'jsonwebtoken';
import { config } from 'dotenv';
import { Logger } from '../../config/logger';
import { AuthServiceInterface } from '../../application/ports';
import { User } from '../../domain/entities';

config();
export class TokenHelper implements AuthServiceInterface {
  private secret: string;

  constructor() {
    this.secret = process.env.JWT_SECRET || '';
    if (this.secret === '') {
      Logger.get().error(new Error('JWT_SECRET is not defined'));
      throw new Error('JWT_SECRET is not defined');
    }
  }

  generateToken(user: User): string {
    return sign({id: user.id, email: user.email, role: user.role}, this.secret, { expiresIn: '1h' });
  }

  verifyToken(token: string): any {
    return verify(token, this.secret);
  }
}