import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { findUser } from "../../models/user.interface";

const validateCreateUser = [
  body("email")
    .isEmail()
    .withMessage("E-mail valide obligatoire"),

  body("password")
    .isLength({ min: 12 })
    .withMessage("Le mot de passe doit contenir au moins 12 caractères")
    .matches(/[a-z]/)
    .withMessage("Le mot de passe doit contenir au moins une lettre minuscule")
    .matches(/[A-Z]/)
    .withMessage("Le mot de passe doit contenir au moins une lettre majuscule")
    .matches(/\d/)
    .withMessage("Le mot de passe doit contenir au moins un chiffre")
    .matches(/[@$!%*?&]/)
    .withMessage(
      "Le mot de passe doit contenir au moins un caractère spécial (@, $, !, %, *, ?, & etc.)"
    ),

  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    if (req.path === '/login') {
      const { email } = req.body;
      const user = await findUser(email);
      
      if (user && !user.isEmailVerified) {
        res.status(401).json({ 
          message: 'Veuillez vérifier votre email avant de vous connecter'
        });
        return;
      }
    }

    next();
  }
];

export default validateCreateUser;
