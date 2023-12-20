import React from "react";
import { Props } from "payload/components/views/Cell";

const Cell: React.FC<Props> = (props) => {
  const { cellData } = props;
  return <span>{cellData === 0 ? "Indéfini" : cellData}</span>;
};

export default Cell;
