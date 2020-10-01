// const makeAPIcall = (query, callback) => {
//   // const queryString = 'SELECT id, url FROM public.photos;';
//   const queryString = 'SELECT * FROM questions WHERE q_id = $1';
//   db.query(queryString, [query], (error, results) => {
//     if (error) {
//       callback('modles get question failed', error);
//     } else {
//       callback(null, results);
//     }
//   });
// };