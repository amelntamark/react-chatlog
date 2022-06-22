import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  // assign references to props
  const id = props.id
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const liked = props.liked;

  // add behavior to like button
  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked
    }
    props.onUpdate(updatedMessage);
  }

  // return statements; check if messages local or remote
  if (props.sender === "Vladimir") {
    return (
      <div className="chat-entry local">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{timeStamp}</p>
          <button className="like">🤍</button>
        </section>
      </div>
    );
  } else {
    return (
      <div className="chat-entry remote">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{timeStamp}</p>
          <button className="like">🤍</button>
        </section>
      </div>
    );
  }
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;
