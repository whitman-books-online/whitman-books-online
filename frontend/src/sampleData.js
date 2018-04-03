const BOOK_DATA = {
  1234567890: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    listingIds: [
      '12345',
      '67890',
    ],
  },
  9876543210: {
    title: 'Gödel, Escher, Bach',
    author: 'Douglas Hofstadter',
    listingIds: [
      '24680',
    ],
  },
};

const LISTING_DATA = {
  12345: {
    price: '100',
    condition: 'Good',
    bookId: '1234567890',
  },
  67890: {
    price: '120',
    condition: 'Excellent',
    bookId: '1234567890',
  },
  24680: {
    price: '65',
    condition: 'Okay',
    bookId: '0987654321',
  },
};

const USER_DATA = {
  a1s2d3: {
    name: 'Richard Farman',
    email: 'farmanrl@whitman.edu',
    userId: 'a1s2d3',
  },
  qw34rt: {
    name: 'Other Person',
    email: 'otherperson@whitman.edu',
    userId: 'qw34rt',
  },
  xx00xx: {
    name: 'Another Person',
    emailJ: 'anotherperson@whitman.edu',
    userId: 'xx00xx',
  }
};

const sampleData = {
  BOOK_DATA,
  LISTING_DATA,
  USER_DATA,
};

export default sampleData;
