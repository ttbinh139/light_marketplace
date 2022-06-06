# Light MarketPlace Document

This is the midterm report for Lighthouse Labs, Group 2. Option 8 was chosen, which will be a buy / sell listing websites.

This will be an app where users can put different items for sale and pick a specific niche.

## Buyers

    Buyers will be able to look for items and contact the sellers via message. The buyers will be able to see items on the main feed, filter item by niche and price, flag/favorite items and send message to the seller.

### Browse items

      All users will be able to browse all the items in the listings. The browsing page will be of grid view that has a thumbail image, title and price.

      There will also be a button to select items as favorites.  There will be a filter section on the left as well where user can select from the range of price and niche and more (stretch).

### Listing page

      A certain listing page will have all the pictures on the left front. It will be able to slide and the other pictures will be able to shown as thumbnail and selected when clicked.

      On the right, the title, price, descriptions, condition, sellers contact, will be on the right. It will also have a button to select as favorites, how long ago the listing was posted and a send message button.

### Favorites items list

      Buyers will have a page of favorites item list where it will have a list view of the items the buyer has favorited listing from the newest. It will have the thumnail picture, title, and price.

## Sellers

    Sellers can post items to sell choosing pictures, price, niche, title and more and also remove and edit items as well. When items get sold, items will be able to get marked as sold and reply to messages from buyers.

### Create/Edit/Delete

      Sellers will be able to create, edit and delete listings of their choice. When adding a listing, sellers can instant upload for images (Minimum 1, Maximum 5) to show thumbnail, the condition of the listing, title, price of the listing, description of the listing and choose the niche of the listing.

      Sellers can also edit their own listings, and edit all the described informations above.

      Sellers can also delete their listings if they change their mind.

### Mark listings as sold

      Similar to delete, but instead when the seller has their listing sold, the seller can mark the listing and sold and buyers can still view the listing but not be able to buy it.

### My page

      My page will be a list view of all the listings, favorites and messages  that the logged in user has. It will be a  simple page with the listings, favorites, and messsages as link to the corresponding pages.

## Login Page

    Hard code login with a simple ID. Midterm report will not focus on this.

## Header/ Footer

    A header and a footer exists, a header with the title, buying, selling, messages link and a login link as well. The footer will be very similar but will have the group name as title, and a back to the top page instead of the login link.

## Message

    There will be buttons that will be redirected to the message page.

    The message page will load all past converstations on the left panel. It will have different colors depending on if the conversation is the user buying or selling. It will also have delete buttons, conversation persons name and click to view.

    When clicked, the messages itself will show how long ago it was last sent as well as and will load all messages instantly. The right handside will have the listing information, link and thumbnail picture of the listing.

    Buyers will also be able to send an email to the seller.

## Database

    There will be a total of 7 table of data.

    1. First table will be users table consisting of
      - id of users (stored in integer)
      - name of users (stored in varchar)
      - email of users (stored in varchar)
      - address of users (stored in text)
      - type of users (stored in boolean), this is to indicate if user is buyer or seller.

    2. Niche table consisting of
      - id of niche (stored in integer)
      - title of niche (stored in varchar), this is to indicate what type of niche

    3. Listings table consisting of
      - id of listing (stored in integer)
      - title of listing (stored in varchar)
      - description of listing (stored in text)
      - price of listing (stored in integer)
      - created of listing (stored in timestamp), indicating when listing was created
      - active of listing (stored in boolean), indicating if item is sold or active
      - condtion of listing (stored in boolean), indicating if item is new or used
      - niche_id of listing (stored in int), foreign key from niche table indicating the type(niche) of item

    4. users_listings table consisting of
      - id of users_listing (stored in integer)
      - listing_id of users_listings (stored in integer), foreign key indicating the listing
      - user_id of users_listing (stored in integer), foreign key indicating the owner of listing

    5. photos table consisting of
      - id of photos (stored in integer)
      - listing_id (stored in integer), foreign key indicating which listing id the photos are for
      - photo_1 through photo_4 (stored in varchar), having url of photos of the listing. Needs to have ATLEAST 1 photo uploaded.

    6. message table consisting of
      - id of message (stored in integer)
      - created_time of message (stored in timestamp)
      - reciever_id of message (stored in int), foreign key indicating the id of the user RECEIVING the message
      - sender_id of message (stored in int), foreign key indicating the id of the user SENDING the message
      - listing_id of message (stored in int), foreign key indicating the id of the listing the message is about

    7. conversations table consisting of
      - id of conversations (stored in integer)
      - message_id of conversations (stored in int),foreign key indicating the id of the message
      - message of message (stored in text), the actual text of the message
