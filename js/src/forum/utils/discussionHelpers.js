/**
 * Helper function to calculate time since in days
 */
export function getTimeSince(date) {
  if (!date) return '-';

  // Convert to Date object if string
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  // Check if date is valid
  if (isNaN(dateObj.getTime())) return '-';

  const now = new Date();
  const diffTime = now - dateObj;

  // If time is in the future, return placeholder
  if (diffTime < 0) return '-';

  // Calculate time differences
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

  // Return only the largest time unit
  if (diffDays >= 30) {
    // More than a month, show months
    const diffMonths = Math.floor(diffDays / 30);
    return diffMonths + 'mo';
  }

  if (diffDays > 0) {
    return diffDays + 'd';
  }

  if (diffHours > 0) {
    return diffHours + 'h';
  }

  if (diffMinutes > 0) {
    return diffMinutes + 'm';
  }

  // If less than a minute
  return 'now';
}

/**
 * Helper function to get user initials
 */
export function getInitials(username) {
  if (!username) return '';
  return username.charAt(0).toUpperCase();
}

/**
 * Helper function to get color class based on index
 */
export function getColorClass(index) {
  const colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
  return colorClasses[index % colorClasses.length];
}

/**
 * Renders user avatar with either image or initials
 */
export function renderUserAvatar(user, index) {
  if (!user) return null;

  const userName = user.username || '';
  const avatarUrl = user.avatar_url;

  if (avatarUrl) {
    // If avatar URL exists, render the image
    return m(
      'span.user-avatar',
      { title: userName },
      m('img.avatar-image', {
        src: avatarUrl,
        alt: userName,
      })
    );
  } else {
    // If no avatar URL, show initials with color background
    return m(
      'span.user-avatar',
      { title: userName },
      m(
        'span.user-initial',
        {
          className: getColorClass(index),
        },
        getInitials(userName)
      )
    );
  }
}
