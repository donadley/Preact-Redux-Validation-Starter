import Joi from 'joi';

// Validation
export const validatorTypes = {
  username: Joi.string().alphanum().min(3).max(30).required().label('Username'),
  password: Joi.string().alphanum().min(3).max(10).required().label('Password'),
}
