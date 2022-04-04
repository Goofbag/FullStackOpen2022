const notificationReducer = (state = 'ALL', action) => {
    // ...
  }
  
  export const notificationChange = notification => {
    return {
      type: 'SET_NOTIFICATION',
      notification,
    }
  }
  
  export default notificationReducer
  