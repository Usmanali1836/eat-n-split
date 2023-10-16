import { Button } from "./App";

export function FriendList({ onSelection, friends, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <div>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)} $
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owe's you {Math.abs(friend.balance)} $
          </p>
        )}
        {friend.balance === 0 && (
          <p className="">You and {friend.name} are even</p>
        )}
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}{" "}
        </Button>
      </li>
    </div>
  );
}
