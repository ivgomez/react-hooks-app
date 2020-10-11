import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("showed again from Small component");
  return <small>{value}</small>;
});
