import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Table,
  Menu,
  MenuItem,
  TableHead,
  IconButton,
  TableContainer,
  Container,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const Import = (props) => {
  // fill out this component
  const useStyles = makeStyles({
    table: {
      maxWidth: 750,
      marginLeft: "20%",
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [idNum, setIdNum] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIdNum(event.currentTarget.id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <Container className={classes.table}>
      <p></p>
      <Button onClick={props.fetchMakes} variant="contained" color="primary">
        Import
      </Button>
      <h2>COUNT: {props.makes.length}</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Make</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((make, id) => {
              return (
                <TableRow key={make.MakeName}>
                  <TableCell>{make.MakeId}</TableCell>
                  <TableCell align="left">{make.MakeName}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      id={id}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Button onClick={() => props.deleteMake(idNum)}>Delete</Button>
          </MenuItem>
        </Menu>
      </TableContainer>
    </Container>
  );
};

export default Import;
