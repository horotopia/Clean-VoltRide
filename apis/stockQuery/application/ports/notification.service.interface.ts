export interface NotificationServiceInterface {
  sendNotification(recipientId: string, message: string): Promise<void>;
}
