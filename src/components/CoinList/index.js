import React from "react";
import Sort from "../Sort";
import CoinCard from "../CoinCard";
import CoinTable from "../CoinTable";
import * as st from "./style";

const CoinList = ({ list, view }) => {
  let displayList;
  let displaySort;

  if (!list || !list.length) {
    return <st.LoadingWrapper>Loading...</st.LoadingWrapper>;
  }

  if (view === "grid") {
    displaySort = (
      <st.Menu>
        <Sort />
      </st.Menu>
    );

    displayList = (
      <st.GridWrapper>
        {list.map(coin => (
          <st.GridItem key={coin.id}>
            <CoinCard info={coin} />
          </st.GridItem>
        ))}
      </st.GridWrapper>
    );
  } else {
    displayList = <CoinTable list={list} />;
  }

  return (
    <st.List>
      {displaySort}
      {displayList}
    </st.List>
  );
};

export default CoinList;
