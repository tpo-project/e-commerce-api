import { LoginController } from '@app/controllers/auth/login/login-controller';
import { LoginValidator } from '@app/validators/auth/login/login-validator';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class UserLoginController extends LoginController {
  /**
   * Constructor.
   *
   * @param loginValidator login validator.
   */
  public constructor(loginValidator: LoginValidator) {
    super('default', loginValidator);
  }
}
