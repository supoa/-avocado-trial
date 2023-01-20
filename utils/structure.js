const data = {
  _id: "633d3d73fe0b7a69bedbee39",
  name: "user-socket",
  picture:
    "https://firebasestorage.googleapis.com/v0/b/avocado-4ab6e.appspot.com/o/poll%2Fshipping.png?alt=media&token=f04898c6-777a-4428-b7cc-1f6db9a826fa",
  teamMembers: [
    {
      _id: "6337fa8d61a0d3ec94bee6f0",
      name: "5730",
      picture: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      teamMembers: [
        {
          _id: "633d3d73fe0b7a69bedbee39",
          name: "user-socket",
          picture:
            "https://firebasestorage.googleapis.com/v0/b/avocado-4ab6e.appspot.com/o/poll%2Fshipping.png?alt=media&token=f04898c6-777a-4428-b7cc-1f6db9a826fa",
          teamMembers: [
            {
              _id: "6337fa8d61a0d3ec94bee6f0",
              name: "5730",
              picture:
                "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
              teamMembers: [
                {
                  _id: "633d3d73fe0b7a69bedbee39",
                  name: "user-socket",
                  picture:
                    "https://firebasestorage.googleapis.com/v0/b/avocado-4ab6e.appspot.com/o/poll%2Fshipping.png?alt=media&token=f04898c6-777a-4428-b7cc-1f6db9a826fa",
                },
              ],
            },
            {
              picture:
                "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
              teamMembers: [],
              _id: "6337822a7ad031aaa186b703",
              name: "mark40",
            },
            {
              picture:
                "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
              teamMembers: [],
              _id: "6337020dcf4ebd008d0432a5",
              name: "testuser 3",
            },
          ],
        },
      ],
    },
    {
      picture: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      teamMembers: [],
      _id: "6337822a7ad031aaa186b703",
      name: "mark40",
    },
    {
      picture: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      teamMembers: [],
      _id: "6337020dcf4ebd008d0432a5",
      name: "testuser 3",
    },
  ],
};

const array = [];
const breadth = (data) => {
  array.push(data);
  data.teamMembers &&
    data.teamMembers.map((user) => {
      array.push(user);
      user.teamMembers &&
        user.teamMembers.map((user) => {
          array.push(user);
          user.teamMembers &&
            user.teamMembers.map((user) => {
              array.push(user);
              user.teamMembers &&
                user.teamMembers.map((user) => {
                  array.push(user);
                  user.teamMembers &&
                    user.teamMembers.map((user) => {
                      array.push(user);
                    });
                });
            });
        });
    });
  return array;
};

console.log(breadth(data));

export { breadth, data };
