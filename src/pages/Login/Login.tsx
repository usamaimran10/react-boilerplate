import sideLogo from "@/assets/Login/login.svg";
import logo from "@/assets/logo.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
// -------------------------
// Yup Validation Schema
// -------------------------
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

type FormData = Yup.InferType<typeof validationSchema>;

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword((show) => !show);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Login data:", data);
  };

  return (
    <Grid container style={{ height: "100vh" }}>
      {/* Left Panel */}
      <Grid item xl={7} lg={7} xs={12}>
        <Box maxWidth={400} mx="auto">
          {/* Logo */}
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
            <img src={logo} alt="N/A" />
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            Sign in
          </Typography>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email address or user name"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />

            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
              sx={{ mt: 1 }}
            />

            <Typography variant="body2" sx={{ mb: 2 }}>
              By continuing, you agree to the <Link href="#">Terms of use</Link>{" "}
              and <Link href="#">Privacy Policy</Link>.
            </Typography>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#800000",
                color: "#fff",
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 3,
                mb: 2,
                "&:hover": { backgroundColor: "#a30000" },
              }}
            >
              Sign in
            </Button>
          </form>

          <Box textAlign="center">
            <Link href="#" underline="hover">
              Forgot your password
            </Link>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Don’t have an account?{" "}
              <Link href="#" underline="hover">
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Right Panel */}
      <Grid item xl={5} lg={5} sx={{ display: { xs: "none", lg: "block" } }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={sideLogo}
            alt="N/A"
            style={{ width: "100%", height: "100%" }}
          />
          <Box
            sx={{
              position: "absolute",
              left: { xl: "13vw", lg: "8vw" },
              top: { xl: "6vh", lg: "3vh" },
            }}
          ></Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
