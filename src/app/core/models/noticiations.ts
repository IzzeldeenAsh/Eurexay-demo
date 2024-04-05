interface IDetailedNotification {
  label: string;
  title: string;
  description: string;
  timestamp: string | null;
  itemType: string;
  itemUUID: string;
  seen: boolean;
  }
  
  export interface INotifiactions {
    allNotifications: IDetailedNotification[];
    unseenNotificationsCount: {
      PARTICIPANT_AVAILABLE_CASE?: number;
      OWNER_RECEIVED_OFFER?: number;
      CONTRACT_SIGNED_BY_PARTICIPANT?: number;
      AVAILABLE_PRIZE?: number;
      NEW_PRIZE_PARTICIPANT?: number;
    };
  }