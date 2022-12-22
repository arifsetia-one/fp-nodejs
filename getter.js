function mapUsers(users) {
  // return {
  //   data : users,
  //   count : data.length,
  // }; // TODO: replace this
  const data = users;
  const count = data.length;
  return {data, count}
}

function mapArticles(articles) {
  // return {
  //   data : articles,
  //   count : data.length,
  // }; 
  const data = articles;
  const count = data.length;
  return {data, count}// TODO: replace this
}

export default mapUsers;
export {mapArticles};

// TODO: answer here