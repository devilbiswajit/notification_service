import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({

  userId:{ type: String, 
           required: true 
         },
  type:  { type: String, 
           enum: ['email', 'sms', 'in-app'], 
           required: true 
         },
  message:{ type: String, 
            required: true 
          },
  sentAt: { type: Date, 
            default: Date.now 
          }
});

export const Notification = mongoose.model('Notification', notificationSchema);
