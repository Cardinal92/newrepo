const Notification = ({message}) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )

}

const NotificationGud = ({gudMessage}) => {
  if (gudMessage === null) {
    return null
  }
  
  return (
    <div className="notError">
      {gudMessage}
    </div>
  )
}

export default Notification; NotificationGud