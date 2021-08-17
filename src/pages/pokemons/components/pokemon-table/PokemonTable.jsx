import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from 'pages/pokemons/actions';
import { makeStyles } from '@material-ui/core/styles';
import { uuidv4 } from 'helpers/guid-generator';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

const columns = [
  { id: 'id', label: 'Pokemon Id', minWidth: 100 },
  { id: 'name', label: 'Pokemon Name', minWidth: 170 },
  { id: 'frontImage', label: 'Front Image', minWidth: 170 },
  { id: 'height', label: 'Height', minWidth: 170 },
  { id: 'weight', label: 'Weight', minWidth: 170 }
];

let rows = []

const useStyles = makeStyles({
  root: {
    width: '100%',
  }
});

const PokemonTable = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch()

  const { pokemons, loading } = useSelector(
    state => ({
      pokemons: state.pokemonListReducer.pokemonTableReducer.pokemons,
      loading: state.pokemonListReducer.pokemonTableReducer.loading
    })
  );

  React.useEffect(() => {
    dispatch(actionCreators.getPokemonListRequest())
  }, [dispatch])

  console.log(pokemons);

  rows = pokemons && pokemons.length !== 0 ? pokemons.map((item) => {
    return {
      id: item.id,
      name: item.name,
      frontImage: item.sprites.front_default,
      height: item.height,
      weight: item.weight
    }
  }) : []

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={uuidv4()}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={uuidv4()} align={column.align}>
                        {column.id === "frontImage" ? <img src={value} /> : value}
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default PokemonTable;