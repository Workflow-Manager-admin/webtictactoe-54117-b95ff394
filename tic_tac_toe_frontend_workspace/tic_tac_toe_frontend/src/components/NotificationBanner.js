import React from 'react';

// PUBLIC_INTERFACE
/**
 * NotificationBanner component - Displays win/draw/game status messages.
 * Stateless, shows a message if present.
 */
const NotificationBanner = ({ message }) => {
  if (!message) return null;
  return (
    <div className="ttt-notification-banner">
      {message}
    </div>
  );
};

export default NotificationBanner;
