import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="inforBox">
        <CardContent>
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
          <h2 className="infoBox__cases">
            {cases &&
              cases.toLocaleString("vi-VN", { maximumFractionDigits: 0 })}
          </h2>
          <Typography className="infoBox__total" color="textSecondary">
            {total &&
              total.toLocaleString("vi-VN", { maximumFractionDigits: 0 })}{" "}
            Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
