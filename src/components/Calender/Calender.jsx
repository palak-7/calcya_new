"use client";

import React, { useState, useEffect, useRef, useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addEvents, getEvents } from "../../services/user";
import UserContext from "../../context/UserContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [loadedContent, setLoadedContent] = useState([]);
  const [adminEvents, setAdminEvents] = useState([]);
  const context = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  const calendar = useRef(null);

  const setEvents = async () => {
    if (context?.user) {
      const result = await getEvents();
      if (result.success) {
        try {
          const adminEventsArray = JSON.parse(result.adminEvents);
          setAdminEvents(adminEventsArray);
        } catch (error) {
          console.error("Error parsing adminEvents:", error);
        }
      }
    }
  };

  useEffect(() => {
    setEvents();
  }, []);

  // Admin can add event
  function handleDateSelect(selectInfo) {
    withReactContent(Swal).fire({
      title: <i>Add An Event</i>,
      input: "text",
      inputValue: inputValue,
      preConfirm: () => {
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // Clear date selection
        let eventTitle = Swal.getInput()?.value;
        if (eventTitle) {
          const newEvent = {
            id: uuidv4(),
            title: eventTitle,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
          };
          calendarApi.addEvent(newEvent);
          setAdminEvents([...adminEvents, newEvent]);
        }
      },
    });
  }

  function handleEventClick(clickInfo) {
    Swal.fire({
      title: "Are You Sure!",
      text: `The Event '${clickInfo.event.title}' will be deleted permanently!`,
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        clickInfo.event.remove();
        Swal.fire("Deleted!", "Your event has been deleted.", "success");
        deleteEvent(clickInfo.event.id);
      }
    });
  }

  function deleteEvent(id) {
    const newEvents = adminEvents.filter((event) => event.id !== id);
    setAdminEvents(newEvents);
  }

  // Non-admins can only view the events
  function showEvents(clickInfo) {
    Swal.fire({
      title: `${clickInfo.event.title}`,
      text: `Date: ${formatDate(clickInfo.event.start, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`,
    });
  }

  const addAllEvents = async () => {
    const email = context.user.email;
    const response = await addEvents({ adminEvents, email });
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

  return (
    <div className="lg:transform lg:scale-95 lg:w-[95%] lg:origin-top-left lg:mx-5 w-full">
      {context?.user?.email === "meenusehgal@gmail.com" ? (
        <FullCalendar
          ref={calendar}
          editable={true}
          selectable={true}
          selectMirror={true}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "",
            center: "title",
            end: "",
          }}
          footerToolbar={{
            start: "today,prev,next",
            center: "",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          events={adminEvents}
          height={"90vh"}
        />
      ) : (
        <FullCalendar
          ref={calendar}
          selectMirror={true}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "",
            center: "title",
            end: "",
          }}
          footerToolbar={{
            start: "today,prev,next",
            center: "",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          eventContent={renderEventContent} // custom render function
          eventClick={showEvents}
          events={adminEvents}
          height={"90vh"}
        />
      )}
      <Sidebar
        currentEvents={currentEvents}
        loadedContent={loadedContent}
        adminEvents={adminEvents}
        addAllEvents={addAllEvents}
      />
    </div>
  );
};

// A custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText} </b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function Sidebar({ currentEvents, adminEvents, addAllEvents }) {
  const context = useContext(UserContext);

  return (
    <div className="demo-app-sidebar">
      <div className="demo-app-sidebar-section mt-3 font-serif">
        <h2 className="flex justify-center text-3xl">Upcoming Events</h2>
        <ul>
          {adminEvents?.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
        <ul>
          {currentEvents?.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
      {context?.user?.email === "meenusehgal@gmail.com" && (
        <button
          onClick={addAllEvents}
          className="w-full rounded-lg ease-in-up mb-3 hidden bg-[#321f05] px-8 py-3 font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:flex lg:justify-center lg:px-6 xl:px-9"
        >
          Add All Events
        </button>
      )}
    </div>
  );
}

function SidebarEvent({ event }) {
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <li
      className="mb-1 mt-1 flex justify-center rounded-lg bg-[#da0b54] bg-opacity-50 p-6 text-lg"
      key={event.id}
    >
      <b className="mr-2">
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{capitalizeFirst(event.title)}</i>
    </li>
  );
}

export default Calendar;
