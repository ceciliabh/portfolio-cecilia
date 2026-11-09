import React from "react";

function SingleService({ title, description, icon: Icon }) {
  return (
    <div className="border-t border-line/20 pt-6">
      {Icon && <Icon className="text-3xl text-accent" aria-hidden="true" />}
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export default SingleService;
