import { Request, Response, NextFunction } from "express";
import { BadRequestError, RepositoryError } from "../../../application/errors";
import { NotificationMaintenanceUseCase } from "../../../application/usecases/maintenance/alert.maintenance.usecase";
import { config } from 'dotenv';
import connectDB from '../../../infrastructure/databases/database';

config();
if (!process.env.DB_TYPE) {
  throw new RepositoryError(); // DB_TYPE environment variable is not defined
}
const database = await connectDB(process.env.DB_TYPE);
const notificationService = null;
const maintenanceRepo = database && 'maintenanceRepository' in database ? await database.maintenanceRepository : null;
if(!maintenanceRepo) {
  throw new RepositoryError(); // Maintenance repository is not available
}
const notificationMaintenanceUseCase = new NotificationMaintenanceUseCase(maintenanceRepo, notificationService);

export class NotificationController {

  /**
   * @swagger
   * /api/notifications/send:
   *   post:
   *     summary: Send a notification
   *     tags: [Notification]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - scooterId
   *               - message
   *             properties:
   *               scooterId:
   *                 type: string
   *                 description: ID of the recipient
   *               message:
   *                 type: string
   *                 description: Notification message
   *             example:
   *               scooterId: scooter123
   *               message: "Your scheduled maintenance is due."
   *     responses:
   *       200:
   *         description: Notification sent successfully
   *       400:
   *         description: Invalid input
   */

  async sendNotification(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      if (
        !req.body ||
        typeof req.body.scooterId !== "string" ||
        typeof req.body.message !== "string"
      ) {
        res.status(400);
        throw new BadRequestError(); // scooterId and message are required
      }

      const notificationMaintenanceUseCase = new NotificationMaintenanceUseCase();
      await notificationMaintenanceUseCase.execute(req.body.scooterId, req.body.message);
      return res.status(200).json({ message: "Notification sent successfully" });

    } catch (error) {
      if (!res.statusCode) {
        res.status(500);
      }
      return res;
    }
  }
}
