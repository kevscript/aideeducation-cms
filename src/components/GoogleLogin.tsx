import React from "react";
import Button from "payload/dist/admin/components/elements/Button";

/**
 * GoogleLogin Component
 * Renders a button for initiating OAuth2 Google Login.
 * The url has to be the same as the passport.authenticate... call
 * in the server.ts
 */
export default function GoogleLogin() {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>Accès reservé aux membres d'AideEducation.</h3>
      <Button el="anchor" url="/oauth2/authorize">
        Se Connecter
      </Button>
    </div>
  );
}
