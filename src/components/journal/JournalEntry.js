import dayjs from "dayjs";
import React from "react";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch();
  const advancedFormat = require("dayjs/plugin/advancedFormat");
  dayjs.extend(advancedFormat);

  const handleEntryClick = () => {
    dispatch(
      activeNote(id, {
        title,
        body,
        url,
        date,
      })
    );
  };

  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-day-box">
        <span>{dayjs(date).format("dddd")}</span>
        <h4>{dayjs(date).format("Do")}</h4>
      </div>
    </div>
  );
};
