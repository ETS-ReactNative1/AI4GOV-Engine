import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip,
  Checkbox
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {
  const classes = useStyles();
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          <TableCell><Checkbox color="primary" /></TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Health Check ID</TableCell>
          <TableCell>Supervisor Name</TableCell>
          <TableCell>Q1</TableCell>
          <TableCell>Q2</TableCell>
          <TableCell>Q3</TableCell>
          <TableCell>Q4</TableCell>
          <TableCell>Q5</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, name, email, product, q1, q2, q3, q4, q5, status }) => (
          <TableRow key={id}>
            <TableCell><Checkbox color="primary" /></TableCell>
            <TableCell className="pl-3 fw-normal">
              <img 
                src={"https://vengreso.com/wp-content/uploads/2016/03/LinkedIn-Profile-Professional-Picture-Sample-Bernie-Borges.png"} 
                alt="logo" 
                className={classes.logo} />
              {name}
            </TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{product}</TableCell>
            <TableCell>{q1}</TableCell>
            <TableCell>{q2}</TableCell>
            <TableCell>{q3}</TableCell>
            <TableCell>{q4}</TableCell>
            <TableCell>{q5}</TableCell>
            <TableCell>
              <Chip label={status} classes={{root: classes[states[status.toLowerCase()]]}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
