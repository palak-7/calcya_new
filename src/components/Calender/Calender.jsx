"use client";

import React, { useState, useEffect, useRef } from "react";
import Fullcalender from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addEvents, getEvents } from "../../services/user";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const Calender = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [loadedContent, setLoadedContent] = useState([]);
  const [adminEvents, setAdminEvents] = useState([]);
  const context = useContext(UserContext);
  const [InputValue, setInputValue] = useState("");

  const calendar = useRef(null);
  const setEvents = async () => {
    if (context.user) {
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
  }, [setEvents]);

  //admin can add event
  function handleDateSelect(selectInfo) {
    withReactContent(Swal).fire({
      title: <i>Add An Event</i>,
      input: "text",
      InputValue,
      preConfirm: () => {
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection
        let x = Swal.getInput()?.value;
        if (x) {
          calendarApi.addEvent({
            id: uuidv4(),
            title: x,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
          });
        }
        setAdminEvents(calendarApi.getEvents());
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        deleteEvent(clickInfo.event.id);
      }
    });
  }
  function deleteEvent(id) {
    const newEvents = adminEvents.reduce((acc, item) => {
      if (item.id !== id) {
        acc.push(item);
      }
      return acc;
    }, []);
    setAdminEvents(newEvents);
  }

  //non admins can only view the events
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
  return (
    <div className="lg:transform lg:scale-95 lg:w-[95%] lg:origin-top-left lg:mx-5 w-full">
      {context?.user?.email === "meenusehgal@gmail.com" ? (
        <Fullcalender
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
          //eventsSet={handleEvents}
          events={adminEvents}
          height={"90vh"}
        />
      ) : (
        <Fullcalender
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
          //eventsSet={handleEvents}
          events={adminEvents}
          height={"90vh"}
        />
      )}
      <Sidebar
        currentEvents={currentEvents}
        loadedContent={loadedContent}
        adminEvents={adminEvents}
      />
    </div>
  );
};

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText} </b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
function Sidebar({ currentEvents, adminEvents }) {
  const router = useRouter();
  const context = useContext(UserContext);
  const addAllEvents = async () => {
    const email = context.user.email;
    const response = await addEvents({ adminEvents, email });
    console.log(response);
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
    <div className="demo-app-sidebar">
      {/* instructions */}
      {/* <div className="demo-app-sidebar-section rounded-xl bg-[#f89b18] bg-opacity-40 px-7 py-4">
        <h2 className="flex justify-center text-2xl">Instructions</h2>
        <div className="lg:flex lg:justify-center">
          <ul className="list-disc">
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
      </div> */}

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
export default Calender;
