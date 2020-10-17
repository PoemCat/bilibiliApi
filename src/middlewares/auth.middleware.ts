import { Request, Response, NextFunction } from 'express';

export function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  next()
}
