
import { colors, Box, TextField } from '@mui/material';
import './App.css'
// import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <div>
         
      <TextField
        id="outlined-basic"
        label="Enter Text"
        placeholder="Enter Text"
        variant="outlined"
        slotProps={{
          input: {
            sx: {
              color: "white",
              "&::placeholder": {
                color: "grey",
                opacity: 1,
              },
            },
          },
          inputLabel: {
            sx: {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
      />
<TextField
        id="outlined-basic"
        label="Enter Text"
        placeholder="Enter Text"
        variant="outlined"
        slotProps={{
          input: {
            sx: {
              mb:2,
              color: "white",
              "&::placeholder": {
                color: "grey",
                opacity: 1,
              },
            },
          },
          inputLabel: {
            sx: {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
      /><TextField
        id="outlined-basic"
        label="Enter Text"
        placeholder="Enter Text"
        variant="outlined"
        slotProps={{
          input: {
            sx: {
              color: "white",
              "&::placeholder": {
                color: "grey",
                opacity: 1,
              },
            },
          },
          inputLabel: {
            sx: {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
      />
      </div>
    </>
  )
}

export default App
