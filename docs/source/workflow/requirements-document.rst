[Home](../home)

# Whitman Books Online Requirements Document  
The CS300 class will develop a web application to facilitate the sale and/or exchange of textbooks between students at Whitman College.  This application will include, at minimum, the following features:  

## User account  
A user will be able to create an account on the site that is linked to their Whitman email address.  The application will allow users to login to and logout of this account. Users will not be able to create listings or view other users’ contact information without creating an account.  This will limit these permissions to Whitman-affiliated users only, for security and privacy reasons.

## List a book for sale  
Once a user has created an account, they will be able to list a book for sale.  Book listings will be linked to the seller’s user account and will include the following pieces of information: 
- The title of the book
- The edition of the book
- The book’s ISBN number
- The book’s general subject matter
- The sale price
- A picture of the book, if the seller chooses to provide one, and
- The condition of the book (level of wear and tear, presence of highlights and underlining, etc.)

## Search for books  
Any user will be able to search the collection of books that have been listed.  Only users that have created accounts will be able to view the name of the seller of a book.  Book listings will be searchable by title, ISBN number or subject matter.  

## Reserve a book  
Users who have created an account will be able to reserve a book by clicking a reserve button on the book’s listing page.  This will send an email notification to the seller’s Whitman email address notifying them that someone has reserved their book and including the Whitman email address of the user who has reserved it. Once the reserve button has been clicked, the book listing will no longer appear publicly.  The listing will remain in the application’s database until the seller indicates that the book has been sold.  The buyer and the seller will both have the ability to unreserve the book in case of a mistake or in case the sale does not go through, in which case it will reappear publicly. It will then be up to the seller to contact the buyer via email, outside of this application’s interface, to arrange the sale. The application will recommend that users meet in a public location on campus to complete the sale.

**Note**: Further consideration of the time lapse between a book taken out of circulation and an incomplete sale to be made in the future.