import classNames from "classnames";
import React from "react";

export const Container = (props: {
  size?: "large" | "medium";
  children?: React.ReactNode;
}) => {
  return (
    <main
      className={classNames(
        "md:px-30 lg:px-30 min-h-[60vh] px-5 sm:px-20 bg-cover",
        {
          "xl:mx-40": props.size === "medium" || props.size === undefined,
          "xl:mx-35": props.size === "large",
        }
      )}
    >
      {props.children}
    </main>
  );
};

export const Row = (props: { children?: React.ReactNode }) => {
  return <div className="justify-center my-5 lg:flex">{props.children}</div>;
};

export const Col = (props: {
  children?: React.ReactNode;
  numerator: number;
  denominator: number;
}) => {
  return (
    <div
      className={`basis-${props.numerator}/${props.denominator} mx-2 w-full`}
    >
      {props.children}
    </div>
  );
};
