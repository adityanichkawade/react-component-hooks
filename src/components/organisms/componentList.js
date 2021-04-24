import React from "react";
import config from "./config";

const ComponentList = ({ match }) => {
  const { path } = match;
  const items = config.items[path];
  if (!items) return null;

  const lastIndex = items.length - 1;
  return (
    <section>
      {items.map((item, currentIndex) => (
        <React.Fragment key={item.id}>
          <h2>{item.title}</h2>
          {<item.component />}
          {currentIndex < lastIndex && <hr />}
        </React.Fragment>
      ))}
    </section>
  );
};

export default ComponentList;
