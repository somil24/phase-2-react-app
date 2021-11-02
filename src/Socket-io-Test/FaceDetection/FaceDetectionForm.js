import {
  Container,
  Input,
  FormHelperText,
  InputLabel,
  Button,
  TextField,
  Box,
} from "@mui/material";

import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const UserInput = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("This field is required"),
    age: yup
      .number()
      .required("This field is required")
      .typeError("Age must be a valid Integer")
      .min(-1, "Age cannot be less than 0")
      .max(200, "Age cannot be more than 200"),
    number: yup
      .number("Cannot be null please enter a number")
      .required("This field is required")
      .typeError("Number must be a valid Integer"),
    images: yup.mixed(),
    videos: yup.mixed(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  //Was this sending post request before

  const onSubmit = (data) => {
    console.log("Submitting....");
    console.log(data);
    axios
      .post("http://www.mrexy.com:5000", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Some network error");
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100vw",
        padding: "auto",
      }}
    >
      <Box
        sx={{
          bgcolor: "#060B26",
          margin: 5,
          padding: 3,
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ alignSelf: "center" }}>
          <InputLabel sx={{ color: "white", fontWeight: "bold" }}>
            Full Name
          </InputLabel>
          <TextField
            required
            variant="outlined"
            id="validation-outlined-input"
            sx={{ bgcolor: "white", borderRadius: 1 }}
            {...register("firstName")}
          />
          <FormHelperText error>{errors.firstName?.message}</FormHelperText>

          <InputLabel sx={{ color: "white", fontWeight: "bold" }}>
            Age
          </InputLabel>
          <TextField
            {...register("age")}
            required
            variant="outlined"
            id="validation-outlined-input"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <FormHelperText error>{errors.age?.message}</FormHelperText>

          <InputLabel sx={{ color: "white", fontWeight: "bold" }}>
            Phone Number
          </InputLabel>
          <TextField
            {...register("number")}
            required
            variant="outlined"
            id="validation-outlined-input"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <FormHelperText error>{errors.number?.message}</FormHelperText>

          <InputLabel sx={{ color: "white", fontWeight: "bold" }}>
            Insert Photos
          </InputLabel>
          <Input
            type="file"
            {...register("images")}
            inputProps={{ multiple: true, accept: "image/*" }}
            sx={{ color: "white", border: "none" }}
          />
          <FormHelperText error>{errors.images?.message}</FormHelperText>

          <InputLabel sx={{ color: "white", fontWeight: "bold" }}>
            Insert Videos
          </InputLabel>
          <Input
            type="file"
            {...register("vidoes")}
            inputProps={{ multiple: true, accept: "video/*" }}
            sx={{ color: "white", border: "none" }}
          />
          <FormHelperText error>{errors.videos?.message}</FormHelperText>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ float: "right" }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default UserInput;
