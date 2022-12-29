import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, TextField } from "@mui/material";
import { cardStyle } from "./style";
import { Box } from "@mui/system";
import flower from "../../assets/images/yellow.png";
import { AiOutlinePlus } from "react-icons/ai";
import InputBase from "@mui/material/InputBase";
import { LabelCards } from "../LabelCards";
export const Cards = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [time, setTime] = React.useState(new Date());
  //livedate
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const dateTime = weekday[d.getDay()].slice(0, 3) + " " + d.getDate();

  //  livetime
  const am_pm = time.getHours() >= 12 ? "PM" : "AM";
  const hours =
    time.getHours() > 12 ? `${time.getHours() - 12}` : time.getHours();
  const clock = hours + ":" + time.getMinutes() + " " + am_pm;
  //displaying current time fn
  React.useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  const handleAddBookSubmit = (e) => {
    if (date && !title) {
      document.getElementById("err").innerText = "Enter purpose of schedule..";
    } else if (!date && title) {
      document.getElementById("err").innerText =
        "Enter scheduled time and date..";
    } else if (!date && !title) {
      document.getElementById("err").innerText = "Please enter above fields!";
    } else if (date && title) {
      document.getElementById("err").innerText = " ";
      e.preventDefault();
      let book = {
        title,
        date,
      };
      setNote([...note, book]);
      setTitle("");
      setDate("");
    }
  };

  const deleteBook = (date) => {
    const filteredBooks = note.filter((element, index) => {
      return element.date !== date;
    });
    setNote(filteredBooks);
  };
  useEffect(() => {
    localStorage.setItem("Note", JSON.stringify(note));
  }, [note]);
  
  return (
    <>
      <Box sx={cardStyle.titlecontent}>
        <h5>TODO List(state method)</h5>
      </Box>

      <Card sx={cardStyle.mainCard}>
        <CardActionArea>
          <Box>
            <CardMedia
              component="img"
              height="140"
              image={flower}
              alt="green iguana"
              sx={cardStyle.cardAction}
            />
          </Box>

          <Box sx={cardStyle.timeText}>
            <Typography variant="h6">{dateTime}</Typography>
            <Typography variant="h5">{clock}</Typography>
          </Box>
        </CardActionArea>

        <Box sx={cardStyle.boxMediate}>
          <Box sx={cardStyle.noteBg}>
            <InputBase
              fullWidth
              placeholder="Note"
              id="fullWidth"
              sx={{
                padding: "13px",
              }}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <InputBase
              type="datetime-local"
              sx={cardStyle.dateBase}
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </Box>
          <Button
            variant="contained"
            sx={cardStyle.plusBtn}
            onClick={handleAddBookSubmit}
          >
            <Box sx={{ color: "#ffffff" }}>
              <AiOutlinePlus />
            </Box>
          </Button>
        </Box>
        <Typography
          component="h6"
          sx={cardStyle.helperText}
          id="err"
        ></Typography>
        <CardContent>
          <Box sx={cardStyle.cardContent}>
            <Box sx={{ height: "530px", width: "500px" }}>
              {note.length > 0 && (
                <LabelCards note={note} deleteBook={deleteBook} />
              )}
              <Button onClick={() => setNote([])}>Remove All</Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
