import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function ListTab(callBackList, list) {
  const [listTypes, setListTypes] = useState([{ name: "Todo List", id: list }]);
  const tabs = listTypes.map((lists) => <Tab>{lists.name}</Tab>);
  return (
    <Tabs>
      <TabList>{tabs}</TabList>
    </Tabs>
  );
}

export default ListTab;
