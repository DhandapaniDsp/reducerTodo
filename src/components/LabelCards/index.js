import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { BsCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { labelcardStyle } from "./style";
export const LabelCards = ({ note, deleteBook }) => {
  const [complete, setComplete] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const completeHandler = () => setComplete(complete ? false : true);
 
  function Daymaker(date) {
    const today = new Date();
    let tomorrow = new Date();
    let yesterday = new Date();

    tomorrow.setDate(today.getDate() + 1);
    yesterday.setDate(today.getDate() - 1);
    let input = new Date(date);
    if (today.getDate() === input.getDate()) {
      return "Today " + input.toLocaleTimeString();
    } else if (tomorrow.getDate() === input.getDate()) {
      return "Tomorrow " + input.toLocaleTimeString();
    } else if (yesterday.getDate() === input.getDate()) {
      return "Yesterday " + input.toLocaleTimeString();
    } else {
      let date = input.toLocaleDateString();
      let time = input.toLocaleTimeString();
      return `${date} ${time}`;
    }
  }
  return note.map((book) => (
    <>
      <Box sx={labelcardStyle.Sx}>
        <Box>
          <Typography
            variant="body1"
            sx={{
              padding: "5px",
              textDecoration: complete ? "line-through" : "none",
            }}
          >
            {book.title}
          </Typography>
          <Typography variant="body2" sx={{ padding: "5px" }}>
            {Daymaker(book.date)}
          </Typography>
        </Box>
        <Box sx={labelcardStyle.iconBox}>
          <Checkbox
            color="primary"
            {...label}
            icon={<BsCircle color="primary" width="20px" height="20px" />}
            checkedIcon={<AiOutlineCheckCircle />}
            sx={labelcardStyle.checkBox}
            onClick={completeHandler}
          />
          <Box sx={labelcardStyle.delete}>
            <RiDeleteBinLine onClick={() => deleteBook(book.date)} />
          </Box>
        </Box>
      </Box>
    </>
  ));
};
