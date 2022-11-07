import { useEffect, useState } from "react";
import Proptypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useDispatch } from "react-redux";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { resultListActions } from "../../../store/resultListSlice";

function ResultList({ items }) {
  const [filteredData, setFilteredData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setFilteredData(items);
  }, [items]);

  const removeItemHandler = (id) => {
    dispatch(resultListActions.removeItem(id));
  };
  console.log(items);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 380,
        bgcolor: "background.paper",
        marginLeft: "10%",
        marginTop: "2%",
      }}
    >
      <nav>
        {filteredData?.length > 0 && <p>Tap to delete</p>}
        <List
          style={{
            display: "flex",
            flexFlow: "column wrap",
            gap: "0 30px",
            height: 600,
            overflow: "auto",
            justifyContent: "space-around",
            left: "0px",
            alignItems: "flex-start",
          }}
        >
          <Stack direction="column" spacing={1}>
            {filteredData?.map((item, key) => {
              return (
                <Chip
                  sx={{ height: "35px", with: "50%" }}
                  key={key}
                  label={item.title}
                  onClick={() => removeItemHandler(item)}
                />
              );
            })}
          </Stack>
        </List>
      </nav>
    </Box>
  );
}
ResultList.propTypes = {
  items: Proptypes.array,
};
export default ResultList;
