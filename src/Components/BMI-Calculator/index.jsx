import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddLocation } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputFiled from "./InputFiled";

BMICalculator.propTypes = {};

function BMICalculator(props) {
  const schema = yup.object({
    weight: yup
      .number()
      .typeError("Vui lòng nhập cân nặng!!!")
      .min(1, "Vui lòng nhập cân nặng hợp lệ!!!"),
    height: yup
      .number()
      .typeError("Vui lòng nhập cân nặng!!!")
      .min(1, "Vui lòng nhập chiều cao hợp lệ!!!"),
  });

  const form = useForm({
    defaultValues: {
      weight: "",
      height: "",
    },
    resolver: yupResolver(schema),
  });

  const [BMI, setBMI] = useState("");
  const [translate, setTranslate] = useState(false);
  const [BMIPercent, setBMIPercent] = useState(0);

  const handleSubmit = (data) => {
    if (!data) return;
    const { weight, height } = data;
    const result =
      Math.round((Number(weight) / Math.pow(Number(height) / 100, 2)) * 10) /
      10;
    setBMI(result);
  };

  useEffect(() => {
    setTranslate(true);
    setBMIPercent(BMI <= 40 ? `${(100 / 40) * BMI}%` : "100%");
  }, [BMI]);

  const Item = styled(Box)(({ theme }) => ({
    textAlign: "center",
    padding: "8px",
  }));

  return (
    <Grid container sx={{ backgroundColor: "#172b4c", textAlign: "center" }}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          color="white"
          marginBottom="48px"
          marginTop="32px"
        >
          BMI Calculator
        </Typography>
      </Grid>
      <Grid item xs={12} padding="32px">
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Grid item xs={12}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <InputFiled
                label="Cân nặng"
                form={form}
                name="weight"
                unit="kg"
              />
              <InputFiled
                label="Chiều cao"
                form={form}
                name="height"
                unit="cm"
              />
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ borderRadius: "20px", margin: "32px 0" }}
              display="block"
            >
              Tính toán BMI
            </Button>
          </Grid>

          <Box sx={{ textAlign: "start" }}>
            <Stack direction="row" justifyContent="">
              <Typography variant="h5" color="white" marginBottom={2}>
                BMI:&nbsp;
              </Typography>
              <Typography variant="h5" color="white" fontWeight="700">
                {BMI}
              </Typography>
            </Stack>

            <motion.div
              animate={{
                x: translate ? BMIPercent : 0,
              }}
            >
              <AddLocation
                sx={{ color: "white", fontSize: "32px" }}
              ></AddLocation>
            </motion.div>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ width: "100%", marginLeft: "7px" }}
            >
              <Item sx={{ backgroundColor: "#f6d200", width: "45%" }}>
                Thiếu cân
              </Item>
              <Item sx={{ backgroundColor: "#8cc53e", width: "17.5%" }}>
                Bình thường
              </Item>
              <Item sx={{ backgroundColor: "#da871a", width: "12.5%" }}>
                Thừa cân
              </Item>
              <Item sx={{ backgroundColor: "#f04123", width: "25%" }}>
                Béo phì
              </Item>
            </Stack>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
}

export default BMICalculator;
