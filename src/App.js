import "./App.css";
import { Fragment, useEffect } from "react";
import Navbar from "./components/Navbar/navbar.componenet";
import ListContainer from "./components/Navbar/ListItem/listContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmails } from "./store/emailsSlice";
import { fetchshopItems } from "./store/shopItemsSlice";
import ResultList from "./components/Navbar/ListItem/resultList";

function App() {
  const dispatch = useDispatch();
  const emailList = useSelector((state) => state.emails.data);
  const shopItemsList = useSelector((state) => state.shopItems.data);
  const resultListItems = useSelector((state) => state.resultList.data);
  useEffect(() => {
    dispatch(fetchEmails());
    dispatch(fetchshopItems());
  }, [dispatch]);
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="listsContainer">
        <ListContainer items={emailList}></ListContainer>
        <ListContainer items={shopItemsList}></ListContainer>
        <ResultList items={resultListItems}></ResultList>
      </div>
    </Fragment>
  );
}

export default App;
