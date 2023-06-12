import { createContext, useState } from "react";

export const BookingsContext = createContext({
  booking: [],
  addBooking: (object) => {},
});

function BookingsContextProvider({ children }) {
  const [bookingDetails, setBookingsDetails] = useState([]);

  function addBooking(object) {
    setBookingsDetails((currentBookings) => [...currentBookings, object]);
  }

  const value = {
    booking: bookingDetails,
    addBooking: addBooking,
  };

  return (
    <BookingsContext.Provider value={value}>
      {children}
    </BookingsContext.Provider>
  );
}

export default BookingsContextProvider;
