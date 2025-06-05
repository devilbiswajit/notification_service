import { sendSMS } from '../utils/smsUtils.js';
import { saveInApp } from '../utils/inAppUtils.js';
import { sendEmail } from '../utils/emailUtils.js';
import { Notification } from '../models/notification.js';



export const sendNotification = async (req, res) => {
  const { userId, type, destination, message } = req.body;

  try {

    if (type === 'email') {
      await sendEmail(destination, message);
    } 
    else if (type === 'sms') {
      await sendSMS(destination, message);
    } 
    else if (type === 'in-app') {
      await saveInApp(userId, message);
    } 
    else {
      return res.status(400).json({ error: 'Invalid notification type' });
    }

    await Notification.create({ userId, type, message });
    res.status(200).json({ success: true, 
                           message: 'Notification sent' 
                         });
} 
  catch (err) {
    res.status(500).json({ error: 'Failed to send notification', 
                           details: err.message
                         });
  }
};

export const getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.id }).sort({ sentAt: -1 });
    res.status(200).json(notifications);
  } 
  catch (err) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};
