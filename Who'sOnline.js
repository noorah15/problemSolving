const whosOnline = (friends) => {
  const final = {};
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "offline") {
      if (final.offline) final.offline = [];
      final.offline.push(friends[i].username);
    } else {
      if (friends[i].lastActivity > 10) {
        if (!final.away) final.away = [];
        s.away.push(friends[i].username);
      } else {
        if (!final.online) final.online = [];
        s.online.push(friends[i].username);
      }
    }
  }
  return final;
};

console.log(undefined ? "true" : "false");
