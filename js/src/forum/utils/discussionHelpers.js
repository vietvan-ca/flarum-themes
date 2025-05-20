/**
 * Helper function to calculate time since in days
 */
export function getTimeSince(date) {
  const now = new Date();
  const diffTime = Math.abs(now - date);
  // Use Math.floor instead of Math.ceil to match the first function
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 1) {
    // Less than a day, show hours
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    return diffHours + 'h';
  } else if (diffDays < 30) {
    // Less than a month, show days
    return diffDays + 'd';
  } else {
    // More than a month, show months
    const diffMonths = Math.floor(diffDays / 30);
    return diffMonths + 'mo';
  }
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
    return m('span.user-avatar', { title: userName }, 
      m('img.avatar-image', {
        src: avatarUrl,
        alt: userName
      })
    );
  } else {
    // If no avatar URL, show initials with color background
    return m('span.user-avatar', { title: userName },
      m('span.user-initial', { 
        className: getColorClass(index)
      }, 
        getInitials(userName)
      )
    );
  }
}