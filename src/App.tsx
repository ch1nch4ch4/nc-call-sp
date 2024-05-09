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
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwNUVCMzFEMzBBMjBEQkRBNTMxODU2MkM4QTM2RDFCMzIyMkE2MTkiLCJ4NXQiOiJZRjZ6SFRDaURiMmxNWVZpeUtOdEd6SWlwaGsiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjE3NDVkZDA1LWQyNzgtNGM4NC04M2MyLWUzZDE2Yjg3NThhMl8wMDAwMDAxZi1mNzk2LTcxYmQtYTdhYy00NzNhMGQwMGRjZDYiLCJzY3AiOjE3OTIsImNzaSI6IjE3MTUxNjM0MTgiLCJleHAiOjE3MTUyNDk4MTgsInJnbiI6InVrIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiMTc0NWRkMDUtZDI3OC00Yzg0LTgzYzItZTNkMTZiODc1OGEyIiwicmVzb3VyY2VMb2NhdGlvbiI6InVrIiwiaWF0IjoxNzE1MTYzNDE4fQ.XHqHT5mEZcSGs0TuufWTgn8gFec3ki5yeKPNLwjkk_JgVfq_RQqzb-SN-3QBwBtjzaVN3TaIMb6reuM4X2jO16-J4U_nZ84qS7xfgyCSg5Bk-wMh6YqDNJGa6S0knMMtGQGS0r78qqDFmpTjIDeZOCYvYHEfK_CVR1pQ-XhyMGwt_46_gplkJxLfg2BNTre56aYgq3MUvgdOpthun-INxTs9QLWjqPAMtipMF54HoEnIRLNC4wsY4JBBsmGMc7Q1H3mlIXn8m5rqz5iVwrTN7H5pMfQFU82o2zBQ2qU-32W5paqRhSx8ROaqpbiSFd5FbOvGDyMX-4I7OoSH7plkbw";

  /**
   * User identifier for local user.
   */
  const userId: CommunicationIdentifier = {
    communicationUserId: "8:acs:1745dd05-d278-4c84-83c2-e3d16b8758a2_0000001f-f796-71bd-a7ac-473a0d00dcd6",
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
