import React from "react";
import { Props } from "payload/components/views/Cell";

export const OrderCell: React.FC<Props> = (props) => {
  const { cellData } = props;
  return <span>{cellData === 0 ? "Indéfini" : Number(cellData)}</span>;
};
