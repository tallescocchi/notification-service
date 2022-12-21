import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { CountRecipientNotification } from "./count-recipient-notification"

describe('Count recipients notifications', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const CountRecipientNotifications = new CountRecipientNotification(notificationsRepository)

    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' })) 

    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' })) 
    
    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2' })) 

    const { count } = await CountRecipientNotifications.execute({
      recipientId: 'recipient-1'
    })
 
    expect(count).toEqual(2)
  })
  })
