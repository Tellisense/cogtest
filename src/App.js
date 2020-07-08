import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "content", label: "Content", minWidth: 100 },
];

const rows = [
  { name: "a", content: "a Content" },
  { name: "b", content: "b Content" },
  { name: "c", content: "c Content" },
  { name: "d", content: "d Content" },
  { name: "e", content: "e Content" },
  { name: "f", content: "f Content" },
  { name: "g", content: "g Content" },
  { name: "h", content: "h Content" },
  { name: "i", content: "i Content" },
  { name: "j", content: "j Content" },
  { name: "k", content: "k Content" },
  { name: "l", content: "l Content" },
  { name: "m", content: "m Content" },
  { name: "n", content: "n Content" },
  { name: "o", content: "o Content" },
  { name: "p", content: "p Content" },
  { name: "q", content: "q Content" },
  { name: "r", content: "r Content" },
  { name: "s", content: "s Content" },
  { name: "t", content: "t Content" },
  { name: "u", content: "u Content" },
];

const useStyles = makeStyles({
  outerContainer: {
    marginTop: "5rem",
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const App = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <Container className={classes.outerContainer} maxWidth="sm">
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 6, 12]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
};

export default App;
