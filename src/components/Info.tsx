import React from "react";

interface InfoProps {
  timeline: string;
  teamSize: string;
  targetUser: string;
  myRole: string;
}

function Info({ timeline, teamSize, targetUser, myRole }: InfoProps) {
  return (
    <dl>
      <dt>Timeline</dt>
      <dd>{timeline}</dd>

      <dt>Team Size</dt>
      <dd>{teamSize}</dd>

      <dt>Target User</dt>
      <dd>{targetUser}</dd>

      <dt>My Role</dt>
      <dd>{myRole}</dd>
    </dl>
  );
}

export default Info;
