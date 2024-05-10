import "./App.css";
import {
  CommunicationIdentifier,
  MicrosoftTeamsAppIdentifier,
} from "@azure/communication-common";
import {
  Spinner,
  Stack,
  initializeIcons,
  registerIcons,
  Text,
} from "@fluentui/react";
import { CallAdd20Regular, Dismiss20Regular } from "@fluentui/react-icons";
import logo from "./nclogo.svg";

import { CallingWidgetComponent } from "./components/CallingWidgetComponent";

registerIcons({
  icons: { dismiss: <Dismiss20Regular />, callAdd: <CallAdd20Regular /> },
});
initializeIcons();
function App() {
  /**
   * Token for local user.
   */
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwNUVCMzFEMzBBMjBEQkRBNTMxODU2MkM4QTM2RDFCMzIyMkE2MTkiLCJ4NXQiOiJZRjZ6SFRDaURiMmxNWVZpeUtOdEd6SWlwaGsiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOmQ4MDBlZDUzLTczZmYtNGMzMi1hNTkyLTI4Y2E0ZWI5Yjc1OF8wMDAwMDAyMC0wMWQ3LWJlYWItYWQ4YS1hZjNhMGQwMGJhYzMiLCJzY3AiOjE3OTIsImNzaSI6IjE3MTUzMzU0NjkiLCJleHAiOjE3MTU0MjE4NjksInJnbiI6InVrIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiZDgwMGVkNTMtNzNmZi00YzMyLWE1OTItMjhjYTRlYjliNzU4IiwicmVzb3VyY2VMb2NhdGlvbiI6InVrIiwiaWF0IjoxNzE1MzM1NDY5fQ.TFZ7jl2GECNYsc89gmiF9u_zdpyWYN3KUiLjIpIf9DjkNHkUiU7-cy00BuzJK2V5C8I8zkaH-xxaICyOg1rVPRztdQ2MMxrgErXp1AmhvCzdzkTq47i6k8foIL5J9RfckKZBdehOrKvzJ1rExgpIbBm1sJ7EEbSy0dig0xZt_C3SzUYu0ujPmlDk220ZGGA_r4ZoICf4-96VKxin38vcVfQ_nAGbxV7w7Fg2SqDYChcHu1AaCYzb5Nco0wkAUaOXAUdX-5PEwwJtpN8CmC-Akd1PoQM4EjXBAYH0CEDYcNDMn0956RGpNMRDFtyOfDBX5lASK3SgZV4sEsoIAFcdMg";

  /**
   * User identifier for local user.
   */
  const userId: CommunicationIdentifier = {
    communicationUserId: "8:acs:d800ed53-73ff-4c32-a592-28ca4eb9b758_00000020-01d7-beab-ad8a-af3a0d00bac3",
  };

  /**
   * Enter your Teams voice app identifier from the Teams admin center here
   */
  const teamsAppIdentifier: MicrosoftTeamsAppIdentifier = {
    teamsAppId: "11d8c171-b5d2-4cfb-8cb8-80e994377354",
    cloud: "public",
  };

  const widgetParams = {
    userId,
    token,
    teamsAppIdentifier,
  };

  if (!token || !userId || !teamsAppIdentifier) {
    return (
      <Stack verticalAlign="center" style={{ height: "100%", width: "100%" }}>
        <Spinner
          label={"Getting user credentials from server"}
          ariaLive="assertive"
          labelPosition="top"
        />
        ;
      </Stack>
    );
  }

  return (
    <Stack
      style={{ height: "100%", width: "100%", paddingTop: "5rem", paddingBottom: "5rem" }}
      tokens={{ childrenGap: "1.5rem" }}
    >
      <Stack tokens={{ childrenGap: "1rem" }} style={{ margin: "auto" }}>
        <Stack
          style={{ padding: "0rem" }}
          horizontal
          tokens={{ childrenGap: "2rem" }}
        >
          <img
            style={{ width: "25rem", height: "auto" }}
            src={logo}
            alt="logo"
          />
        </Stack>

        <Text style={{textAlign: "center"}}>
          Welcome to Netcompany Support
        </Text>
        <Text style={{textAlign: "center"}}>
          To connect to support immediatly, click the Call button below.
        </Text>
      </Stack>
      <Stack
        horizontal
        tokens={{ childrenGap: "1.5rem" }}
        style={{ overflow: "hidden", margin: "auto" }}
      >
        <CallingWidgetComponent
          widgetAdapterArgs={widgetParams}
          onRenderLogo={() => {
            return (
              <img
                style={{ height: "4rem", width: "4rem", margin: "auto" }}
                src={logo}
                alt="logo"
              />
            );
          }}
        />
      </Stack>
    </Stack>
  );
}

export default App;
