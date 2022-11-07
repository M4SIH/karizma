import { useEffect, useState } from "react";
import Proptypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { resultListActions } from "../../../store/resultListSlice";
import Button from "@mui/material/Button";

function ListContainer({ items }) {
  const [searchField, setSearchField] = useState("");
  const [filteredData, setFilteredData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setFilteredData(items);
  }, [items]);
  const searchFiledHandler = (query) => {
    if (!query || query === "") {
      setFilteredData(items);
    } else {
      const filteredRows = items.filter((row) => {
        return row.title.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredData(filteredRows);
    }
  };
  const pickupItemHandler = (item) => {
    dispatch(resultListActions.setItem(item));
  };
  const removeAllItemHandler = () => {
    dispatch(resultListActions.removeAllItem());
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 380,
        bgcolor: "background.paper",
        marginLeft: "2%",
        marginTop: "2%",
        padding: "5px",
        height: "60%",
      }}
    >
      <TextField
        sx={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "2%",
        }}
        id="outlined-basic"
        variant="outlined"
        placeholder="Search..."
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        onInput={(e) => searchFiledHandler(e.target.value)}
      />
      <nav>
        <List
          style={{
            display: "flex",
            flexFlow: "row wrap",
            gap: "0 30px",
            height: 600,
            overflow: "auto",
          }}
        >
          {filteredData?.map((item, key) => {
            return (
              <ListItem
                disablePadding
                disableGutters={true}
                alignItems="flex-start"
                key={key}
                onClick={() => pickupItemHandler(item)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <InsertPhotoIcon></InsertPhotoIcon>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    secondary={item.email ? item.email : item.description}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
      <Button
        sx={{ width: "100%", position: "static", zIndex: "10" }}
        variant="contained"
        onClick={removeAllItemHandler}
      >
        Clear List
      </Button>
    </Box>
  );
}
ListContainer.propTypes = {
  items: Proptypes.array,
};
export default ListContainer;
