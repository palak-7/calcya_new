"use client";

import React, { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import Swal from "sweetalert2";
import UserContext from "../../context/UserContext";
import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";
import { addEvents, getEvents } from "../../services/user";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

const CalenderThree = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const uniqueId = uuid();
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents();
      if (JSON.parse(response.adminEvents).length == 0) {
        setEvents([]);
      } else {
        setEvents(JSON.parse(response.adminEvents));
      }
    };
    fetchEvents();
  }, []);
  const context = useContext(UserContext);

  const handleClickDay = async (value) => {
    if (context?.user?.email == id) {
      const { value: eventName } = await Swal.fire({
        title: "Enter Event Name",
        input: "text",
        inputPlaceholder: "Event Name",
        inputValidator: (value) => {
          if (!value) {
            return "Event Name cannot be empty!";
          }
        },
      });

      if (eventName) {
        const existingEvents = events?.filter(
          (event) =>
            new Date(event.date).getTime() === new Date(value).getTime()
        );
        if (existingEvents?.length > 0) {
          const updatedEvents = events?.map((event) => {
            if (event.date.getTime() === value.getTime()) {
              return {
                ...event,
                events: [...event.events, { id: uuid(), name: eventName }],
              };
            }
            return event;
          });
          setEvents(updatedEvents);
        } else {
          setEvents([
            ...events,
            { date: value, id: uuid(), events: [eventName] },
          ]);
        }

        Swal.fire(
          "Event Added!",
          `Your event "${eventName}" has been added.`,
          "success"
        );
      }
    }
  };
  const addAllEvents = async () => {
    const response = await addEvents({ events });
    if (response.success) {
      toast.success("Events Added!", {
        position: "bottom-left",
      });
    } else {
      toast.error("Events Can't be Added!", {
        position: "bottom-left",
      });
    }
  };
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const findEventForDate = (date, events) => {
        for (const event of events) {
          if (date.getTime() === new Date(event.date).getTime()) {
            return event;
          }
        }
        return null;
      };

      const event = findEventForDate(date, events);

      return event ? (
        <div className="event-container">
          {event.events.map((eventName, index) => (
            <p
              key={index}
              className="event text-white bg-primary p-1 rounded text-xs mb-1"
            >
              {eventName}
            </p>
          ))}
        </div>
      ) : null;
    }
  };
  return (
    <div>
      <div className="p-4">
        <Calendar
          onClickDay={handleClickDay}
          value={date}
          onChange={setDate}
          tileContent={tileContent}
          className="border border-gray-300 rounded-lg" // Add custom class
        />
      </div>
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section mt-3 font-serif">
          <h2 className="flex justify-center text-3xl">Upcoming Events</h2>
          {context?.user ? (
            <ul>
              {events?.map((event) => (
                <SidebarEvent
                  key={event.id}
                  event={event}
                  id={id}
                  events={events}
                  setEvents={setEvents}
                />
              ))}
            </ul>
          ) : (
            <div className="flex justify-center mb-2 text-md">
              Login to view events
            </div>
          )}
        </div>
        {context?.user?.email === id && (
          <button
            onClick={addAllEvents}
            className="w-full rounded-lg ease-in-up mb-3 hidden bg-[#321f05] px-8 py-3 font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:flex lg:justify-center lg:px-6 xl:px-9"
          >
            Add All Events
          </button>
        )}
      </div>
    </div>
  );
};

export default CalenderThree;

function SidebarEvent({ event, id, events, setEvents }) {
  const context = useContext(UserContext);
  const handleClick = async (e) => {
    if (context?.user?.email == id) {
      Swal.fire({
        title: "Are You Sure!",
        text: `The Event will be deleted permanently!`,
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const updatedEvents = events.filter((event) => event.id !== e.id);
          setEvents(updatedEvents);
          Swal.fire("Deleted!", "Your event has been deleted.", "success");
        }
      });
    }
  };
  // const capitalizeFirst = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };
  return (
    <li
      onClick={() => handleClick(event)}
      className="hover:cursor-pointer mb-1 mt-1 flex justify-center rounded-lg bg-[#da0b54] bg-opacity-50 p-6 text-lg"
      key={event.id}
    >
      <b className="mr-2">
        <Moment format="YYYY/MM/DD" className="ml-2">
          {event?.date}
        </Moment>
      </b>
      <i>{event.events}</i>
    </li>
  );
}
