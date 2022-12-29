import React, { useState, useReducer } from "react";
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
import { v4 as uuid } from "uuid";
import { reducer } from "../../reduce/reducer";
import { ACTIONS } from "../../reduce/actions";

export const Cards = (props) => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [todo, setTodo] = useState({
    name: "",
    date: "",
  });
  const [time, setTime] = React.useState(new Date());

  const handleChange = (val, key) => {
    setTodo({ ...todo, [key]: val });
  };
  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
  };
  const handleAllDelete = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.DELETE_ALL_TODO, payload: { todo: todo } });
    setTodo("");
  };
  function handleSubmit(e) {
    if (todo.date && !todo.name) {
      document.getElementById("err").innerText = "Enter purpose of schedule..";
    } else if (!todo.date && todo.name) {
      document.getElementById("err").innerText =
        "Enter scheduled time and date..";
    } else if (!todo.date && !todo.name) {
      document.getElementById("err").innerText = "Please enter above fields!";
    } else if (todo.date && todo.name) {
      document.getElementById("err").innerText = " ";
      e.preventDefault();
      dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } });
      setTodo("");
    }
  }
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
  const date = weekday[d.getDay()].slice(0, 3) + " " + d.getDate();

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
  return (
    <>
      <Box sx={cardStyle.titlecontent}>
        <h5>TODO List(useReducer method)</h5>
      </Box>

      <Card sx={cardStyle.mainCard}>
        <Box>
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
              <Typography variant="h6"> {date} </Typography>
              <Typography variant="h5">{clock}</Typography>
            </Box>
          </CardActionArea>
          <Box sx={cardStyle.boxMediate}>
            <Box sx={cardStyle.noteBg}>
              <Box
                component={InputBase}
                fullWidth
                placeholder="Note"
                id="fullWidth"
                sx={{
                  padding: "13px",
                }}
                onChange={(e) => handleChange(e.target.value, "name")}
                value={todo.name ?? ""}
                // helperText={data?.error?.email}
                // error={data?.error?.email ? true : false}
              />
              <Box
                component={InputBase}
                type="datetime-local"
                sx={cardStyle.dateBase}
                value={todo.date ?? ""}
                onChange={(e) => handleChange(e.target.value, "date")}
              />
            </Box>
            <Button
              variant="contained"
              sx={cardStyle.plusBtn}
              onClick={handleSubmit}
            >
              <Box sx={{ color: "#ffffff" }}>
                <AiOutlinePlus />
              </Box>
            </Button>
          </Box>
        </Box>
        <Typography
          component="h6"
          sx={cardStyle.helperText}
          id="err"
        ></Typography>
        <CardContent>
          <Box sx={cardStyle.cardContent}>
            <Box sx={{ height: "530px", width: "500px" }}>
              {todos.map((val) => {
                return (
                  <>
                    <LabelCards item={val} fun={handleDelete} />
                  </>
                );
              })}
              <Button onClick={handleAllDelete}>Remove All</Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
