const bookData = {
  1234567890: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    listings: [
      '12345',
      '67890',
    ],
  },
  9876543210: {
    title: 'Gödel, Escher, Bach',
    author: 'Douglas Hofstadter',
    listings: [
      '24680',
    ],
  },
};

const listingData = {
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

const sampleData = {
  listingData,
  bookData,
};

export default sampleData;
