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
      <dt className="font-medium">Timeline</dt>
      <dd className="mb-6 font-light">{timeline}</dd>

      <dt className="font-medium">Team Size</dt>
      <dd className="mb-6 font-light">{teamSize}</dd>

      <dt className="font-medium">Target User</dt>
      <dd className="mb-6 font-light">{targetUser}</dd>

      <dt className="font-medium">My Role</dt>
      <dd className="whitespace-pre-wrap font-light">{myRole}</dd>
    </dl>
  );
}

export default Info;
