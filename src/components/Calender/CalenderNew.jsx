// components/CalendarComponent.js
import React, { useState, useEffect } from "react";
import Calendar from "react-awesome-calendar";
import moment from "moment";
import Swal from "sweetalert2";

const CalendarNew = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const handleDayClick = (event) => {
      const { target } = event;
      if (
        target.classList.contains("day-cell") ||
        target.classList.contains("day-number")
      ) {
        event.stopPropagation();
        event.preventDefault();

        Swal.fire({
          title: "Update Event",
          html:
            '<input id="swal-title" class="swal2-input" placeholder="Event Title">' +
            '<input id="swal-end-date" type="date" class="swal2-input">',
          focusConfirm: false,
          preConfirm: () => {
            const title = document.getElementById("swal-title").value;
            const endDate = document.getElementById("swal-end-date").value;
            if (!title || !endDate) {
              Swal.showValidationMessage("Please enter title and end date");
            }
            return { title, endDate };
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const { title, endDate } = result.value;
            const newEvent = {
              id: events.length + 1,
              color: "#4caf50", // Set color for new event
              from: moment(target.dataset.date).format("YYYY-MM-DD"),
              to: endDate,
              title,
            };
            setEvents([...events, newEvent]);
            Swal.fire("Event Updated!", "", "success");
          }
        });
      }
    };

    document.addEventListener("click", handleDayClick, true);

    return () => {
      document.removeEventListener("click", handleDayClick, true);
    };
  }, [events]);

  return (
    <div className="mx-auto max-w-lg p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">My Awesome Calendar</h1>
      <Calendar events={events} showNavigation className="mt-4" />
    </div>
  );
};

export default CalendarNew;
