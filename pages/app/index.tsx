import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { Course, DataContext } from "scorecard-types";
import Summary from "../../components/app/Summary";
import ExtensionConnector, {
  AppLoadState,
} from "../../components/core/ExtensionConnector";

const App: NextPage = () => {
  const dataContext = useContext(DataContext);

  const loadState = useState<AppLoadState>("LOADING");

  const onConnect = (port: chrome.runtime.Port) => {
    port.postMessage({ type: "requestCourses" });
    port.postMessage({ type: "requestGradingCategory" });
    port.postMessage({ type: "requestCourseDisplayNames" });
  };

  const onMessage = (msg: any, port: chrome.runtime.Port) => {
    if (msg.type === "setCourses") {
      dataContext.setData(msg.record);
    }
    if (msg.type == "setCourseDisplayNames") {
      dataContext.setCourseDisplayNames(msg.courseDisplayNames ?? {});
    }
    if (msg.type === "setGradingCategory") {
      dataContext.setGradeCategory(msg.gradingCategory || 0);
    }
  };

  return (
    <ExtensionConnector
      onMessage={onMessage}
      loadState={loadState}
      onConnect={onConnect}
    >
      <Summary />
    </ExtensionConnector>
  );
};

export default App;
