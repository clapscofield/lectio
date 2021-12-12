import React, { useEffect, useState } from "react";
import { readString } from "react-papaparse";
import goodreadsWorks from "../../../assets/csv/goodreads_works.csv";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { visuallyHidden } from "@mui/utils";
import Icon from '@mui/material/Icon';
import { getLineAndCharacterOfPosition } from "typescript";

export default function DatasetTable() {

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }


  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  //id	title	isbn	isbn13	asin	image_url	publication_year	publication_month	publication_day	publisher	is_ebook	description	num_pages	format	format_summ	edition_information	average_rating	ratings_count	text_reviews_count	num_of_authors	similar_books	num_of_similar_books	popular_shelves	to_read	currently_reading	favorites	num_of_shelves	work_url
  const headCells = [
    {
      id: "id",
      numeric: true,
      disablePadding: true,
      label: "ID"
    },
    {
      id: "titulo",
      numeric: true,
      disablePadding: false,
      label: "Título"
    },
    {
      id: "anoPublicacao",
      numeric: false,
      disablePadding: false,
      label: "Ano de publicação"
    },
    {
      id: "isbn",
      numeric: true,
      disablePadding: false,
      label: "ISBN"
    },
    {
      id: "numeroReviews",
      numeric: true,
      disablePadding: false,
      label: "Número de reviews"
    },
    {
      id: "formato",
      numeric: true,
      disablePadding: false,
      label: "FORMATO"
    },
    {
      id: "numpaginas",
      numeric: false,
      disablePadding: false,
      label: "Número de páginas"
    },
    {
      id: "editora",
      numeric: false,
      disablePadding: false,
      label: "Editora"
    }
  ];

  function EnhancedTableHead(props) {
    const {
      order,
      orderBy,
      onRequestSort
    } = props;

    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired
  };

  const EnhancedTableToolbar = (props) => {
    //const { numSelected } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...({
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              )
          })
        }}
      >
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Goodreads Works csv
          </Typography>
        

        <Tooltip title="Filter list">
          <IconButton>
          <Icon baseClassName="fas" className="fa-regular fa-filter" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
  };

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("titulo");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([]);
  const dados = []

  function readCsv(){
    const linhaTemp = []
    const papaConfig = {
      delimiter: "\t",
      header: "true",
      complete: (results, file) => {
        //setDados(results.data);
        dados.push(results.data);
        dados[0].forEach(item => {
          linhaTemp.push(item);
        })
        setRows(linhaTemp)
        console.log("linhas: ", rows);
      },
      download: true,
      error: (error, file) => {
        console.log("Error while parsing:", error, file);
      }
    };
  
    readString(goodreadsWorks, papaConfig);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };


  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  
  readCsv();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="flex flex-wrap w-full px-12 mr-auto ml-auto mt-6">
                  <h1 className="text-5xl mb-2 font-semibold leading-normal">
                    Visualização tabela de dados
                  </h1>
                  <Box sx={{ width: "100%" }}>
                    <Paper sx={{ width: "100%", mb: 2 }}>
                      <EnhancedTableToolbar numSelected={selected.length} />
                      <TableContainer>
                        <Table
                          sx={{ minWidth: 750 }}
                          aria-labelledby="tableTitle"
                          size={dense ? "small" : "medium"}
                        >
                          <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                          />
                          <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                  <TableRow
                                    hover
                                    onClick={(event) =>
                                      handleClick(event, row.title)
                                    }
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.title}
                                  >
                                    <TableCell
                                      component="th"
                                      id={labelId}
                                      scope="row"
                                      padding="none"
                                    >
                                      {row.id}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.title}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.publication_year}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.isbn}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.text_reviews_count}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.format}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.num_pages}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.publisher}
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                            {emptyRows > 0 && (
                              <TableRow
                                style={{
                                  height: (dense ? 33 : 53) * emptyRows
                                }}
                              >
                                <TableCell colSpan={6} />
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Paper>
                    <FormControlLabel
                      control={
                        <Switch checked={dense} onChange={handleChangeDense} />
                      }
                      label="Dense padding"
                    />
                  </Box>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
