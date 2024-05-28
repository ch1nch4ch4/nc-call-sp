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
import customerlogo from "./leonardo.svg";
// import nclogo from "./nclogo.svg";
import { CallingWidgetComponent } from "./components/CallingWidgetComponent";
import poweredByNetcompany from '../../media/images/PoweredByNetcompany.svg';

registerIcons({
  icons: { dismiss: <Dismiss20Regular />, callAdd: <CallAdd20Regular /> },
});
initializeIcons();
function App() {
  /**
   * Token for local user.
   */
  
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwNUVCMzFEMzBBMjBEQkRBNTMxODU2MkM4QTM2RDFCMzIyMkE2MTkiLCJ4NXQiOiJZRjZ6SFRDaURiMmxNWVZpeUtOdEd6SWlwaGsiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOmQ4MDBlZDUzLTczZmYtNGMzMi1hNTkyLTI4Y2E0ZWI5Yjc1OF8wMDAwMDAyMC0zNjQxLTgyMGUtNDlhMS00NzNhMGQwMDBiMmYiLCJzY3AiOjE3OTIsImNzaSI6IjE3MTYyMTQ4MTYiLCJleHAiOjE3MTYzMDEyMTYsInJnbiI6InVrIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiZDgwMGVkNTMtNzNmZi00YzMyLWE1OTItMjhjYTRlYjliNzU4IiwicmVzb3VyY2VMb2NhdGlvbiI6InVrIiwiaWF0IjoxNzE2MjE0ODE2fQ.LEplJemXVSYJ2zjg-n5BvH3booMnTWVsAPkgP4ZDA4bi1RN4APbLuUCf6Ja_-crYa-9Y3DhfRRHwQjS_rjys_4U1jIaOEJGtulVxA-6ZJ1GxyujOBRo_gugekTa2eydUkPuFIWSFFCMFoKYEc1srSkX3iVZNpRuM8rlac5_jDp0BR_id4yeUipVCcqtUXYyslLjQD8q8gqOR3ENKKt22n-84SwRpN0C0hmgYJw4ZDvPEwvs2RFouQxtdA45RYHLkBqt_bFSwb5KgMIbE754q509PCGC9KXfxtgVF9CzRUOW6u9kWvOfiBxgBuOqAR1M-AW5toW6cXTn4Vo711ArX3w";

  /**
   * User identifier for local user.
   */
  const userId: CommunicationIdentifier = {
    communicationUserId: "8:acs:d800ed53-73ff-4c32-a592-28ca4eb9b758_00000020-3641-820e-49a1-473a0d000b2f",
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
      style={{ height: "100%", width: "100%", padding: "3rem" }}
      tokens={{ childrenGap: "1.5rem" }}
    >
      <Stack tokens={{ childrenGap: "1rem" }} style={{ margin: "auto" }}>
        <Stack
          style={{ padding: "3rem" }}
          horizontal
          tokens={{ childrenGap: "2rem" }}
        >
          <img
            style={{ width: "30rem", height: "auto" }}
            src={customerlogo}
            alt="customerlogo"
          />
        </Stack>
        <Stack>
          <img 
          style={{width: "10rem", height: "auto"}}
          src={poweredByNetcompany}
          alt="poweredByNetcompany"
          />
        </Stack>
        <Text style={{textAlign: "center", color: "white"}}>
          Welcome to Netcompany Support
        </Text>
        <Text style={{textAlign: "center", color: "white"}}>
          To connect to support immediately, click the Call button below.
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
                src={customerlogo}
                alt="customerlogo"
              />
            );
          }}
        />
      </Stack>
    </Stack>
  );
}

export default App;
