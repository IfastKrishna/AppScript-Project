import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { request } from "../../utils";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Both username and password are required");
      return;
    }

    try {
      setDisabled(true);
      request("addData", { username, password })
        .then((res) => {
          console.log(res);
          setDisabled(false);
          setError("");
          setUsername("");
          setPassword("");
        })
        .catch((err) => {
          console.error(err);
          setDisabled(false);
        });
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while processing the request");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isMediumScreen = useMediaQuery("(min-width:500px)");

  return (
    <Box
      display="flex"
      marginTop="100px"
      justifyContent="center"
      textAlign="center"
    >
      <Card
        sx={{
          width: isMediumScreen ? "md" : "100%",
          maxWidth: isMediumScreen ? "md" : "100%",
        }}
      >
        <CardContent>
          <FormControl component="form" onSubmit={handleLogin}>
            <Typography color="text.secondary" variant="h5" gutterBottom>
              RAJMANDIR HYPER MARKET
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="username"
                    label="Username"
                    variant="filled"
                    error={!!error}
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="password"
                    label="Password"
                    variant="filled"
                    type={showPassword ? "text" : "password"}
                    error={!!error}
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <FormHelperText error>{error}</FormHelperText>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={disabled}
              style={{ marginTop: "15px", display: "block", width: "100%" }}
            >
              Login
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
