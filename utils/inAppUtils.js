import { Notification } from '../models/notification.js';

export const saveInApp = async (userId, message) => {
  await Notification.create({ userId, 
                              type:'in-app', 
                              message 
                            });
};
