import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={css.status} style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
